const express = require('express');
const { v4: uuidv4 } = require('uuid');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();
router.use(express.json());

// Create a new place
router.post('/', async(req, res) => {
    const { id, category_id, name, description, city, price, lat, lng, rating, image } = req.body;

    try {
        if (id) {
            const existingId = await prisma.place.findUnique({
                where: { id: parseInt(id) },
            });

            if (existingId) {
                return res.status(409).json({ message: 'Id already exists.' });
            }
        }

        const existingCategory = await prisma.category.findUnique({
            where: { id: category_id },
        });

        if (!existingCategory) {
            return res.status(404).json({ message: 'Category id not found.' });
        }

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
        console.error(error);
        res.status(500).json({ message: 'An error occurred when adding the place.' });
    }
});

// Retrieve all places
router.get('/', async(req, res) => {
    try {
        const places = await prisma.place.findMany();

        if (places.length > 0) {
            res.json(places);
        } else {
            res.json({ message: 'No places yet!' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred when getting all places.' });
    }
});

// Retrieve all places by category
router.get('/search', async(req, res) => {
    const category = req.query.category;

    try {
        const places = await prisma.place.findMany({
            where: {
                category: {
                    name: category,
                },
            },
            include: {
                category: true,
            },
        });

        if (places.length > 0) {
            res.json(places);
        } else {
            res.json({ message: 'No places found for the specified category.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred when searching for places.' });
    }
});

// Retrieve a specific place by ID
router.get('/:id', async(req, res) => {
    const placeId = parseInt(req.params.id);

    try {
        const place = await prisma.place.findUnique({
            where: {
                id: placeId,
            },
        });

        if (!place) {
            res.status(404).json({ message: 'Place not found with that ID' });
        } else {
            res.json(place);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred when getting the place.' });
    }
});

// Update a place by ID
router.put('/:id', async(req, res) => {
    const placeId = parseInt(req.params.id);
    const { category_id, name, description, city, price, lat, lng, rating, image } = req.body;

    try {
        const existingPlace = await prisma.place.findUnique({
            where: {
                id: placeId,
            },
        });

        if (!existingPlace) {
            res.status(404).json({ message: 'Place not found with that ID' });
            return;
        }

        const existingCategory = await prisma.category.findUnique({
            where: {
                id: category_id,
            },
        });

        if (!existingCategory) {
            res.status(404).json({ message: 'Category not found with that ID' });
            return;
        }

        const updatedPlace = await prisma.place.update({
            where: {
                id: placeId,
            },
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
        });

        res.json({ message: 'Place updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred when updating the place.' });
    }
});

// Delete a place by ID
router.delete('/:id', async(req, res) => {
    const placeId = parseInt(req.params.id);

    try {
        const existingPlace = await prisma.place.findUnique({
            where: {
                id: placeId,
            },
        });

        if (!existingPlace) {
            res.status(404).json({ message: 'Place not found with that ID' });
            return;
        }

        await prisma.place.delete({
            where: {
                id: placeId,
            },
        });

        res.json({ message: 'Place deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred when deleting the place.' });
    }
});

module.exports = router;