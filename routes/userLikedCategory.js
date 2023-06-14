const express = require('express');
const { v4: uuidv4 } = require('uuid');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();
router.use(express.json());

// create user liked category function
router.post('/', async(req, res) => {
    const { category_id } = req.body;
    const id = uuidv4();

    try {
        const user_id = parseInt(req.body.user_id);

        if(!user_id){
            return res.json({
                error: true,
                message: "Please input a valid user_id (Int)."
            })
        }

        const isCategoryIdValid = await prisma.category.findUnique({
            where: { id: category_id },
        });

        if (!isCategoryIdValid) {
            return res.status(404).json({ message: 'Category id not found!' });
        };

        const isUserIdValid = await prisma.user.findUnique({
            where: { id: user_id },
        });

        if (!isUserIdValid) {
            return res.status(404).json({ message: 'User id not found!' });
        };

        const userLiked = await prisma.userLikedCategories.create({
            data: {
                id,
                user_id,
                category_id
            },
        });

        res.json({ message: 'Category successfull added to user liked' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding the liked category.' });
    }
});

// get all user liked category
router.get('/', async(req, res) => {
    try {
        const userLikedCategories = await prisma.userLikedCategories.findMany();

        if (Object.keys(userLikedCategories).length > 0){
            res.json(userLikedCategories);
        }
        else res.json({ message: 'No liked category Yet!' })
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while getting all the liked category.' });
    }
});

// update user liked category
router.put('/:id', async(req, res) => {
    const userLikedCategoriesId = req.params.id;
    const { category_id } = req.body;

    try {
        const user_id = parseInt(req.body.user_id);

        if(!user_id){
            return res.json({
                error: true,
                message: "Please input a valid user_id (Int)."
            })
        }

        const isUserLikedCategoriesIdValid = await prisma.userLikedCategories.findUnique({
            where: { id: userLikedCategoriesId },
        });

        if (!isUserLikedCategoriesIdValid) {
            return res.status(404).json({ message: 'User liked id not found!' });
        };

        const isCategoryIdValid = await prisma.category.findUnique({
            where: { id: category_id },
        });

        if (!isCategoryIdValid) {
            return res.status(404).json({ message: 'Category id not found!' });
        };

        const isUserIdValid = await prisma.user.findUnique({
            where: { id: user_id },
        });

        if (!isUserIdValid) {
            return res.status(404).json({ message: 'User id not found!' });
        };

        const userLiked = await prisma.userLikedCategories.update({
            data: {
                user_id,
                category_id,
            },
            where: {
                id: userLikedCategoriesId
            }
        })

        res.json({ message: 'Category liked successfully updated' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the liked category.' });
    }
});

// get user liked category by id
router.get('/:id', async(req, res) => {
    const userLikedCategoriesId = req.params.id;

    try {
        const isUserLikedCategoriesIdValid = await prisma.userLikedCategories.findUnique({
            where: { id: userLikedCategoriesId },
        });

        if (!isUserLikedCategoriesIdValid) {
            return res.status(404).json({ message: 'User liked id not found!' });
        };

        const userLikedCategories = await prisma.userLikedCategories.findUnique({
            where: {
                id: userLikedCategoriesId
            }
        });

        res.json(userLikedCategories);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while getting all user liked.' });
    }
});

// delete user liked category
router.delete('/:id', async(req, res) => {
    const userLikedCategoriesId = req.params.id;

    try {
        const isUserLikedCategoriesIdValid = await prisma.userLikedCategories.findUnique({
            where: { id: userLikedCategoriesId },
        });

        if (!isUserLikedCategoriesIdValid) {
            return res.status(404).json({ message: 'User liked id not found!' });
        };

        const userLikedCategories = await prisma.userLikedCategories.delete({
            where: {
                id: userLikedCategoriesId
            }
        });

        res.json({ message: 'User liked category successfully deleted' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the liked category.' });
    }
});

module.exports = router;