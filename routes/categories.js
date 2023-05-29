const express = require('express');
const { nanoid } = require('nanoid');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();
router.use(express.json());

// Add a new category
router.post('/', async (req, res) => {
    const { name } = req.body;
    const id = nanoid(16);
    try {
      const category = await prisma.category.create({
        data: {
          id,
          name
        },
      });
  
      res.json({ message: 'Category created successfully', categoryId: category.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

// Get all of categories
router.get('/', async (req, res) => {
    try {
        const categories = await prisma.category.findMany();

        if(Object.keys(categories).length > 0)
            res.json(categories);
        else res.json({message : 'No categories yet!'})
        } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Retrieve a specific category by ID
router.get('/:id', async (req, res) => {
  const categoryId = req.params.id;
  try {
      const category = await prisma.category.findUnique({
          where: {
              id: categoryId
          }
      })
      
      if(places === null) 
          res.status(404).json({ message: 'Category not found with that ID' });
      
      else res.json(category);
  } 
  catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Update a category by ID
router.put('/:id', async (req, res) => {
  const categoryId = req.params.id;
  const { name } = req.body;

  try {
      const category = await prisma.category.update({
          data: {
              name
          },
          where: {
              id: categoryId
          }
      })

      res.json({message : 'Category successfully updated'});
  } 
  catch (error) {
      if (error['meta']['cause'].includes('not found')){
          res.status(404).json({ message: 'Category not found with that ID' });
      }
      else{
          res.status(500).json({ message: 'Internal server error' });
      }
  }
});

// Delete a category by ID
router.delete('/:id', async (req, res) => {
const categoryId = req.params.id;
  try {
      const category = await prisma.category.delete({
          where: {
              id: categoryId
          }
      })
      
      res.json({message : 'Category successfully deleted'});
  } 
  catch (error) {
      if (error['meta']['cause'].includes('not exist')){
          res.status(404).json({ message: 'Category to delete does not exist.' });
      }
      else{
          res.status(500).json({ message: 'Internal server error' });
      }
  }
});

module.exports = router;