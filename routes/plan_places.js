const express = require('express');
const { v4: uuidv4 } = require('uuid');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();
router.use(express.json());

router.post('/', async (req, res) => {
    const { plan_id, place_id, depart_time, transport_mode, transport_price} = req.body;
    const id = uuidv4();
    
    try {
      const depart_time_ = new Date(depart_time)
      
      if (isNaN(start_time_.getTime())){
        return res.status(404).json({message : 'Please input a valid date time!'})
      };

      const isPlanIdValid = await prisma.plan.findUnique({
          where: {id : plan_id},
      });

      if (!isPlanIdValid){
        return res.status(404).json({message : 'Plan id not found!'});
      };

      const isPlaceIdValid = await prisma.place.findUnique({
        where: {id : place_id},
      });

      if (!isPlaceIdValid){
        return res.status(404).json({message : 'Place id not found!'});
      };
      
      const planPlace = await prisma.planPlace.create({
        data: {
          id,
          plan_id,
          place_id,
          depart_time : depart_time_,
          transport_mode,
          transport_price,
        },
      });
  
      res.json({ message: 'Place successfull added to that plan'});
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while adding the plan place.' });
    }
});

router.get('/', async (req, res) => {
    try {
        const planPlaces = await prisma.planPlace.findMany();

        if(Object.keys(planPlaces).length > 0)
            res.json(planPlaces);
        else res.json({message : 'No Plan Places Yet!'})
        } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while getting all the plan places.' });
    }
});

router.put('/:id', async (req, res) => {
  const planPlaceId = req.params.id;
  const { plan_id, place_id, depart_time, transport_mode, transport_price} = req.body;

  try {
      const isPlanPlaceIdValid = await prisma.planPlace.findUnique({
        where: {id : planPlaceId},
      });

      if (!isPlanPlaceIdValid){
        return res.status(404).json({message : 'Plan place id not found!'});
      };

      const depart_time_ = new Date(depart_time)

      if (isNaN(start_time_.getTime())){
        return res.status(404).json({message : 'Please input a valid date time!'})
      };

      const isPlanIdValid = await prisma.plan.findUnique({
          where: {id : plan_id},
      });

      if (!isPlanIdValid){
        return res.status(404).json({message : 'Plan id not found!'});
      };

      const isPlaceIdValid = await prisma.place.findUnique({
        where: {id : place_id},
      });

      if (!isPlaceIdValid){
        return res.status(404).json({message : 'Place id not found!'});
      };

      const planPlaces = await prisma.planPlace.update({
          data: {
              plan_id,
              place_id,
              depart_time: depart_time_,
              transport_mode,
              transport_price
          },
          where: {
              id: planPlaceId
          }
      })

      res.json({message : 'Plan place successfully updated'});
  } 
  catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the plan place.' });
  }
});

router.get('/:id', async (req, res) => {
    const planPlaceId = req.params.id;
    
    try {
      const isPlanPlaceIdValid = await prisma.planPlace.findUnique({
        where: {id : planPlaceId},
      });

      if (!isPlanPlaceIdValid){
        return res.status(404).json({message : 'Plan place id not found!'});
      };

      const planPlace = await prisma.planPlace.findUnique({
          where: {
              id: planPlaceId
          }
      });
        
      res.json(planPlace);
    } 
    catch (error) {
      res.status(500).json({ error: 'An error occurred while getting all plan places.' });
    }
});

router.delete('/:id', async (req, res) => {
  const planPlaceId = req.params.id;
  
  try {
    const isPlanPlaceIdValid = await prisma.planPlace.findUnique({
      where: {id : planPlaceId},
    });

    if (!isPlanPlaceIdValid){
      return res.status(404).json({message : 'Plan place id not found!'});
    };

    const planPlace = await prisma.planPlace.delete({
        where: {
            id: planPlaceId
        }
    });
    
    res.json({message : 'Plan place successfully deleted'});
  } 
  catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the plan places.' });
  }
});

module.exports = router;