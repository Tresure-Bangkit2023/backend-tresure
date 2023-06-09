const express = require('express');
const { v4: uuidv4 } = require('uuid');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const verifyToken = require('../middleware/auth');

const router = express.Router();
router.use(express.json());

// create category function
router.post('/', async(req, res) => {
    const { id, name } = req.body;

    try {
        if (id) {
            const existingId = await prisma.category.findUnique({
                where: { id: parseInt(id) },
            });

            if (existingId) {
                return res.status(409).json({ message: 'Id already exists.' });
            }
        }

        const existingCategory = await prisma.category.findUnique({
            where: { name },
        });

        if (existingCategory) {
            return res.status(409).json({ message: 'Category already exists.' });
        }

        const category = await prisma.category.create({
            data: {
                id: parseInt(id) || undefined,
                name
            },
        });

        res.json({ message: 'Category created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding the category.' });
    }
});

// get all categories function
router.get('/', async(req, res) => {
    try {
        const categories = await prisma.category.findMany({
            orderBy: { id: 'asc' }
        });

        if (Object.keys(categories).length > 0) {
            return res.json(categories);
        }

        res.json({ message: 'No categories yet!' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while getting all categories.' });
    }
});

// get category by id function
router.get('/:id', async(req, res) => {
    const categoryId = parseInt(req.params.id);
    try {
        const category = await prisma.category.findUnique({
            where: { id: categoryId }
        });

        if (!category) {
            return res.status(404).json({ message: 'Category id not found.' });
        }

        res.json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while getting the category.' });
    }
});

// update category function
router.put('/:id', async(req, res) => {
    const categoryId = parseInt(req.params.id);
    const { name } = req.body;

    try {
        const existingCategory = await prisma.category.findUnique({
            where: { name },
        });

        if (existingCategory) {
            return res.status(409).json({ message: 'Category already exists.' });
        }

        const category = await prisma.category.update({
            data: {
                name
            },
            where: {
                id: categoryId
            }
        });

        res.json({ message: 'Category successfully updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the category.' });
    }
});

// delete category function
router.delete('/:id', async(req, res) => {
    const categoryId = parseInt(req.params.id);
    try {
        const isCategoryIdValid = await prisma.category.findUnique({
            where: { id: categoryId }
        });

        if (!isCategoryIdValid) {
            return res.status(404).json({ message: 'Category id not found.' });
        }

        const relatedRecords = await prisma.place.findMany({
            where: { category_id: categoryId },
        });

        if (relatedRecords.length > 0) {
            return res.json({ error: 'Category already used by place' });
        }

        const category = await prisma.category.delete({
            where: {
                id: categoryId
            }
        });

        res.json({ message: 'Category successfully deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the category.' });
    }
});

module.exports = router;