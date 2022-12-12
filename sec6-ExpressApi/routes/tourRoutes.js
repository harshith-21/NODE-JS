const express = require('express');

const tourController = require('./../controllers/tourController');

const router = express.Router();

//? ROUTES for tours
router
   .route('/')
   .get(tourController.GetAllTours)
   .post(tourController.CreateTour);

router
   .route('/:id')
   .get(tourController.GetTour)
   .patch(tourController.UpdateTour)
   .delete(tourController.deleteTour);

// app.use('/api/v1/tours', router);

module.exports = router;