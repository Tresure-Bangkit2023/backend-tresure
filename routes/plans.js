const express = require('express');
const { v4: uuidv4 } = require('uuid');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();
router.use(express.json());

// Create a new plan
router.post('/', async(req, res) => {
    const { user_id, title, num_of_people, city, start_location, start_time } = req.body;
    const id = uuidv4();

    try {
        const start_time_ = new Date(start_time)

        if (isNaN(start_time_.getTime())) {
            return res.status(404).json({ message: 'Please input a valid date time!' })
        };

        const isUserIdValid = await prisma.user.findUnique({
            where: { id: user_id },
        });

        if (!isUserIdValid) {
            return res.status(404).json({ message: 'User id not found!' });
        };

        const plan = await prisma.plan.create({
            data: {
                id,
                user_id,
                title,
                num_of_people,
                city,
                start_location,
                start_time: start_time_,
            },
        });

        res.json({ message: 'Plan created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the plan.' });
    }
});

// Get all plans
router.get('/', async(req, res) => {
    try {
        const plans = await prisma.plan.findMany();

        if (Object.keys(plans).length > 0) {
            res.json(plans);
        } else {
            res.json({ message: 'No plan yet!' })
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while getting all of plans.' });
    }
});

// Get a plan by id
router.get('/:id', async(req, res) => {
    const planId = req.params.id;
    try {
        const isPlanIdValid = await prisma.plan.findUnique({
            where: { id: planId }
        });

        if (!isPlanIdValid) {
            return res.status(404).json({ message: 'Plan id not found!' });
        }

        const plans = await prisma.plan.findUnique({
            where: {
                id: planId
            },
            include: {
                PlanPlace: true
            }
        })

        res.json(plans);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while getting the plan.' });
    }
});

// Update a plan by id
router.put('/:id', async(req, res) => {
    const planId = req.params.id;
    const { user_id, title, num_of_people, city, start_location, start_time } = req.body;

    try {
        const start_time_ = new Date(start_time);

        if (isNaN(start_time_.getTime())) {
            return res.status(404).json({ message: 'Please input a valid date time!' });
        }

        const isUserIdValid = await prisma.user.findUnique({
            where: { id: user_id },
        });

        if (!isUserIdValid) {
            return res.status(404).json({ message: 'User id not found!' });
        }

        const isPlanIdValid = await prisma.plan.findUnique({
            where: { id: planId },
        });

        if (!isPlanIdValid) {
            return res.status(404).json({ message: 'Plan id not found!' });
        }

        const updatedPlan = await prisma.plan.update({
            data: {
                user_id,
                title,
                num_of_people,
                city,
                start_location,
                start_time: start_time_
            },
            where: {
                id: planId
            }
        });

        res.json({ message: 'Plan successfully updated' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the plan.' });
    }
});


// Delete a plan by id
router.delete('/:id', async(req, res) => {
    const planId = req.params.id;
    try {
        const isPlanIdValid = await prisma.plan.findUnique({
            where: { id: planId },
        });

        if (!isPlanIdValid) {
            return res.status(404).json({ message: 'Plan id not found!' });
        }

        const relatedRecords = await prisma.planPlace.findMany({
            where: { plan_id: planId },
        });

        if (relatedRecords.length > 0) {
            return res.json({ error: 'Please delete all of related Plan Place before deleting the plan.' })
        };

        const plan = await prisma.plan.delete({
            where: {
                id: planId
            },
            include: {
                PlanPlace: true
            }
        })

        res.json({ message: 'Plan successfully deleted' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the plan.' });
    }
});

module.exports = router;