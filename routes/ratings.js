const express = require('express');
const { v4: uuidv4 } = require('uuid');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();
router.use(express.json());

// Create a new rating
router.post('/', async(req, res) => {
    const { user_id, place_id, rating } = req.body;
    const id = uuidv4();


    try {
        const user_id_ = parseInt(user_id)
        const place_id_ = parseInt(place_id)

        if(!user_id_ || !place_id_){
            return res.json({
                error: true,
                message: "Please input a valid user_id or place_id (Int)."
            })
        }

        const isPlaceIdValid = await prisma.place.findUnique({
            where: { id: place_id_ },
        });

        if (!isPlaceIdValid) {
            return res.status(404).json({ message: 'Place id not found!' });
        };

        const isUserIdValid = await prisma.user.findUnique({
            where: { id: user_id_ },
        });

        if (!isUserIdValid) {
            return res.status(404).json({ message: 'User id not found!' });
        };

        if (rating > 5.0 || rating < 1.0) {
            return res.json({ message: 'Rating is start from 1.0 until 5.0!' });
        }

        // Find if user has given a rating
        const check = await prisma.rating.findFirst({
            where: {
                AND: [
                  { user_id: user_id_ },
                  { place_id: place_id_ },
                ],
            },
        });

        if(check != null){
            return res.status(409).json({
                message: 'User has given a rating to this place! Please either edit or delete the rating.'
            });
        }

        const ratings = await prisma.rating.create({
            data: {
                id,
                user_id: user_id_,
                place_id: place_id_,
                rating: parseFloat(rating)
            },
        });

        const ratingPlace = await prisma.rating.findMany({
            where: {
              place_id: place_id_
            },
        });

        const ratingValues = ratingPlace.map((rating) => rating.rating);
        const totalRating = ratingValues.reduce((sum, rating) => sum + rating, 0);
        const averageRating = totalRating / ratingValues.length;

        const updateRating = await prisma.place.update({
            where: {
              id: place_id_,
            },
            data: {
              rating: parseFloat(averageRating.toFixed(2)),
            },
        });
          

        res.json({ message: 'Rating successfully added' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'An error occurred while adding the rating.' });
    }
});

// Get all rating
router.get('/', async(req, res) => {
    try {
        const rating = await prisma.rating.findMany();

        if (Object.keys(rating).length > 0){
            res.json({
                error: false,
                data: rating
            });
        }
            
        else res.json({ message: 'No rating Yet!' })
    } catch (error) {
        res.status(500).json({ 
            error: true,
            message: 'An error occurred while getting all the rating from user.' 
        });
    }
});

// Update a rating
router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const { user_id, place_id, rating } = req.body;

    try {
        const user_id_ = parseInt(user_id)
        const place_id_ = parseInt(place_id)

        if(!user_id_ || !place_id_){
            return res.json({
                error: true,
                message: "Please input a valid user_id or place_id (Int)."
            })
        }

        const isPlaceIdValid = await prisma.place.findUnique({
            where: { id: place_id_ },
        });

        if (!isPlaceIdValid) {
            return res.status(404).json({ message: 'Place id not found!' });
        };

        const isUserIdValid = await prisma.user.findUnique({
            where: { id: user_id_ },
        });

        if (!isUserIdValid) {
            return res.status(404).json({ message: 'User id not found!' });
        };

        if (rating > 5.0 || rating < 1.0) {
            return res.json({ message: 'Rating is start from 1.0 until 5.0!' });
        }

        // Find if user has given a rating
        const check = await prisma.rating.findFirst({
            where: {
                AND: [
                  { user_id: user_id_ },
                  { place_id: place_id_ },
                ],
            },
        });

        if(check == null){
            return res.status(409).json({
                message: 'User hasn\'t given a rating to this place! Please add first.'
            });
        }

        const ratings = await prisma.rating.update({
            data: {
                user_id: user_id_,
                place_id: place_id_,
                rating: parseFloat(rating)
            },
            where: {
                id
            }
        });

        const ratingPlace = await prisma.rating.findMany({
            where: {
              place_id: place_id_
            },
        });

        const ratingValues = ratingPlace.map((rating) => rating.rating);
        const totalRating = ratingValues.reduce((sum, rating) => sum + rating, 0);
        const averageRating = totalRating / ratingValues.length;

        const updateRating = await prisma.place.update({
            where: {
              id: place_id_,
            },
            data: {
              rating: parseFloat(averageRating.toFixed(2)),
            },
        });

        res.json({ message: 'Rating successfully updated' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the rating.' });
    }
});

// Get a rating by id
router.get('/:id', async(req, res) => {
    const id = req.params.id;

    try {
        const isRatingIdValid = await prisma.rating.findUnique({
            where: { id },
        });

        if (!isRatingIdValid) {
            return res.status(404).json({ message: 'Rating id not found!' });
        };

        const ratings = await prisma.rating.findUnique({
            where: {
                id
            },
            include: {
                place: true
            }
        });

        res.json(ratings);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while getting all the rating.' });
    }
});

// Delete a rating
router.delete('/:id', async(req, res) => {
    const id = req.params.id;

    try {
        const isRatingIdValid = await prisma.rating.findUnique({
            where: { id },
        });

        if (!isRatingIdValid) {
            return res.status(404).json({ message: 'Rating id not found!' });
        };

        const place = await prisma.rating.findFirst({
            where: {
                id
            },
            select:{
                place_id: true
            }
        });

        const ratings = await prisma.rating.delete({
            where: {
                id
            }
        });

        const ratingPlace = await prisma.rating.findMany({
            where: {
              place_id: parseInt(place.place_id)
            },
        });

        const ratingValues = ratingPlace.map((rating) => rating.rating);
        const totalRating = ratingValues.reduce((sum, rating) => sum + rating, 0);
        const averageRating = totalRating / ratingValues.length;

        const updateRating = await prisma.place.update({
            where: {
              id: parseInt(place.place_id),
            },
            data: {
              rating: parseFloat(averageRating.toFixed(2)),
            },
        });

        res.json({ message: 'Rating successfully deleted' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the rating.' });
    }
});

module.exports = router;