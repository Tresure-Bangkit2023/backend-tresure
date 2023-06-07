const express = require('express');
const { v4: uuidv4 } = require('uuid');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
router.use(express.json());

router.post('/register', async (req, res) => {
  const { username, password, email, full_name, location, profile_pic, solo_traveler } = req.body;
  const id = uuidv4();

  try {
    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return res.status(409).json({ message: 'Username is already taken.' });
    }

    const existingEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingEmail) {
      return res.status(409).json({ message: 'Email is already taken.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        id,
        username,
        password: hashedPassword,
        email,
        full_name,
        location,
        profile_pic,
        solo_traveler
      },
    });

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while registering the user.' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. Invalid username or password.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Authentication failed. Invalid username or password.' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while authenticating the user.' });
  }
});

router.put('/:id', async (req, res) => {
  const { username, password, email, full_name, location, profile_pic, solo_traveler } = req.body;
  const id = req.params.id;

  try {
    const isUserIdValid = await prisma.user.findUnique({
      where: {id}
    });

    if (!isUserIdValid) {
      return res.status(404).json({ message: 'User Id not found!' });
    }

    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return res.status(409).json({ message: 'Username is already taken.' });
    }

    const existingEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingEmail) {
      return res.status(409).json({ message: 'Email is already taken.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updateUser = await prisma.user.update({
      data: {
        id,
        username,
        password: hashedPassword,
        email,
        full_name,
        location,
        profile_pic,
        solo_traveler
      },
    });

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while registering the user.' });
  }
});

router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
    try {
        const isuserIdValid = await prisma.user.findUnique({
            where: {id : userId},
        });

        if (!isuserIdValid){
            return res.status(404).json({message : 'User id not found!'});
        }

        const relatedRecords = await prisma.userLikedCategories.findMany({
            where: { user_id : userId },
        });

        if (relatedRecords.length > 0) {
            return res.json({error : 'Cannot delete user, please check related records (FK)'})
        };

        const user = await prisma.user.delete({
            where: {
                id: userId
            },
            include: {
                userLikedCategories : true
            }
        })
        
        res.json({message : 'User successfully deleted'});
    } 
    catch (error) {
        res.status(500).json({ error : 'An error occurred while deleting the user.' });
    }
});

router.get('/', async (req, res) => {
  try {
      const users = await prisma.user.findMany();

      if(Object.keys(users).length > 0){
        res.json(users);
      }
          
      else {
        res.json({message : 'No user yet!'});
      } 
  }
  catch (error) {
      res.status(500).json({ error: 'An error occurred while getting all users.' });
  }
});

router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
      const isuserIdValid = await prisma.user.findUnique({
          where : { id : userId }
      });

      if (!isuserIdValid){
          return res.status(404).json({message : 'User id not found!'});
      }

      const user = await prisma.user.findUnique({
          where: {
              id: userId
          },
          include : {
              liked_categories: {
                where: {user_id : userId}
              }
          }
      })
          
      res.json(user);
  } 
  catch (error) {
      console.error(error);
      res.status(500).json({ error : 'An error occurred while getting the user.' });
  }
});

router.get('/:id/plan', async (req, res) => {
  const userId = req.params.id
  
  try {
    const isUserIdValid = await prisma.user.findUnique({
      where: {id : userId}
    });

    if (!isUserIdValid){
      return res.status(404).json({message : 'User id not found!'});
    }

    const user = await prisma.user.findUnique({
      where:{
        id : userId
      },
      include: {
        plan: {
          include: {
            PlanPlace : true,
          }
        }
      },
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while getting the plan of user.' });
  }
});

module.exports = router;