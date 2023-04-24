const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();

//? as check id function in tourController is commented out
// router.param('id', tourController.checkID);

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

module.exports = router;