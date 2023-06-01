const express = require('express');
const { v4: uuidv4 } = require('uuid');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();
router.use(express.json());

// Create a new user
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const id = uuidv4();
    try {
      const user = await prisma.user.create({
        data: {
          id,
          username,
          password
        },
      });
  
      res.json({ message: 'User registered successfully', userId: user.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

// Retrieve all places
router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany();

        if(Object.keys(users).length > 0)
            res.json(users);
        else res.json({message : 'No user yet!'})
        } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/:id/plan', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        plan: {
          include: {
            PlanPlace : true,
          }
        }
      },
    });

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving the users.' });
  }
});

module.exports = router