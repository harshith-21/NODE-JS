//? 1

// const hello = 'Hello warldd';
// console.log(hello);

//? 2

// const fs = require('fs');

// const textIn = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
// console.log(textIn);

//? 3

// const fs = require('fs');

// const textIn = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avacado: ${textIn}. \nCrearted on ${Date.now()}`;
// fs.writeFileSync('./1-node-farm/starter/txt/ouput.txt', textOut); 
// console.log('File is writen!');

//? 4

// const fs = require('fs');

//* BLOCKING, SYNCHRONOUS WAY
// const textIn = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avacado: ${textIn}. \nCrearted on ${Date.now()}`;
// fs.writeFileSync('./1-node-farm/starter/txt/ouput.txt', textOut); 
// console.log('File is writen!');

//* NON-BLOCKING, ASYNCHRONOUS WAY

// fs.readFile('./1-node-farm/starter/txt/start.txt', 'utf-8', (err,data) => {
//     // console.log('hello from async function');
//     console.log(data);
//     console.log('hello from async function2');
// });
// console.log("will read file")

//? 5
//? double call back 

// const fs = require('fs');

// fs.readFile('./1-node-farm/starter/txt/start.txt', 'utf-8', (err,data1) => {
//     console.log(data1);
//     fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`, 'utf-8', (err,data2) => {
//         console.log(data2);
//     });
// });
// console.log("will read file")

//? 6
//? adding one more call back 
// const fs = require('fs');

// fs.readFile('./1-node-farm/starter/txt/start.txt', 'utf-8', (err,data1) => {
//     console.log(data1);
//     fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`, 'utf-8', (err,data2) => {
//         console.log(data2);
//         fs.readFile(`./1-node-farm/starter/txt/append.txt`, 'utf-8', (err,data3) => {
//             console.log(data3);
//         });
//     });
// });
// console.log("will read file")

//? 7
//? adding those two text and cwriting them to a file
// const fs = require('fs');

// fs.readFile('./1-node-farm/starter/txt/start.txt', 'utf-8', (err,data1) => {
//     console.log(data1);
//     fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`, 'utf-8', (err,data2) => {
//         console.log(data2);
//         fs.readFile(`./1-node-farm/starter/txt/append.txt`, 'utf-8', (err,data3) => {
//             console.log(data3);

//             fs.writeFile('./1-node-farm/starter/txt/final.txt',`${data2}\n${data3}`, err => {
//                 console.log('file has been written😌');
//             })
//         });
//     });
// });
// console.log("will read file")

//? 8
//? error handling in call backs
const fs = require('fs');

fs.readFile('./1-node-farm/starter/txt/startttt.txt', 'utf-8', (err,data1) => {
    if(err) return console.log('ERROR!!!'); 

    console.log(data1);
    fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`, 'utf-8', (err,data2) => {
        console.log(data2);
        fs.readFile(`./1-node-farm/starter/txt/append.txt`, 'utf-8', (err,data3) => {
            console.log(data3);

            fs.writeFile('./1-node-farm/starter/txt/final.txt',`${data2}\n${data3}`, err => {
                console.log('file has been written😌');
            })
        });
    });
});
console.log("will read file")