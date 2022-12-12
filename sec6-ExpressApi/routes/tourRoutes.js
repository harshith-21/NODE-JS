const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();

router.param('id', tourController.checkID);

//? ROUTES for tours
router
   .route('/')
   .get(tourController.GetAllTours)
   .post(tourController.checkBody, tourController.CreateTour);

router
   .route('/:id')
   .get(tourController.GetTour)
   .patch(tourController.UpdateTour)
   .delete(tourController.deleteTour);

module.exports = router;