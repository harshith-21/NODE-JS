//? 1

// const hello = 'Hello warldd';
// console.log(hello);

//? 2

// const fs = require('fs');

// const textIn = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
// console.log(textIn);

//? 3

const fs = require('fs');

const textIn = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avacado: ${textIn}. \nCrearted on ${Date.now()}`;
fs.writeFileSync('./1-node-farm/starter/txt/ouput.txt', textOut); 
console.log('File is writen!');

//? 4

