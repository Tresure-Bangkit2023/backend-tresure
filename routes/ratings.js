const express = require('express');
const { v4: uuidv4 } = require('uuid');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();
router.use(express.json());

router.post('/', async (req, res) => {
    const { user_id, place_id, rating } = req.body;
    const id = uuidv4();
    
    try {
      const isPlaceIdValid = await prisma.place.findUnique({
          where: {id : place_id},
      });

      if (!isPlaceIdValid){
        return res.status(404).json({message : 'Place id not found!'});
      };

      const isUserIdValid = await prisma.user.findUnique({
        where: {id : user_id},
      });

      if (!isUserIdValid){
        return res.status(404).json({message : 'User id not found!'});
      };

      if (rating > 5.0 || rating < 1.0){
        return res.json({message : 'Rating is start from 1.0 until 5.0!'});
      }
      
      const ratings = await prisma.rating.create({
        data: {
          id,
          userId: user_id,
          placeId : place_id,
          rating
        },
      });
  
      res.json({ message: 'Rating successfully added'});
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the rating.' });
    }
});

router.get('/', async (req, res) => {
    try {
        const rating = await prisma.rating.findMany();

        if(Object.keys(rating).length > 0)
            res.json(rating);
        else res.json({message : 'No rating Yet!'})
        } 
    catch (error) {
        res.status(500).json({ error: 'An error occurred while getting all the rating from user.' });
    }
});

router.put('/:id', async (req, res) => {
  const ratingId = req.params.id;
  const { user_id, place_id, rating } = req.body;

  try {
    const isPlaceIdValid = await prisma.place.findUnique({
        where: {id : place_id},
    });

    if (!isPlaceIdValid){
      return res.status(404).json({message : 'Place id not found!'});
    };

    const isUserIdValid = await prisma.user.findUnique({
      where: {id : user_id},
    });

    if (!isUserIdValid){
      return res.status(404).json({message : 'User id not found!'});
    };

    if (rating > 5.0 || rating < 1.0){
      return res.json({message : 'Rating is start from 1.0 until 5.0!'});
    }

    const isRatingIdValid = await prisma.rating.findUnique({
        where: {id : ratingId},
    });

    if (!isRatingIdValid){
      return res.status(404).json({message : 'Rating id not found!'});
    };

    const ratings = await prisma.rating.update({
        data: {
            id,
            userId: user_id,
            placeId : place_id,
            rating
        },
        where: {
            id: ratingId
        }
    });

    res.json({message : 'Rating successfully updated'});
  } 
  catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the rating.' });
  }
});

router.get('/:id', async (req, res) => {
    const ratingId = req.params.id;
    
    try {
      const isRatingIdValid = await prisma.rating.findUnique({
        where: {id : ratingId},
      });

      if (!isRatingIdValid){
        return res.status(404).json({message : 'Rating id not found!'});
      };

      const ratings = await prisma.rating.findUnique({
          where: {
              id: ratingId
          }
      });
        
      res.json(ratings);
    } 
    catch (error) {
      res.status(500).json({ error: 'An error occurred while getting all the rating.' });
    }
});

router.delete('/:id', async (req, res) => {
  const ratingId = req.params.id;
  
  try {
    const isRatingIdValid = await prisma.rating.findUnique({
        where: {id : ratingId},
    });

    if (!isRatingIdValid){
    return res.status(404).json({message : 'Rating id not found!'});
    };

    const ratings = await prisma.rating.delete({
        where: {
            id: ratingId
        }
    });
    
    res.json({message : 'Rating successfully deleted'});
  } 
  catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the rating.' });
  }
});

module.exports = router;