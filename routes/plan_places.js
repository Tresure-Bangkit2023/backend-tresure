const express = require('express');
const { v4: uuidv4 } = require('uuid');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();
router.use(express.json());

// Create a new plan place
router.post('/', async (req, res) => {
    const { plan_id, place_id, depart_time, transport_mode, transport_price} = req.body;
    const id = uuidv4();
    try {
      const planPlace = await prisma.planPlace.create({
        data: {
          id,
          plan_id,
          place_id,
          depart_time,
          transport_mode,
          transport_price,
        },
      });
  
      res.json({ message: 'Place successfull added to that plan', planPlaceId: planPlace.id });
    } catch (error) {
      const errorMsg = error.toString();
      const message = errorHandling(errorMsg);

      if(message.includes('server error')){
        res.status(500).json({ message: message });
      }
      else{
        res.status(404).json({ message: message });
      }
    }
});

// Retrieve all plan places
router.get('/', async (req, res) => {
    try {
        const planPlaces = await prisma.planPlace.findMany();

        if(Object.keys(planPlaces).length > 0)
            res.json(planPlaces);
        else res.json({message : 'No Plan Places Yet!'})
        } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Edit Plan Places by ID
router.put('/:id', async (req, res) => {
  const planPlaceId = req.params.id;
  const { plan_id, place_id, depart_time, transport_mode, transport_price} = req.body;

  try {
      const depart_time_ = new Date(depart_time)
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
    const errorMsg = error.toString();
    const message = errorHandling(errorMsg);

    console.error(error);

    if(message.includes('server error')){
      res.status(500).json({ message: message });
    }
    else{
      res.status(404).json({ message: message });
    } 
  }
});

// Retrieve a specific place by ID
router.get('/:id', async (req, res) => {
    const planPlaceId = req.params.id;
    try {
        const planPlace = await prisma.planPlace.findUnique({
            where: {
                id: planPlaceId
            }
        })
        
        if(places === null) 
            res.status(404).json({ message: 'Plan place not found with that ID' });
        
        else res.json(places);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete a plan place by ID
router.delete('/:id', async (req, res) => {
  const planplaceId = req.params.id;
    try {
        const planPlace = await prisma.planPlace.delete({
            where: {
                id: planplaceId
            }
        })
        
        res.json({message : 'Place successfully deleted'});
    } 
    catch (error) {
        if (error['meta']['cause'].includes('not exist')){
            res.status(404).json({ message: 'Plan Place to delete does not exist.' });
        }
        else{
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});

const errorHandling = function (errorMsg){
    if (errorMsg.includes('Argument depart_time: Got invalid value') || errorMsg.includes('Invalid time value')){
      return 'Please input a valid depart_time!';
    }
    else if (errorMsg.includes('Foreign key constraint failed on the field: `plan_id`')){
      return 'Error, plan_id not found!';
    }
    else if (errorMsg.includes('Record to update not found')){
      return 'Error, plan place with that id not found!';
    }
    else if (errorMsg.includes('Foreign key constraint failed on the field: `place_id`')){
      return 'Error, place_id not found!';
    }
    else{
      return 'Internal server error!';
    }

}

module.exports = router;
