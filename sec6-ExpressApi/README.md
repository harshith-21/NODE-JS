# **Express js**

![](images/Screenshot%202022-12-05%20at%209.35.34%20PM.png)

> Download postman for working with apis

- A very basic express app

```js
//? importing express module
const express = require('express');

//? creating an instance
const app = express();

//? variable for port (not necessary)
port = 4000

//? routing function
app.get('/', (req, res) => {
    res.status(200).send('Hello World!, from the server');
});

//? which ports to listen on
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
```

CLI:
```
node app.js 
Server listening on port 4000
|
```
browser:
![](images/Screenshot%202022-12-05%20at%2010.13.37%20PM.png)

in postman:
![](images/Screenshot%202022-12-05%20at%2010.16.48%20PM.png)


making that data into json jus for the sake of it XD
```js
const express = require('express');

const app = express();

port = 4000

app.get('/', (req, res) => {
    res
        .status(200)
        .json({message: 'Hello World!, from the server', app: 'natours'});
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
```
see content type in headers:
![](images/Screenshot%202022-12-05%20at%2010.32.23%20PM.png)
> we got "application/json" in res, we added seperate header manually in the previous script but now adding json instead of send did that work :)) yay express


> we havent defined any route for post req, lets just see what happpens for post req

![](images/Screenshot%202022-12-05%20at%2010.29.42%20PM.png)


## **API???**
---
![](images/Screenshot%202022-12-05%20at%2010.43.10%20PM.png)

![](images/Screenshot%202022-12-05%20at%2010.45.06%20PM.png)


![](images/Screenshot%202022-12-05%20at%2010.47.10%20PM.png)

![](images/Screenshot%202022-12-05%20at%2010.48.10%20PM.png)

- BAD because its a nightmare to maintain

![](images/Screenshot%202022-12-05%20at%2010.52.21%20PM.png)

![](images/Screenshot%202022-12-05%20at%2010.55.45%20PM.png)
- response formatting also called enveloping

![](images/Screenshot%202022-12-05%20at%2011.01.08%20PM.png)

> the api we are using now for out project would be natours
```
https://www.natours.dew/api/v1/tours
```
![](images/Screenshot%202022-12-05%20at%2011.06.29%20PM.png)

---

- Adding this code block to the aboce code would result in

```js
app.post('/', (req, res) => {
    res.send('You can post to this endpoint');
});
```
![](images/Screenshot%202022-12-07%20at%2011.19.34%20AM.png)

---

### **Handling get requests :**

> serving the json data fromm the file and serving that over an api would look like

```js
const fs = require('fs');
const express = require('express');

const app = express();

port = 4000

const tours = JSON.parse(fs.readFileSync(`${__dirname}/starter/dev-data/data/tours-simple.json`));

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
```

The data in tours :
```json
[
  {
    "id": 0,
    "name": "The Forest Hiker",
    "duration": 5,
    "maxGroupSize": 25,
    "difficulty": "easy",
    "ratingsAverage": 4.7,
    "ratingsQuantity": 37,
    "price": 397,
    "summary": "Breathtaking hike through the Canadian Banff National Park",
    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "imageCover": "tour-1-cover.jpg",
    "images": ["tour-1-1.jpg", "tour-1-2.jpg", "tour-1-3.jpg"],
    "startDates": ["2021-04-25,10:00", "2021-07-20,10:00", "2021-10-05,10:00"]
  },
  .
  .
  .
  {
    "id": 8,
    "name": "The Northern Lights",
    "duration": 3,
    "maxGroupSize": 12,
    "difficulty": "easy",
    "ratingsAverage": 4.9,
    "ratingsQuantity": 33,
    "price": 1497,
    "summary": "Enjoy the Northern Lights in one of the best places in the world",
    "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
    "imageCover": "tour-9-cover.jpg",
    "images": ["tour-9-1.jpg", "tour-9-2.jpg", "tour-9-3.jpg"],
    "startDates": ["2021-12-16,10:00", "2022-01-16,10:00", "2022-12-12,10:00"]
  }
]
```

The response recieved :
![](images/Screenshot%202022-12-07%20at%2011.33.53%20AM.png)
```json
{
    "status": "success",
    "results": 9,
    "data": {
        "tours": [
            {
                "id": 0,
                "name": "The Forest Hiker",
                "duration": 5,
                "maxGroupSize": 25,
                "difficulty": "easy",
                "ratingsAverage": 4.7,
                "ratingsQuantity": 37,
                "price": 397,
                "summary": "Breathtaking hike through the Canadian Banff National Park",
                "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "imageCover": "tour-1-cover.jpg",
                "images": [
                    "tour-1-1.jpg",
                    "tour-1-2.jpg",
                    "tour-1-3.jpg"
                ],
                "startDates": [
                    "2021-04-25,10:00",
                    "2021-07-20,10:00",
                    "2021-10-05,10:00"
                ]
            },
            .
            .
            .
            {
                "id": 8,
                "name": "The Northern Lights",
                "duration": 3,
                "maxGroupSize": 12,
                "difficulty": "easy",
                "ratingsAverage": 4.9,
                "ratingsQuantity": 33,
                "price": 1497,
                "summary": "Enjoy the Northern Lights in one of the best places in the world",
                "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
                "imageCover": "tour-9-cover.jpg",
                "images": [
                    "tour-9-1.jpg",
                    "tour-9-2.jpg",
                    "tour-9-3.jpg"
                ],
                "startDates": [
                    "2021-12-16,10:00",
                    "2022-01-16,10:00",
                    "2022-12-12,10:00"
                ]
            }
        ]
    }
}
```
> Envelopping ??
---
### **Handling post requests**

Out of the box Express does not put the body data on the request, so we have to use "middle ware" to solve this issue.

```js
app.use(express.json());
```
will add the body data to request

> playing with post
```js
const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());

port = 4000

const tours = JSON.parse(fs.readFileSync(`${__dirname}/starter/dev-data/data/tours-simple.json`));

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    });
});

app.post('/api/v1/tours', (req, res) => {
    console.log('reqcieved data:');
    console.log(req.body);
    res.send('Done !!!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
```
In postman:
![](images/Screenshot%202022-12-07%20at%2011.56.12%20AM.png)

> NOTE: we have to send a response via  *res.send('message')* complete the request

in CLI:
```
Server listening on port 4000
reqcieved data:
{ name: 'Test Tour', duration: '10', difficulty: 'easy' }
```

In case we comment out that middleware, with the same req we ge this in cli :
```
Server listening on port 4000
reqcieved data:
undefined
```

> Now saving that data to our fake storage(XD) i.e that is our json file, js would look like

```js
const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());

port = 4000

const tours = JSON.parse(fs.readFileSync(`${__dirname}/starter/dev-data/data/tours-simple.json`));

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    });
});

app.post('/api/v1/tours', (req, res) => {
    // console.log(req.body);

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

});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
```
- Here we calculated the id because its not a database, in an actual DB, the DB gives id elements.
- now in post req code we havbe written file using "readFile" and not "readFileSync" bec we dont want to block the event loop
- after post req we can see that our new tour is added to the file, as we are reading the file only once after the file starts, we shouldnt be able to see the changes in the data i.e in the fet all tours list we should be able to see the old data only bec server hasnt read the new updated file yet
- but if you are runnig the server using nodemon, it restarts after every save and when the writefile function writes and saves the file it restarts the server hence you would be able to see the new data
- incase you have used the OD " node app.js " to start the app server, you shouldnt be able to see the changes in the data from the get all tours request
![](images/Screenshot%202022-12-07%20at%2012.21.50%20PM.png)

![](images/Screenshot%202022-12-07%20at%2012.31.39%20PM.png)


> Tail of "get all tours" request
```js

{
    "id": 9,
    "name": "Test Tour",
    "duration": "10",
    "difficulty": "easy"
},
{
    "id": 10,
    "name": "Test Tour",
    "duration": "10",
    "difficulty": "easy"
},
{
    "id": 11,
    "name": "Test Tour",
    "duration": "10",
    "difficulty": "easy"
},
{
    "id": 12,
    "name": "Test Tour 2",
    "duration": "15",
    "difficulty": "medium"
}
```


### **Responding to URL parameters**

> Params !

adding this code block to server
```js
app.get('/api/v1/tours/:id', (req, res) => {
    console.log(req.params);
    res.status(200).json({
            status:'success'
    })
});
```
hitting get req in postman like:
![](images/Screenshot%202022-12-07%20at%2012.50.16%20PM.png)

in CLI you get:
```
node app.js
Server listening on port 4000
{ id: '11' }
```

you can add multiple parameters like doing :
```js
app.get('/api/v1/tours/:id/:name/:group', (req, res) => {
    // console.log(req.params.id);
    console.log(`${req.params.name} has id: ${req.params.id} and present in group: ${req.params.group}`);
    res.status(200).json({
            status:'success'
    })
});
```
and hitting get request
> http://localhost:4000/api/v1/tours/11/harshi/sre

and in cli you would get:
```
node app.js
Server listening on port 4000
harshi has id: 11 and present in group: sre

```
and cam make optional parameters like

```js
app.get('/api/v1/tours/:id/:name/:group?', (req, res) => {
    // console.log(req.params.id);
    console.log(`${req.params.name} has id: ${req.params.id} and present in group: ${req.params.group}`);
    res.status(200).json({
            status:'success'
    })
});
```
```
node app.js 
Server listening on port 4000
harshi has id: 11 and present in group: undefined
```
incase you dont define those optional parameters and then there would be a problem

```js
app.get('/api/v1/tours/:id/:name/:group', (req, res) => {
    // console.log(req.params.id);
    console.log(`${req.params.name} has id: ${req.params.id} and present in group: ${req.params.group}`);
    res.status(200).json({
            status:'success'
    })
});
```
![](images/Screenshot%202022-12-07%20at%2012.58.35%20PM.png)
bec there has no route for the given number of parameters, it fails to give a response

> now making a route for get request which returns a particular tour with requested id:

code block added:
```js
app.get('/api/v1/tours/:id', (req, res) => {
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

});
```
> in postman, hitting the request:
![](images/Screenshot%202022-12-08%20at%2010.46.51%20AM.png)
![](images/Screenshot%202022-12-08%20at%2010.48.00%20AM.png)
> if id is not present in the data we still getting 200OK response which should not be the case
![](images/Screenshot%202022-12-08%20at%2010.49.48%20AM.png)

For that

A simple solution would be checking if asked id is greater then the length of the data string we have

> the function weould be
```js
app.get('/api/v1/tours/:id', (req, res) => {
    console.log(req.params);

    //? we get id as a string, so to convert it to number for easy equations
    const id = req.params.id * 1;

    if (id > tours.length){
        return res.status(404).json({
            status: 'failed',
            message: 'invalid ID'
        });
    }

    const tour = tours.find(el => el.id === id);

    res
        .status(200)
        .json({
            status:'success',
            data: {
                tour
            }
        });

});
```
![](images/Screenshot%202022-12-08%20at%2011.00.36%20AM.png)

> in a better way
```js
app.get('/api/v1/tours/:id', (req, res) => {
    console.log(req.params);

    //? we get id as a string, so to convert it to number for easy equations
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);


    // if (id > tours.length){
    if (!tour){
        return res.status(404).json({
            status: 'failed',
            message: 'invalid ID'
        });
    }

    res
        .status(200)
        .json({
            status:'success',
            data: {
                tour
            }
        });

});
```
![](images/Screenshot%202022-12-08%20at%2011.00.36%20AM.png)

### **Handling patch requests**
 
basic code:
```js
app.patch('/api/v1/tours/:id', (req,res) => {

    if (req.params.id * 1 > tours.length){
        return res.status(404).json({
            status: 'failed',
            message: 'invalid ID'
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour: '<updated tour here>'
        }
    });
});
```
in postman:

![](images/Screenshot%202022-12-09%20at%2010.40.54%20AM.png)


### **Handling delete Requests**

basic code:
```js
app.delete('/api/v1/tours/:id', (req,res) => {

    if (req.params.id * 1 > tours.length){
        return res.status(404).json({
            status: 'failed',
            message: 'invalid ID'
        });
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
```
in postman:

![](images/Screenshot%202022-12-09%20at%2010.48.58%20AM.png)


### **Refactoring/reshaping our code**

```js
const GetAllTours =  (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    });
};

const GetTour = (req, res) => {
    console.log(req.params);

    //? we get id as a string, so to convert it to number for easy equations
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);


    // if (id > tours.length){
    if (!tour){
        return res.status(404).json({
            status: 'failed',
            message: 'invalid ID'
        });
    }

    res
        .status(200)
        .json({
            status:'success',
            data: {
                tour
            }
        });

};

const CreateTour = (req, res) => {

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

const UpdateTour = (req,res) => {

    if (req.params.id * 1 > tours.length){
        return res.status(404).json({
            status: 'failed',
            message: 'invalid ID'
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour: '<updated tour here>'
        }
    });
};

const deleteTour = (req,res) => {

    if (req.params.id * 1 > tours.length){
        return res.status(404).json({
            status: 'failed',
            message: 'invalid ID'
        });
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
};


app.get('/api/v1/tours', GetAllTours);
app.get('/api/v1/tours/:id', GetTour);
app.post('/api/v1/tours', CreateTour);
app.patch('/api/v1/tours/:id', UpdateTour);
app.delete('/api/v1/tours/:id',deleteTour);
```
> now little neat and readable

> making it more better, modifying the last code block to remove the repetitive part
```js
app
   .route('/api/v1/tours')
   .get(GetAllTours)
   .post(CreateTour);

app
   .route('/api/v1/tours/:id')
   .get(GetTour)
   .patch(UpdateTour)
   .delete(deleteTour);
```

![](images/Screenshot%202022-12-09%20at%2011.26.13%20AM.png)


(req,res) go thorough all the middleware functions

### **Create own middleware**

defining a middleware function:

```js
//? next says that its a middleware function
app.use((req, res, next) => {
    //code for middleware function
    next();
});
```
eg:

```js
//? next says that its a middleware function
app.use((req, res, next) => {
    console.log("hello from middleware function");
    next();
});
```
adding this to the code, we can see in cli after hitting a request:
```
node app.js
Server listening on port 4000
hello from middleware function
```

this middleware function function should be before route handlers because they themselves are middleare and if you place them after the route functions and route functions end the loop after sending the response, the middleware wont work

BAD WAY:
```js
app
   .route('/api/v1/tours')
   .get(GetAllTours)
   .post(CreateTour);

app.use((req, res, next) => {
    console.log("hello from middleware function");
    next();
});

app
   .route('/api/v1/tours/:id')
   .get(GetTour)
   .patch(UpdateTour)
   .delete(deleteTour);
```
now the middleware only works for the 2nd part of the routes, not the first part because the middleware hadnt ran.

- **So only logs for GetTour, UpdateTour and DeleteTour.**

better eg:

```js
app.use((req, res, next) => {
    req.requestTime = now().toISOString();
    next();
});

// and getalltoursTo
const GetAllTours =  (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: tours.length,
        data: {
            tours
        }
    });
};
```
will result in:
![](images/Screenshot%202022-12-11%20at%203.05.28%20PM.png)

See that time over there ( ^_^ )

### **Using 3rd party middleware**

> MORGAN: helps in seeing reqs
```sh
npm i morgan
```
```js
app.use(morgan('dev'));
// you can use 'tiny' also in place of dev for a little different results
```
and in cli you should see:
```sh
node app.js
Server listening on port 4000
hello from middleware function
GET /api/v1/tours 200 9.647 ms - 8819
{ id: '23' }
GET /api/v1/tours/23 404 5.728 ms - 42
```
request, route, time taken to send back the response, size of response in bytes

### **creating routes and route handlers for users (resouce like tours)**

for temporary routes use :
```js
//? route handlers for users
const GetAllUsers =  (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'route has not been implemented'
    });
};
const CreateUser =  (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'route has not been implemented'
    });
};
const GetUser =  (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'route has not been implemented'
    });
};
const UpdateUser =  (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'route has not been implemented'
    });
};
const DeleteUser =  (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'route has not been implemented'
    });
};

//? ROUTES for USERS
app
   .route('/api/v1/users')
   .get(GetAllUsers)
   .post(CreateUser);

app
   .route('/api/v1/user/:id')
   .get(GetUser)
   .patch(UpdateUser)
   .delete(DeleteUser);
```

Result :
![](images/Screenshot%202022-12-11%20at%204.53.02%20PM.png)

Same thing goes for all other requests

### **Creating and mounting multiple routes**
 
to make it look better we can break down routes and route handers into seperate files:

we can also:

```js
//? ROUTES for tours
app
   .route('/api/v1/tours')
   .get(GetAllTours)
   .post(CreateTour);

app
   .route('/api/v1/tours/:id')
   .get(GetTour)
   .patch(UpdateTour)
   .delete(deleteTour);

//? ROUTES for USERS
app
   .route('/api/v1/users')
   .get(GetAllUsers)
   .post(CreateUser);

app
   .route('/api/v1/user/:id')
   .get(GetUser)
   .patch(UpdateUser)
   .delete(DeleteUser);

```
To:
```js
//? creating routers
const tourRouter = express.Router();
const userRouter = express.Router();

//? ROUTES for tours
tourRouter
   .route('/')
   .get(GetAllTours)
   .post(CreateTour);

tourRouter
   .route('/:id')
   .get(GetTour)
   .patch(UpdateTour)
   .delete(deleteTour);


//? ROUTES for USERS
userRouter
   .route('/')
   .get(GetAllUsers)
   .post(CreateUser);

userRouter
   .route('/:id')
   .get(GetUser)
   .patch(UpdateUser)
   .delete(DeleteUser);

// mounting a new router on a route
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
```

**We still will have all things working**

### **Better file structure**

app.js:
```js

const express = require('express');
const app = express();
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');


// MIDDLEWARES

app.use(express.json());


app.use((req, res, next) => {
    console.log('hello from middleware function');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use(morgan('dev'));


app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);


// START SERVER
port = 4000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
```
/routes/tourRoutes.js :
```js
const express = require('express');
const fs = require('fs');
const router = express.Router();

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../starter/dev-data/data/tours-simple.json`));

const GetAllTours =  (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: tours.length,
        data: {
            tours
        }
    });
};

const GetTour = (req, res) => {
    console.log(req.params);

    //? we get id as a string, so to convert it to number for easy equations
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);


    // if (id > tours.length){
    if (!tour){
        return res.status(404).json({
            status: 'failed',
            message: 'invalid ID'
        });
    }

    res
        .status(200)
        .json({
            status:'success',
            data: {
                tour
            }
        });

};

const CreateTour = (req, res) => {

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

const UpdateTour = (req,res) => {

    if (req.params.id * 1 > tours.length){
        return res.status(404).json({
            status: 'failed',
            message: 'invalid ID'
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour: '<updated tour here>'
        }
    });
};

const deleteTour = (req,res) => {

    if (req.params.id * 1 > tours.length){
        return res.status(404).json({
            status: 'failed',
            message: 'invalid ID'
        });
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
};

//? ROUTES for tours
router
   .route('/')
   .get(GetAllTours)
   .post(CreateTour);

router
   .route('/:id')
   .get(GetTour)
   .patch(UpdateTour)
   .delete(deleteTour);

// app.use('/api/v1/tours', router);

module.exports = router;
```
/routes/userRoutes.js :
```js
const express = require('express');

const router = express.Router();

//? route handlers for users
const GetAllUsers =  (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'route has not been implemented'
    });
};
const CreateUser =  (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'route has not been implemented'
    });
};
const GetUser =  (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'route has not been implemented'
    });
};
const UpdateUser =  (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'route has not been implemented'
    });
};
const DeleteUser =  (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'route has not been implemented'
    });
};


//? ROUTES for USERS
router
   .route('/')
   .get(GetAllUsers)
   .post(CreateUser);

router
   .route('/:id')
   .get(GetUser)
   .patch(UpdateUser)
   .delete(DeleteUser);

module.exports = router;
```
app should work as expected...

> in next step we move route handlers/ controller-[MVC architecture] to other folder called controllers

now breaking tourRoutes to two parts namey: tourRoutes and TourController

controllers/tourController.js has
```js
const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../starter/dev-data/data/tours-simple.json`));

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


    // if (id > tours.length){
    if (!tour){
        return res.status(404).json({
            status: 'failed',
            message: 'invalid ID'
        });
    }

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

    if (req.params.id * 1 > tours.length){
        return res.status(404).json({
            status: 'failed',
            message: 'invalid ID'
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour: '<updated tour here>'
        }
    });
};

exports.deleteTour = (req,res) => {

    if (req.params.id * 1 > tours.length){
        return res.status(404).json({
            status: 'failed',
            message: 'invalid ID'
        });
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
};
```
And routes/tourRoutes.js has 
```js
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
```
As we exported all functions individually, we importedf it as a single object we can access those funcitons by using "importedName.functionName"

> We can also use destructuring like
```js
const {GetAllTours, CreateTour, GetTour, UpdateTour, deleteTour} = require('./../controllers/tourController');

// in place of 
const tourController = require('./../controllers/tourController');
```

and
```js 
//? ROUTES for tours
router
   .route('/')
   .get(GetAllTours)
   .post(CreateTour);

router
   .route('/:id')
   .get(GetTour)
   .patch(UpdateTour)
   .delete(deleteTour);
//in place of
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
```

**- PREFER THE OLDER WAY THOUGH**

> doing same for user
> 
in routes/userRoutes.js
```js
const express = require('express');

const userController = require('./../controllers/userController');

const router = express.Router();


//? ROUTES for USERS
router
   .route('/')
   .get(userController.GetAllUsers)
   .post(userController.CreateUser);

router
   .route('/:id')
   .get(userController.GetUser)
   .patch(userController.UpdateUser)
   .delete(userController.DeleteUser);

module.exports = router;
```
in controller/userController.js
```js
//? route handlers for users
exports.GetAllUsers =  (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'route has not been implemented'
    });
};
exports.CreateUser =  (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'route has not been implemented'
    });
};
exports.GetUser =  (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'route has not been implemented'
    });
};
exports.UpdateUser =  (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'route has not been implemented'
    });
};
exports.DeleteUser =  (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'route has not been implemented'
    });
};
```

**LETS JUST LOOK AT THE FLOW TO UNDERSTAND BETTER**

Req hits 

-> app.js

-> (Depending on route that function is called)  
- TourRouter or UserRouter and corresponding files (/routes/tourRoutes.js or /routes/userRoutes.js)

-> Then in that the corresponding contoller is called and according to the request recieved, corresponding fucntion is called from the tourController or userController

Further, we can divide the server code and express code for better understandability:

app.js
```js
const express = require('express');
const app = express();
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');


// MIDDLEWARES

app.use(express.json());


app.use((req, res, next) => {
    console.log('hello from middleware function');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use(morgan('dev'));


app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
```
server.js
```js
// START SERVER
const app = require('./app');

port = 4000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
```
> "node server.js" to start server

ALL should work similar to before

keepin track of the entry point all times to run "node {{filenmname}}" is tough, so adding the script for that

modifying package.json to 
```json
{
  "name": "natours",
  "version": "1.0.0",
  "description": "learning Express",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
  "author": "harshithGandhe",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "morgan": "^1.10.0"
  }
}
```
we can run "npm start" to run corresponding commands and mek life eazzy
```bash
npm start

> natours@1.0.0 start
> nodemon server.js

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Server listening on port 4000

```

### **PARAM MIDDLEWARE**

tourRoutes.js
```js
const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();

// ------- added part ----------------------
router.param('id', tourController.checkID);
// ------- added part ----------------------

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
```
and tourController.js
```js
const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../starter/dev-data/data/tours-simple.json`));

// ------------- added part --------------
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
// ------------- added part --------------

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
```

CLI after hitting GET on http://localhost:4000/api/v1/tours/5
```
Server listening on port 4000
hello from middleware function
Tour ID is 5
{ id: '5' }
GET /api/v1/tours/5 200 4.118 ms - 1177
```

### **Chaining mmultiple middleware routes**
> to check sometings in middle of the loop, can be done using middleware:

eg: checking for few properties in a body for the post request:

adding checkBody to tourController.js
```js

exports.checkBody = (req, res, next) => {
    if(!req.body.name || !req.body.price) {
        return res.status(404).json({
            status: 'failed',
            message:'missing name or price'
        })
    }
    next();
};
```
and in tourRoutes.js
```js
const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();

router.param('id', tourController.checkID);

//? ROUTES for tours
router
   .route('/')
   .get(tourController.GetAllTours)
   .post(tourController.checkBody, tourController.CreateTour); //edited line

router
   .route('/:id')
   .get(tourController.GetTour)
   .patch(tourController.UpdateTour)
   .delete(tourController.deleteTour);

module.exports = router;
```
we can now check body if required properties are present or not and then proceed
![](images/Screenshot%202022-12-12%20at%203.42.59%20PM.png)
![](images/Screenshot%202022-12-12%20at%203.43.38%20PM.png)

## **SERVING STATIC FILES**

to serve static files from the server we can add a folder to the root link and if the path requested is not in our router then it will go to static files/folder and send response accordingly

in app.js:
```js
const express = require('express');
const app = express();

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');


// MIDDLEWARES
const morgan = require('morgan');
app.use(express.json());
app.use(express.static(`${__dirname}/starter/public`)); //added line


app.use((req, res, next) => {
    console.log('hello from middleware function');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use(morgan('dev'));


app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
```
and when i hit http://localhost:4000/overview.html in browser i get 
![](images/Screenshot%202022-12-12%20at%203.55.54%20PM.png)

and in cli:
```
Server listening on port 4000
hello from middleware function
GET /public 404 5.592 ms - 145
hello from middleware function
GET /img/user.jpg 404 0.738 ms - 151
hello from middleware function
GET /img/tour-1-cover.jpg 404 0.300 ms - 159
hello from middleware function
GET /img/tour-2-cover.jpg 404 0.272 ms - 159
hello from middleware function
GET /img/tour-3-cover.jpg 404 0.414 ms - 159
hello from middleware function
GET /img/tour-4-cover.jpg 404 0.309 ms - 159
hello from middleware function
GET /img/tour-5-cover.jpg 404 0.306 ms - 159
hello from middleware function
GET /img/tour-6-cover.jpg 404 0.554 ms - 159
```
see those failed bec, its static and bla bla bla we havent sent all requests needed bla bla bla bla nothing to worry

## **ENVIRONMENT VARIABLES**
not bec of express but for nodeJS


we can use environment vaiables to set debuggining or loggoing etc on or off

adding this in server.js
```javascript
// START SERVER
const app = require('./app');

console.log(app.get('env'));

port = 4000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
```
will give this in cli:

```
development 
Server listening on port 4000
```
express sets the node environment variable here to DEVELOPMENT

There areother env vars

for eg:

```javascript
console.log(process.env);
```
```sh
development
{
  STARSHIP_SHELL: 'zsh',
  MANPATH: '/opt/local/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/opt/local/share/man:/opt/homebrew/share/man:',
  TERM_PROGRAM: 'vscode',
  NODE: '/usr/local/bin/node',
  INIT_CWD: '/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec6-ExpressApi',
  TERM: 'xterm-256color',
  SHELL: '/bin/zsh',
  npm_config_metrics_registry: 'https://registry.npmjs.org/',
  HOMEBREW_REPOSITORY: '/opt/homebrew',
  TMPDIR: '/var/folders/zt/p6nnpq992vq4tg_63_sv2byw0000gp/T/',
  npm_config_global_prefix: '/usr/local',
  TERM_PROGRAM_VERSION: '1.69.2',
  ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',
  MallocNanoZone: '0',
  COLOR: '1',
  npm_config_noproxy: '',
  npm_config_local_prefix: '/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec6-ExpressApi',
  USER: 'harshithgandhe',
  COMMAND_MODE: 'unix2003',
  npm_config_globalconfig: '/usr/local/etc/npmrc',
  SSH_AUTH_SOCK: '/private/tmp/com.apple.launchd.p0RoG9uuwk/Listeners',
  __CF_USER_TEXT_ENCODING: '0x1F6:0x0:0x0',
  npm_execpath: '/usr/local/lib/node_modules/npm/bin/npm-cli.js',
  PATH: '/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec6-ExpressApi/node_modules/.bin:/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/node_modules/.bin:/Users/harshithgandhe/Desktop/NODE-TUT/node_modules/.bin:/Users/harshithgandhe/Desktop/node_modules/.bin:/Users/harshithgandhe/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/harshithgandhe/.rd/bin:/opt/local/bin:/opt/local/sbin:/opt/homebrew/bin:/opt/homebrew/sbin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/VMware Fusion Tech Preview.app/Contents/Public:/Library/Apple/usr/bin:/Users/harshithgandhe/.rd/bin:/opt/local/bin:/opt/local/sbin:/opt/homebrew/bin:/opt/homebrew/sbin:/Library/Frameworks/Python.framework/Versions/3.10/bin',
  npm_package_json: '/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec6-ExpressApi/package.json',
  _: '/usr/local/bin/nodemon',
  npm_config_userconfig: '/Users/harshithgandhe/.npmrc',
  npm_config_init_module: '/Users/harshithgandhe/.npm-init.js',
  __CFBundleIdentifier: 'com.microsoft.VSCode',
  npm_command: 'start',
  PWD: '/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec6-ExpressApi',
  npm_lifecycle_event: 'start',
  EDITOR: 'vi',
  npm_package_name: 'natours',
  LANG: 'en_GB.UTF-8',
  VSCODE_GIT_ASKPASS_EXTRA_ARGS: '--ms-enable-electron-run-as-node',
  XPC_FLAGS: '0x0',
  npm_config_node_gyp: '/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js',
  npm_package_version: '1.0.0',
  XPC_SERVICE_NAME: '0',
  SHLVL: '2',
  HOME: '/Users/harshithgandhe',
  VSCODE_GIT_ASKPASS_MAIN: '/private/var/folders/zt/p6nnpq992vq4tg_63_sv2byw0000gp/T/AppTranslocation/94C1D601-09D9-421D-A845-1899074A5086/d/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js',
  HOMEBREW_PREFIX: '/opt/homebrew',
  npm_config_cache: '/Users/harshithgandhe/.npm',
  STARSHIP_SESSION_KEY: '3219716793179211',
  LOGNAME: 'harshithgandhe',
  npm_lifecycle_script: 'nodemon server.js',
  VSCODE_GIT_IPC_HANDLE: '/var/folders/zt/p6nnpq992vq4tg_63_sv2byw0000gp/T/vscode-git-b8d0818a45.sock',
  npm_config_user_agent: 'npm/8.19.2 node/v18.12.1 darwin arm64 workspaces/false',
  VSCODE_GIT_ASKPASS_NODE: '/private/var/folders/zt/p6nnpq992vq4tg_63_sv2byw0000gp/T/AppTranslocation/94C1D601-09D9-421D-A845-1899074A5086/d/Visual Studio Code.app/Contents/Frameworks/Code Helper.app/Contents/MacOS/Code Helper',
  GIT_ASKPASS: '/private/var/folders/zt/p6nnpq992vq4tg_63_sv2byw0000gp/T/AppTranslocation/94C1D601-09D9-421D-A845-1899074A5086/d/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh',
  INFOPATH: '/opt/homebrew/share/info:/opt/homebrew/share/info:',
  HOMEBREW_CELLAR: '/opt/homebrew/Cellar',
  npm_node_execpath: '/usr/local/bin/node',
  npm_config_prefix: '/usr/local',
  COLORTERM: 'truecolor'
}
Server listening on port 4000
```
we pass the environment variable via cli and prepend the variables like
```
NODE_ENV=development X=23 nodemon server.js
```
if we have many env variables,we can define a config file and use it

you need a package called "dotenv" - "npm i dotenv" to pass these fields to commands

after installing the package, and 

create config.env file
```
NODE_ENV=development
PORT=4000
USERNAME=harshith
PASSWORD=harshith@123
```

in server.js:
```js
// START SERVER
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// bring app after config as it wont work other way around because after env, app is loaded and then env variables will work properly
const app = require('./app');

const PORT = process.env.PORT || 3000;

// console.log(app.get('env'));
console.log(process.env);

port = 4000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
```
in cli, bec we printed process.env
```sh
.
.
.
.  
  npm_node_execpath: '/usr/local/bin/node',
  npm_config_prefix: '/usr/local',
  COLORTERM: 'truecolor',
  NODE_ENV: 'development',
  PORT: '4000',
  USERNAME: 'harshith',
  PASSWORD: 'harshith@123'
}
Server listening on port 4000
```

We just need to read that config file once and its saved to node env and we can use it anywhere without inoporting anything.

We can now logg message to console only when dev and not prod, also change port num here and see taking the effect

in app.js we can say use morgan only if env is 'development' by
```js
// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}
```
and for port, in server.js we can:
```js
// START SERVER
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });


// console.log(app.get('env'));
console.log(process.env);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
``` 
> as we defined port tobe 4000 in config.env, in cli we can see:
```
Server listening on port 4000
```

finally adding scripts,commands
```json
{
  "name": "natours",
  "version": "1.0.0",
  "description": "learning Express",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:dev": "nodemon server.js",
    "start:prod": "NODE_ENV=production nodemon server.js"
  },
  "author": "harshithGandhe",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "morgan": "^1.10.0"
  }
}
```
and "npm run start:prod" starts server in prod and we cannot the logs from the morgan package as it only works in development
```bash
npm run start:prod

> natours@1.0.0 start:prod
> NODE_ENV=production nodemon server.js

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
production
Server listening on port 4000
hello from middleware function
hello from middleware function
hello from middleware function
```
and when 
```bash
npm run start:dev 

> natours@1.0.0 start:dev
> nodemon server.js

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
development
Server listening on port 4000
hello from middleware function
POST /api/v1/tours 201 16.428 ms - 123
hello from middleware function
POST /api/v1/tours 201 4.033 ms - 123
hello from middleware function
POST /api/v1/tours 201 1.545 ms - 123
hello from middleware function
GET /api/v1/tours 200 6.620 ms - 9065
```
see those one liners about req, those are from morgan, we are in dev env so it prints reqs...
