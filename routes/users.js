const express = require('express');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyToken = require('../middleware/auth');

const router = express.Router();
router.use(express.json());

// register user function
router.post('/register', async(req, res) => {
    const { username, password, email, full_name, location, profile_pic, solo_traveler } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({
            where: { username },
        });

        if (existingUser) {
            return res.status(409).json({
                error: true,
                message: 'Username is already taken.'
            });
        }

        const existingEmail = await prisma.user.findUnique({
            where: { email },
        });

        if (existingEmail) {
            return res.status(409).json({
                error: true,
                message: 'Email is already taken.'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
                email,
                full_name,
                location: location || undefined,
                profile_pic,
                solo_traveler
            },
        });

        res.status(201).json({
            error: false,
            message: 'User registered successfully.'
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'An error occurred while registering the user.'
        });
    }
});

// login user function
router.post('/login', async(req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user exists
        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) {
            return res.status(401).json({
                error: true,
                message: 'Authentication failed. Invalid username or password.'
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                error: true,
                message: 'Authentication failed. Invalid username or password.'
            });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, `${process.env.JWT_SECRET_KEY}`, { expiresIn: '1d' });

        res.status(200).json({
            error: false,
            message: 'Login success!',
            token,
            user_id: user.id
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'An error occurred while authenticating the user.'
        });
    }
});

// update user function
router.put('/:id', verifyToken, async(req, res) => {
    const { username, password, email, full_name, location, profile_pic, solo_traveler } = req.body;
    const id = parseInt(req.params.id);

    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                id: { not: id },
                username
            }
        });

        if (existingUser) {
            return res.status(409).json({
                error: true,
                message: 'Username is already taken.'
            });
        }

        const existingEmail = await prisma.user.findFirst({
            where: {
                id: { not: id },
                email
            }
        });

        if (existingEmail) {
            return res.status(409).json({
                error: true,
                message: 'Email is already taken.'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const updateUser = await prisma.user.update({
        data: {
            username,
            password: hashedPassword,
            email,
            full_name,
            location,
            profile_pic,
            solo_traveler
        },
        where: {
            id
        }
        });

        res.status(200).json({
            error: false,
            message: 'User updated successfully.'
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'An error occurred while updating the user.'
        });
    }
});


// delete user function
router.delete('/:id', verifyToken, async(req, res) => {
    const user_id = parseInt(req.params.id);
    try {
        const isuserIdValid = await prisma.user.findUnique({
            where: { id: user_id },
        });

        if (!isuserIdValid) {
            return res.status(404).json({
                error: true,
                message: 'User id not found!'
            });
        }

        const relatedRecords = await prisma.userLikedCategories.findMany({
            where: { user_id: user_id },
        });

        if (relatedRecords.length > 0) {
            return res.json({
                error: true,
                message: 'Cannot delete user, please check related records (FK)'
            })
        };

        const user = await prisma.user.delete({
            where: {
                id: user_id
            },
            include: {
                liked_categories: true
            }
        })

        res.json({
            error: false,
            message: 'User successfully deleted'
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: true,
            message: 'An error occurred while deleting the user.'
        });
    }
});

router.get('/', verifyToken, async(req, res) => {
    try {
        const users = await prisma.user.findMany();

        if (Object.keys(users).length > 0) {
            res.json({
                error: false,
                data: users
            });
        } else {
            res.json({
                error: false,
                message: 'No user yet!'
            });
        }
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'An error occurred while getting all users.'
        });
    }
});

router.get('/:id', verifyToken, async(req, res) => {
    const user_id = parseInt(req.params.id);
    try {
        const isuserIdValid = await prisma.user.findUnique({
            where: { id: user_id }
        });

        if (!isuserIdValid) {
            return res.status(404).json({
                error: true,
                message: 'User id not found!'
            });
        }

        const user = await prisma.user.findUnique({
            where: {
                id: user_id
            },
            include: {
                liked_categories: {
                    where: { user_id }
                }
            }
        })

        res.json({
            error: false,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'An error occurred while getting the user.'
        });
    }
});

router.get('/:id/plan', verifyToken, async(req, res) => {
    const user_id = parseInt(req.params.id);

    try {
        const isUserIdValid = await prisma.user.findUnique({
            where: { id: user_id }
        });

        if (!isUserIdValid) {
            return res.status(404).json({
                error: true,
                message: 'User id not found!'
            });
        }

        const user = await prisma.user.findUnique({
            where: {
                id: user_id
            },
            include: {
                plan: {
                    include: {
                        PlanPlace: {
                            include: {
                                place: true
                            },
                            orderBy: {
                                depart_time: 'asc'
                            }
                        }
                    },
                    orderBy: {
                        createdAt: 'desc',
                    }
                }
            },
        });

        res.json({
            error: false,
            data: user
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: 'An error occurred while getting the plan of user.'
        });
    }
});

router.post('/predict', verifyToken, async(req, res) => {
    const { username, location } = req.body
    
    try {
        const user = await prisma.user.findFirst({
            where: {
                username
            },
            select:{
                id: true
            }
        });

        if(!user){
            return res.status(404).json({
                error: true,
                message: "User not found!"
            });
        }

        const user_id = user.id;

        let placesWithoutRating;
        let response;
        
        // Get all of the city
        const distinctCities = await prisma.place.findMany({
            select: {
              city: true
            },
            distinct: ['city']
        });
          
        const isInDistinctCities = distinctCities.map(city => city.city).includes(location);

        if(isInDistinctCities){
            placesWithoutRating = await prisma.place.findMany({
                where: {
                  NOT: {
                    ratings: {
                      some: {
                        user_id,
                      },
                    },
                  },
                  city: location
                },
                select: {
                    id: true
                },
                orderBy: {
                    id: 'asc'
                }
            });
        }

        else{
            placesWithoutRating = await prisma.place.findMany({
                where: {
                  NOT: {
                    ratings: {
                      some: {
                        user_id,
                      },
                    },
                  },
                },
                select: {
                    id: true
                },
                orderBy: {
                    id: 'asc'
                }
            });
        }
        
        const ids = placesWithoutRating.map(places => places.id);
        const filteredIds = ids.filter(id => id < 437);
        const places_not_visited = filteredIds.join(", ");

        // Get from model API
        const data = {
            'user_id': user_id,
            'places_not_visited': places_not_visited
        };
          
        axios.post('https://tresure-model-v5cbzwlk4q-uc.a.run.app/predict', data)
        .then(async r => {
            response = r.data;
            const placeIds = response['data']

            const recomendationPlaces = await prisma.place.findMany({
                where: {
                    id: {
                        in: placeIds
                    }
                },
                orderBy: {
                    city: 'asc'
                }
            });

            res.json({
                error: false,
                data: recomendationPlaces
            });
        })
        .catch(error => {
            console.error(error)
            return res.status(500).json({
                error: true,
                message: "An error occured when getting the recomendation."
            });
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'An error occurred while doing recomends.'
        });
    }
});

module.exports = router;