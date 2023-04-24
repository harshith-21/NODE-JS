const Tour = require('./../models/tourModel');

exports.GetAllTours =  async (req, res) => {
    try{
        //? below line gets the data from the mongoDB
        const tours = await Tour.find();

        res.status(200).json({
            status: 'success',
            // requestedAt: req.requestTime,
            results: tours.length,
            data: {
                tours
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.GetTour = async (req, res) => {
    try {

        const tour = await Tour.findById(req.params.id);
        // const tour = await Tour.findOne({ _id: req.params.id});

        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        })

    } catch {
        res.status(404).json({
          status: "fail",
          message: err,
        });
    }
};

exports.CreateTour = async (req, res) => {
    try{
        // const newTour = new Tour({});
        // newTour.save()

        const newTour = await Tour.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        });

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            // message: err
            message: "Invalid data sent"
        });
    }
};

exports.UpdateTour = async  (req,res) => {
    try{

        //?in built function for updating data
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true, //? returns new tour 
            runValidators: true
        })

        res.status(200).json({
            status: 'success',
            data: {
                tour: '<updated tour here>'
            }
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};

exports.deleteTour = (req,res) => {
    res.status(204).json({
        status: 'success',
        data: null
    });
};