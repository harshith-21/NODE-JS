const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    //? solution 1: basic
    // fs.readFile("test-file.txt", (err, data) => {
    //     if (err) console.log(err);

    //     res.end(data);
    // })

    //? solution 2: streaming
    // const readable = fs.createReadStream("testt-file.txt");
    // readable.on("data", chunk => {
    //     res.write(chunk);
    // });
    // readable.on("end", () => {
    //     res.end();
    // });
    // readable.on("error", err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end("file not found ffs !!");
    // });

    //? solution 3: streaming with pipes
    const readable = fs.createReadStream("test-file.txt");
    readable.pipe(res);

});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:8000/');
});

