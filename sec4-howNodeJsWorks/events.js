// const EventEmittor = require('events');
// const myEmittor = new EventEmittor();

//? 1
// const EventEmittor = require('events');
// const myEmittor = new EventEmittor();

// myEmittor.on('newSale', () => {
//     console.log('there is a new sale');
// });

// myEmittor.on('newSale', () => {
//     console.log('any random sh*t u wanna print for that event');
// });

// myEmittor.emit('newSale');

// myEmittor.on('anotherSale', () => {
//     console.log('any random sh*t u wanna print for that event');
// });

// myEmittor.emit('anotherSale');


//? 2
// const EventEmittor = require('events');
// const myEmittor = new EventEmittor();

// myEmittor.on('anothernewSale', () => {
//     console.log('there is a another new sale');
// });

// myEmittor.on('newSale', () => {
//     console.log('new sale!!');
//     myEmittor.emit('anothernewSale');
// });

// myEmittor.emit('newSale');


//? 3
// const EventEmittor = require('events');
// const myEmittor = new EventEmittor();

// myEmittor.on('newSale', (stocknumber, stockname) => {
//     console.log('there is a another new sale');
//     console.log(`there are ${stocknumber} ${stockname}'s `);
// });

// myEmittor.emit('newSale', 9, "apple");
// myEmittor.emit('newSale', 7, "banana");
// myEmittor.emit('newSale', 2, "pine");


//? 4
// const EventEmittor = require('events');
// // const myEmittor = new EventEmittor();

// class Sales extends EventEmittor {
//     constructor() {
//         super();
//     }
// }

// const myEmittor = new Sales();

// myEmittor.on('newSale', () => {
//     console.log('any random sh*t u wanna print for that event');
// });

// myEmittor.emit('newSale');


//? 5
const EventEmittor = require('events');
const http = require('http');

class Sales extends EventEmittor {
    constructor() {
        super();
    }
}

const myEmittor = new Sales();

myEmittor.on('newSale', () => {
    console.log('There is a new sale');
});

myEmittor.on('newSale', () => {
    console.log('customer namme is steve');
});

myEmittor.on('newSale', stock => {
    console.log(`There are ${stock} items in stock.`);
});

myEmittor.emit('newSale', 9);

////////////////////////////////

const server = http.createServer();


//? listener event, event will be the request
server.on("request", (req, res) => {
    console.log("request received");
    console.log(req.url);
    res.end("REQ RECIEVED");
});

//? listener event, event will be the request
server.on("request", (req, res) => {
    console.log('a request received');
});
// on server close
server.on('close', () => {
    console.log('server closed');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('waiting for requests, listening on *:8000');
});