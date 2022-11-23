const fs = require('fs');
const http = require('http');
const url = require('url');


//? Files
//* async files loading


//? API


//? 1
// const server = http.createServer((req,res) => {
//     const pathName = req.url;

//     if(pathName == '/' || pathName == '/overview' ){
//         res.end('This is the OVERVIEW')
//     } else if (pathName == '/product') {
//         res.end('This is the PRODUCT')
//     } else if (pathName == '/api') {
//         res.end('You have reached the API')
//     } else {
//         res.writeHead(404, {
//             'Content-Type': 'text/html',
//             'my-own-header': 'hello world'  
//         });
//         res.end('<h1>Page not found</h1>');
//     }
    
// });

// // server.listen(8000) //? defaults to local host
// server.listen(8000, '127.0.0.1', () => {
//     console.log('Listening to requests on port 8000 !!!');
// })




//? 2
// const server = http.createServer((req,res) => {
//     const pathName = req.url;

//     if(pathName == '/' || pathName == '/overview' ){
//         res.end('This is the OVERVIEW')
//     } else if (pathName == '/product') {
//         res.end('This is the PRODUCT')
//     } else if (pathName == '/api') {
//         // res.end('You have reached the API')

//         fs.readFile(`${__dirname}/1-node-farm/starter/dev-data/data.json`, 'utf-8', (err, data) => {
//             // console.log(__dirname);
//             const productData = JSON.parse(data);
//             res.writeHead(200, {'Content-type': 'application/json'});
//             res.end(data);
//             // console.log(productData);
//         });


//     } else {
//         res.writeHead(404, {
//             'Content-Type': 'text/html',
//             'my-own-header': 'hello world'  
//         });
//         res.end('<h1>Page not found</h1>');
//     }
    
// });

// // server.listen(8000) //? defaults to local host
// server.listen(8000, '127.0.0.1', () => {
//     console.log('Listening to requests on port 8000 !!!');
// })


//? 3 SERVER/API

const data = fs.readFileSync(`${__dirname}/1-node-farm/starter/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req,res) => {
    const pathName = req.url;

    if(pathName == '/' || pathName == '/overview' ){
        res.end('This is the OVERVIEW')
    } else if (pathName == '/product') {
        res.end('This is the PRODUCT')
    } else if (pathName == '/api') {
        // res.end('You have reached the API')
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header': 'hello world'  
        });
        res.end('<h1>Page not found</h1>');
    }
});

// server.listen(8000) //? defaults to local host
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000 !!!');
})