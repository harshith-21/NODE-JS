const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../starter/dev-data/data/tours-simple.json`));

exports.checkID = (req,res, next,val) => {
    console.log(`Tour ID is ${val}`);
    if (req.params.id * 1 > tours.length){
        return res.status(404).json({
            status: 'failed',
            message: 'invalid ID'
        });
    }
    next();
};

exports.checkBody = (req, res, next) => {
    if(!req.body.name || !req.body.price) {
        return res.status(404).json({
            status: 'failed',
            message:'missing name or price'
        })
    }
    next();
};

exports.GetAllTours =  (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: tours.length,
        data: {
            tours
        }
    });
};

exports.GetTour = (req, res) => {
    console.log(req.params);

    //? we get id as a string, so to convert it to number for easy equations
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);

    res
        .status(200)
        .json({
            status:'success',
            data: {
                tour
            }
        });

};

exports.CreateTour = (req, res) => {

    //? new id for the new data
    const newId = tours[tours.length - 1].id + 1;

    //? adding Id to the new data
    const newTour = Object.assign({ id: newId }, req.body);

    tours.push(newTour);
    fs.writeFile(`${__dirname}/starter/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res
            .status(201)
            .json({
                status:'success',
                dataAdded: {
                    tour: newTour
                }
            })
    });

};

exports.UpdateTour = (req,res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<updated tour here>'
        }
    });
};

exports.deleteTour = (req,res) => {
    res.status(204).json({
        status: 'success',
        data: null
    });
};
