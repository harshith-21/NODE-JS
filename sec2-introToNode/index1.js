const fs = require('fs');
const http = require('http')

//? Files
//* async files loading



//? SERVER

//* server is the variabke which stores the result of the createServer method
const server = http.createServer((req,res) => {
    console.log(req)
    res.end('Hello from the server!');
});

// server.listen(8000) //? defaults to local host
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000 !!!');
})

