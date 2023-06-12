const express = require('express');
const { v4: uuidv4 } = require('uuid');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();
router.use(express.json());

// Create a new place
router.post('/', async (req, res) => {
    const { id, category_id, name, description, city, price, lat, lng, rating, image } = req.body;
    
    try {

        if(id){
            const existingId = await prisma.place.findUnique({
                where: { id: parseInt(id) },
            });
          
            if (existingId) {
                return res.status(409).json({ message: 'Id already exists.' });
            };
        }

        const existingCategory = await prisma.category.findUnique({
            where: { id: category_id },
        });
      
        if (!existingCategory) {
            return res.status(404).json({ message: 'Category id not found.' });
        };
        
        const place = await prisma.place.create({
            data: {
                id: parseInt(id) || undefined,
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
  
      res.json({ message: 'Place created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'An error occured when add the place.' });
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
        res.status(500).json({ message: 'An error occured when getting all places.' });
    }
});

router.get('/search', async (req, res) => {
    const category = req.query.category;
    console.log(category);

    try {
        const places = await prisma.place.findMany({
            where: {
                category: {
                  name: category
                }
              },
              include: {
                category: true
            }
        });

        if(Object.keys(places).length > 0)
            res.json(places);
        else res.json({message : 'No places yet!'})
        } 
    catch (error) {
        res.status(500).json({ message: 'An error occured when searching the place.' });
    }
});

// Retrieve a specific place by ID
router.get('/:id', async (req, res) => {
    const placeId = parseInt(req.params.id);
    try {

        const existingId = await prisma.place.findUnique({
            where: { id: placeId },
        });
      
        if (!existingId) {
            return res.status(404).json({ message: 'Place id not found.' });
        };

        const places = await prisma.place.findUnique({
            where: {
                id: placeId
            }
        })
        
        res.json(places);
    } 
    catch (error) {
        res.status(500).json({ message: 'An error occured when get the place.' });
    }
});

// Update a place by ID
router.put('/:id', async (req, res) => {
    const {category_id, name, description, city, price, lat, lng, rating, image } = req.body;
    const id = parseInt(req.params.id)
    try {

        const existingId = await prisma.place.findUnique({
            where: { id },
        });
        
        if (!existingId) {
            return res.status(404).json({ message: 'Place id not found.' });
        };
        

        const existingCategory = await prisma.category.findUnique({
            where: { id: category_id },
        });
      
        if (!existingCategory) {
            return res.status(404).json({ message: 'Category id not found.' });
        };
        
        const place = await prisma.place.update({
            data: {
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
            where: {
                id
            }
        });
  
      res.json({ message: 'Place updated successfully' });
    } 
    catch (error) {
        res.status(500).json({ message: 'An error occured when updating the place.' });
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
        res.status(500).json({ message: 'An error occured when deleting the place.' });
    }
});

module.exports = router;
