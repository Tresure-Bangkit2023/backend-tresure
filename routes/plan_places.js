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
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
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
  
  const depart_time_ = new Date(depart_time) 

  try {
      const planPlaces = await prisma.planPlace.update({
          data: {
              plan_id,
              place_id,
              depart_time_,
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
      if (error['meta']['cause'].includes('not found')){
          res.status(404).json({ message: 'Plan place not found with that ID' });
      }
      else{
          res.status(500).json({ message: 'Internal server error' });
      }
  }
});

// // // Retrieve a specific place by ID
// router.get('/:id', async (req, res) => {
//     const placeId = req.params.id;
//     try {
//         const places = await prisma.place.findUnique({
//             where: {
//                 id: placeId
//             }
//         })
        
//         if(places === null) 
//             res.status(404).json({ message: 'Place not found with that ID' });
        
//         else res.json(places);
//     } 
//     catch (error) {
//         console.log(error)
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// // // Update a place by ID
// router.put('/:id', async (req, res) => {
//     const placeId = req.params.id;
//     const { category_id, name, description, city, price, lat, lng, rating, image } = req.body;

//     try {
//         const places = await prisma.place.update({
//             data: {
//                 category_id,
//                 name,
//                 description,
//                 city,
//                 price,
//                 lat,
//                 lng,
//                 rating,
//                 image
//             },
//             where: {
//                 id: placeId
//             }
//         })

//         res.json({message : 'Place successfully updated'});
//     } 
//     catch (error) {
//         if (error['meta']['cause'].includes('not found')){
//             res.status(404).json({ message: 'Place not found with that ID' });
//         }
//         else{
//             res.status(500).json({ message: 'Internal server error' });
//         }
//     }
// });

// // // Delete a place by ID
// router.delete('/:id', async (req, res) => {
//   const placeId = req.params.id;
//     try {
//         const places = await prisma.place.delete({
//             where: {
//                 id: placeId
//             }
//         })
        
//         res.json({message : 'Place successfully deleted'});
//     } 
//     catch (error) {
//         if (error['meta']['cause'].includes('not exist')){
//             res.status(404).json({ message: 'Place to delete does not exist.' });
//         }
//         else{
//             res.status(500).json({ message: 'Internal server error' });
//         }
//     }
// });

module.exports = router;
