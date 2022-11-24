//? 1

// const fs = require('fs');

// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("Immediate 1 finished"));

// fs.readFile("test-file.txt", () => {
//     console.log("I/O finished");
// });

// console.log("hello from the top level code");

//? 2

// const fs = require('fs');

// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("Immediate 1 finished"));

// fs.readFile("test-file.txt", () => {
//     console.log("I/O finished");
//     console.log("---------------------");

//     setTimeout(() => console.log("Timer 2 finished"), 0);
//     setTimeout(() => console.log("Timer 3 finished"), 3000);
//     setImmediate(() => console.log("Immediate 2 finished"));
// });

// console.log("hello from the top level code");



//? 3

// const fs = require('fs');

// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("Immediate 1 finished"));

// fs.readFile("test-file.txt", () => {
//     console.log("I/O finished");
//     console.log("---------------------");

//     setTimeout(() => console.log("Timer 2 finished"), 0);
//     setTimeout(() => console.log("Timer 3 finished"), 3000);
//     setImmediate(() => console.log("Immediate 2 finished"));

//     process.nextTick(() => console.log("Process.nextTick"));
// });

// console.log("hello from the top level code");



//? 4
// const fs = require('fs');
// const crypto = require('crypto');

// const start = Date.now();

// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("Immediate 1 finished"));

// fs.readFile("test-file.txt", () => {
//     console.log("I/O finished");
//     console.log("---------------------");

//     setTimeout(() => console.log("Timer 2 finished"), 0);
//     setTimeout(() => console.log("Timer 3 finished"), 3000);
//     setImmediate(() => console.log("Immediate 2 finished"));

//     process.nextTick(() => console.log("Process.nextTick"));

//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
// });

// console.log("hello from the top level code");


//? 5
// const fs = require('fs');
// const crypto = require('crypto');

// const start = Date.now();

// process.env.UV_THREADPOOL_SIZE = 2;

// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("Immediate 1 finished"));

// fs.readFile("test-file.txt", () => {
//     console.log("I/O finished");
//     console.log("---------------------");

//     setTimeout(() => console.log("Timer 2 finished"), 0);
//     setTimeout(() => console.log("Timer 3 finished"), 3000);
//     setImmediate(() => console.log("Immediate 2 finished"));

//     process.nextTick(() => console.log("Process.nextTick"));

//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
//     crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//         console.log("crypto.pbkdf2 finished/ password emcrypted");
//         console.log('time taken:', Date.now() - start, 'ms');
//     })
// });

// console.log("hello from the top level code");


//? 6
const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
    console.log("I/O finished");
    console.log("---------------------");

    setTimeout(() => console.log("Timer 2 finished"), 0);
    setTimeout(() => console.log("Timer 3 finished"), 3000);
    setImmediate(() => console.log("Immediate 2 finished"));

    process.nextTick(() => console.log("Process.nextTick"));

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
    console.log('time taken:', Date.now() - start, 'ms');
    
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
    console.log('time taken:', Date.now() - start, 'ms');

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
    console.log('time taken:', Date.now() - start, 'ms');

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
    console.log('time taken:', Date.now() - start, 'ms');

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
    console.log('time taken:', Date.now() - start, 'ms');


});

console.log("hello from the top level code");