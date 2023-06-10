const express = require('express');
const { v4: uuidv4 } = require('uuid');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();
router.use(express.json());

router.post('/', async (req, res) => {
    const { id, name } = req.body;
    
    try {
        const existingId = await prisma.category.findUnique({
            where: { id },
        });
      
        if (existingId) {
            return res.status(409).json({ message: 'Id already exists.' });
        };

        const existingCategory = await prisma.category.findUnique({
            where: { name },
        });
      
        if (existingCategory) {
            return res.status(409).json({ message: 'Category already exists.' });
        };
        
        const category = await prisma.category.create({
            data: {
                id: id || undefined,
                name
            },
        });
  
        res.json({ message: 'Category created successfully'});
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the category.' });
    }
});

router.get('/', async (req, res) => {
    try {
        const categories = await prisma.category.findMany();

        if(Object.keys(categories).length > 0){
            return res.json(categories);
        }
            
        res.json({message : 'No categories yet!'})
    } 
    catch (error) {
        res.status(500).json({ error: 'An error occurred while getting all categories.' });
    }
});

router.get('/:id', async (req, res) => {
  const categoryId = req.params.id;
  try {
    const isCategoryIdValid = await prisma.category.findUnique({
        where: {id : categoryId}
    });

    if (!isCategoryIdValid){
        return res.status(404).json({ message: 'Category id not found.' });
    };

    const category = await prisma.category.findUnique({
        where: {
            id: categoryId
        }
    });
    
    res.json(category);
  } 
  catch (error) {
    res.status(500).json({ error: 'An error occurred while getting the category.' });
  }
});

router.put('/:id', async (req, res) => {
  const categoryId = req.params.id;
  const { name } = req.body;

  try {
    const isCategoryIdValid = await prisma.category.findUnique({
        where: {id : categoryId}
    });

    if (!isCategoryIdValid){
        return res.status(404).json({ message: 'Category id not found.' });
    };

    const existingCategory = await prisma.category.findUnique({
        where: { name },
    });
  
    if (existingCategory) {
        return res.status(409).json({ message: 'Category already exists.' });
    };

    const category = await prisma.category.update({
        data: {
            name
        },
        where: {
            id: categoryId
        }
    });

    res.json({message : 'Category successfully updated'});
  } 
  catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the category.' });
  }
});

router.delete('/:id', async (req, res) => {
const categoryId = req.params.id;
  try {
    const isCategoryIdValid = await prisma.category.findUnique({
        where: {id : categoryId}
    });

    if (!isCategoryIdValid){
        return res.status(404).json({ message: 'Category id not found.' });
    };

    const relatedRecords = await prisma.place.findMany({
        where: { category_id : categoryId },
    });

    if (relatedRecords.length > 0) {
        return res.json({error : 'Category already used by place'});
    }

    const category = await prisma.category.delete({
        where: {
            id: categoryId
        }
    });
      
    res.json({message : 'Category successfully deleted'});
  } 
  catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred while deleting the category.' });
  }
});

module.exports = router;