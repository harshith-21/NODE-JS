const fs = require('fs');
const http = require('http');
const url = require('url');


//? Files
//* async files loading



//? SERVER


//? 1
//* server is the variable which stores the result of the createServer method
// const server = http.createServer((req,res) => {
//     console.log(req.url)
//     res.end('Hello from the server!');
// });

// // server.listen(8000) //? defaults to local host
// server.listen(8000, '127.0.0.1', () => {
//     console.log('Listening to requests on port 8000 !!!');
// })

//? 2
const server = http.createServer((req,res) => {
    const pathName = req.url;

    if(pathName == '/' || pathName == '/overview' ){
        res.end('This is the OVERVIEW')
    } else if (pathName == '/product') {
        res.end('This is the PRODUCT')
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