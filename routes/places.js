const express = require('express');
const { v4: uuidv4 } = require('uuid');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();
router.use(express.json());

// Create a new place
router.post('/', async (req, res) => {
    const { category_id, name, description, city, price, lat, lng, rating, image } = req.body;
    const id = uuidv4();
    try {
      const place = await prisma.place.create({
        data: {
          id,
          category_id,
          name,
          description,
          city,
          price,
          lat,
          lng,
          rating,
          image,
        },
      });
  
      res.json({ message: 'Place created successfully', placeId: place.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

// Retrieve all places
router.get('/', async (req, res) => {
    try {
        const places = await prisma.place.findMany();

        if(Object.keys(places).length > 0)
            res.json(places);
        else res.json({message : 'No places yet!'})
        } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// // Retrieve a specific place by ID
router.get('/:id', async (req, res) => {
    const placeId = req.params.id;
    try {
        const places = await prisma.place.findUnique({
            where: {
                id: placeId
            }
        })
        
        if(places === null) 
            res.status(404).json({ message: 'Place not found with that ID' });
        
        else res.json(places);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update a place by ID
router.put('/:id', async (req, res) => {
    const placeId = req.params.id;
    const { category_id, name, description, city, price, lat, lng, rating, image } = req.body;

    try {
        const places = await prisma.place.update({
            data: {
                category_id,
                name,
                description,
                city,
                price,
                lat,
                lng,
                rating,
                image
            },
            where: {
                id: placeId
            }
        })

        res.json({message : 'Place successfully updated'});
    } 
    catch (error) {
        if (error['meta']['cause'].includes('not found')){
            res.status(404).json({ message: 'Place not found with that ID' });
        }
        else{
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});

// Delete a place by ID
router.delete('/:id', async (req, res) => {
  const placeId = req.params.id;
    try {
        const places = await prisma.place.delete({
            where: {
                id: placeId
            }
        })
        
        res.json({message : 'Place successfully deleted'});
    } 
    catch (error) {
        if (error['meta']['cause'].includes('not exist')){
            res.status(404).json({ message: 'Place to delete does not exist.' });
        }
        else{
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});

module.exports = router;
