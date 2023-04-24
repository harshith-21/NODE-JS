// const fs = require('fs');
// const express = require('express');
// const app = express();
// const morgan = require('morgan');
// const { application } = require('express');

// // MIDDLEWARES

// app.use(express.json());


// app.get('/', (req, res) => {
//     res
//         .status(200)
//         .json({message: 'Hello World!, from the server', app: 'natours'});
// });

// app.post('/', (req, res) => {
//     res.send('You can post to this endpoint');
// });

// file import
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/starter/dev-data/data/tours-simple.json`));


//? 1
// app.get('/api/v1/tours', (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         results: tours.length,
//         data: {
//             tours
//         }
//     });
// });


// // app.get('/api/v1/tours/:id', (req, res) => {
// //     console.log(req.params);
// //     res.status(200).json({
// //             status:'success'
// //     })
// // });


// // app.get('/api/v1/tours/:id/:name/:group', (req, res) => {
// //     // console.log(req.params.id);
// //     console.log(`${req.params.name} has id: ${req.params.id} and present in group: ${req.params.group}`);
// //     res.status(200).json({
// //             status:'success'
// //     })
// // });


// app.get('/api/v1/tours/:id', (req, res) => {
//     console.log(req.params);

//     //? we get id as a string, so to convert it to number for easy equations
//     const id = req.params.id * 1;
//     const tour = tours.find(el => el.id === id);


//     // if (id > tours.length){
//     if (!tour){
//         return res.status(404).json({
//             status: 'failed',
//             message: 'invalid ID'
//         });
//     }

//     res
//         .status(200)
//         .json({
//             status:'success',
//             data: {
//                 tour
//             }
//         });

// });

// app.post('/api/v1/tours', (req, res) => {
//     // console.log(req.body);

//     //? new id for the new data
//     const newId = tours[tours.length - 1].id + 1;

//     //? adding Id to the new data
//     const newTour = Object.assign({ id: newId }, req.body);

//     tours.push(newTour);
//     fs.writeFile(`${__dirname}/starter/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
//         res
//             .status(201)
//             .json({
//                 status:'success',
//                 dataAdded: {
//                     tour: newTour
//                 }
//             })
//     });

// });

// app.patch('/api/v1/tours/:id', (req,res) => {

//     if (req.params.id * 1 > tours.length){
//         return res.status(404).json({
//             status: 'failed',
//             message: 'invalid ID'
//         });
//     }

//     res.status(200).json({
//         status: 'success',
//         data: {
//             tour: '<updated tour here>'
//         }
//     });
// });


// app.delete('/api/v1/tours/:id', (req,res) => {

//     if (req.params.id * 1 > tours.length){
//         return res.status(404).json({
//             status: 'failed',
//             message: 'invalid ID'
//         });
//     }

//     res.status(204).json({
//         status: 'success',
//         data: null
//     });
// });

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });


// //? 2

// // MIDDLEWARES
// app.use((req, res, next) => {
//     console.log('hello from middleware function');
//     next();
// });

// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString();
//     next();
// });

// app.use(morgan('dev'));


// //ROUTEHANDLERS

// const GetAllTours =  (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         requestedAt: req.requestTime,
//         results: tours.length,
//         data: {
//             tours
//         }
//     });
// };

// const GetTour = (req, res) => {
//     console.log(req.params);

//     //? we get id as a string, so to convert it to number for easy equations
//     const id = req.params.id * 1;
//     const tour = tours.find(el => el.id === id);


//     // if (id > tours.length){
//     if (!tour){
//         return res.status(404).json({
//             status: 'failed',
//             message: 'invalid ID'
//         });
//     }

//     res
//         .status(200)
//         .json({
//             status:'success',
//             data: {
//                 tour
//             }
//         });

// };

// const CreateTour = (req, res) => {

//     //? new id for the new data
//     const newId = tours[tours.length - 1].id + 1;

//     //? adding Id to the new data
//     const newTour = Object.assign({ id: newId }, req.body);

//     tours.push(newTour);
//     fs.writeFile(`${__dirname}/starter/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
//         res
//             .status(201)
//             .json({
//                 status:'success',
//                 dataAdded: {
//                     tour: newTour
//                 }
//             })
//     });

// };

// const UpdateTour = (req,res) => {

//     if (req.params.id * 1 > tours.length){
//         return res.status(404).json({
//             status: 'failed',
//             message: 'invalid ID'
//         });
//     }

//     res.status(200).json({
//         status: 'success',
//         data: {
//             tour: '<updated tour here>'
//         }
//     });
// };

// const deleteTour = (req,res) => {

//     if (req.params.id * 1 > tours.length){
//         return res.status(404).json({
//             status: 'failed',
//             message: 'invalid ID'
//         });
//     }

//     res.status(204).json({
//         status: 'success',
//         data: null
//     });
// };


// // app.get('/api/v1/tours', GetAllTours);
// // app.get('/api/v1/tours/:id', GetTour);
// // app.post('/api/v1/tours', CreateTour);
// // app.patch('/api/v1/tours/:id', UpdateTour);
// // app.delete('/api/v1/tours/:id',deleteTour);

// //? route handlers for users
// const GetAllUsers =  (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'route has not been implemented'
//     });
// };
// const CreateUser =  (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'route has not been implemented'
//     });
// };
// const GetUser =  (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'route has not been implemented'
//     });
// };
// const UpdateUser =  (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'route has not been implemented'
//     });
// };
// const DeleteUser =  (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'route has not been implemented'
//     });
// };


// //? ROUTES for tours
// app
//    .route('/api/v1/tours')
//    .get(GetAllTours)
//    .post(CreateTour);

// app
//    .route('/api/v1/tours/:id')
//    .get(GetTour)
//    .patch(UpdateTour)
//    .delete(deleteTour);



// //? ROUTES for USERS
// app
//    .route('/api/v1/users')
//    .get(GetAllUsers)
//    .post(CreateUser);

// app
//    .route('/api/v1/user/:id')
//    .get(GetUser)
//    .patch(UpdateUser)
//    .delete(DeleteUser);

// // START SERVER
// port = 4000

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });











//? 3

// MIDDLEWARES
// app.use((req, res, next) => {
//     console.log('hello from middleware function');
//     next();
// });

// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString();
//     next();
// });

// app.use(morgan('dev'));


// //ROUTEHANDLERS

// const GetAllTours =  (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         requestedAt: req.requestTime,
//         results: tours.length,
//         data: {
//             tours
//         }
//     });
// };

// const GetTour = (req, res) => {
//     console.log(req.params);

//     //? we get id as a string, so to convert it to number for easy equations
//     const id = req.params.id * 1;
//     const tour = tours.find(el => el.id === id);


//     // if (id > tours.length){
//     if (!tour){
//         return res.status(404).json({
//             status: 'failed',
//             message: 'invalid ID'
//         });
//     }

//     res
//         .status(200)
//         .json({
//             status:'success',
//             data: {
//                 tour
//             }
//         });

// };

// const CreateTour = (req, res) => {

//     //? new id for the new data
//     const newId = tours[tours.length - 1].id + 1;

//     //? adding Id to the new data
//     const newTour = Object.assign({ id: newId }, req.body);

//     tours.push(newTour);
//     fs.writeFile(`${__dirname}/starter/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
//         res
//             .status(201)
//             .json({
//                 status:'success',
//                 dataAdded: {
//                     tour: newTour
//                 }
//             })
//     });

// };

// const UpdateTour = (req,res) => {

//     if (req.params.id * 1 > tours.length){
//         return res.status(404).json({
//             status: 'failed',
//             message: 'invalid ID'
//         });
//     }

//     res.status(200).json({
//         status: 'success',
//         data: {
//             tour: '<updated tour here>'
//         }
//     });
// };

// const deleteTour = (req,res) => {

//     if (req.params.id * 1 > tours.length){
//         return res.status(404).json({
//             status: 'failed',
//             message: 'invalid ID'
//         });
//     }

//     res.status(204).json({
//         status: 'success',
//         data: null
//     });
// };


// //? route handlers for users
// const GetAllUsers =  (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'route has not been implemented'
//     });
// };
// const CreateUser =  (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'route has not been implemented'
//     });
// };
// const GetUser =  (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'route has not been implemented'
//     });
// };
// const UpdateUser =  (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'route has not been implemented'
//     });
// };
// const DeleteUser =  (req, res) => {
//     res.status(500).json({
//         status: 'error',
//         message: 'route has not been implemented'
//     });
// };


// //? creating routers
// const tourRouter = express.Router();
// const userRouter = express.Router();

// //? ROUTES for tours
// tourRouter
//    .route('/')
//    .get(GetAllTours)
//    .post(CreateTour);

// tourRouter
//    .route('/:id')
//    .get(GetTour)
//    .patch(UpdateTour)
//    .delete(deleteTour);


// //? ROUTES for USERS
// userRouter
//    .route('/')
//    .get(GetAllUsers)
//    .post(CreateUser);

// userRouter
//    .route('/:id')
//    .get(GetUser)
//    .patch(UpdateUser)
//    .delete(DeleteUser);

// app.use('/api/v1/tours', tourRouter);
// app.use('/api/v1/users', userRouter);


// // START SERVER
// port = 4000

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });












//? 4

const express = require('express');
const app = express();

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');


// MIDDLEWARES
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/starter/public`));


app.use((req, res, next) => {
    // console.log('hello from middleware function');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});


app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
