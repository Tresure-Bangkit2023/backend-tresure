const express = require('express');
const { v4: uuidv4 } = require('uuid');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();
router.use(express.json());

// Create a new plan
router.post('/', async (req, res) => {
    const { user_id, title, num_of_people, city, start_location, start_time } = req.body;
    const id = uuidv4();
    const start_time_ = new Date(start_time) 
    try {
      const plan = await prisma.plan.create({
        data: {
          id,
          user_id,
          title,
          num_of_people,
          city,
          start_location,
          start_time : start_time_,
        },
      });
  
      res.json({ message: 'Plan created successfully', planId: plan.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

// Retrieve all plans
router.get('/', async (req, res) => {
    try {
        const plans = await prisma.plan.findMany();

        if(Object.keys(plans).length > 0)
            res.json(plans);
        else res.json({message : 'No plans yet!'})
        } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// // Retrieve a specific plan by ID
router.get('/:id', async (req, res) => {
    const planId = req.params.id;
    try {
        const plans = await prisma.plan.findUnique({
            where: {
                id: planId
            },
            include : {
                PlanPlace: true
            }
        })
        
        if(plans === null) 
            res.status(404).json({ message: 'Plan not found with that ID' });
        
        if (plans.PlanPlace.length === 0) {
            plans.PlanPlace = 'No place added yet in this plan!';
            res.json(plans);
        }
            
        else res.json(plans);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' });
    }
});

// // Update a place by ID
router.put('/:id', async (req, res) => {
    const planId = req.params.id;
    const { user_id, title, num_of_people, city, start_location, start_time } = req.body;
    
    const start_time_ = new Date(start_time) 

    try {
        const places = await prisma.place.update({
            data: {
                user_id,
                title,
                num_of_people,
                city,
                start_location,
                start_time : start_time_
            },
            where: {
                id: planId
            }
        })

        res.json({message : 'Plan successfully updated'});
    } 
    catch (error) {
        if (error['meta']['cause'].includes('not found')){
            res.status(404).json({ message: 'Plan not found with that ID' });
        }
        else{
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});

// Delete a place by ID
router.delete('/:id', async (req, res) => {
  const planId = req.params.id;
    try {
        const plans = await prisma.plan.delete({
            where: {
                id: planId
            }
        })
        
        res.json({message : 'Plan successfully deleted'});
    } 
    catch (error) {
        if (error['meta']['cause'].includes('not exist')){
            res.status(404).json({ message: 'Plan to delete does not exist.' });
        }
        else{
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});

module.exports = router;
