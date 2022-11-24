const fs = require('fs');
const http = require('http');
const url = require('url');


//? Files
//* async files loading


//? API


//? 1
// const server = http.createServer((req,res) => {
//     const pathname = req.url;

//     if(pathname == '/' || pathname == '/overview' ){
//         res.end('This is the OVERVIEW')
//     } else if (pathname == '/product') {
//         res.end('This is the PRODUCT')
//     } else if (pathname == '/api') {
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
//     const pathname = req.url;

//     if(pathname == '/' || pathname == '/overview' ){
//         res.end('This is the OVERVIEW')
//     } else if (pathname == '/product') {
//         res.end('This is the PRODUCT')
//     } else if (pathname == '/api') {
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

// const replaceTemplate = (temp, product) => {
//     let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
//     output = output.replace(/{%IMAGE%}/g, product.image);
//     output = output.replace(/{%PRICE%}/g, product.price);
//     output = output.replace(/{%FROM%}/g, product.from);
//     output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
//     output = output.replace(/{%QUANTITY%}/g, product.quantity);
//     output = output.replace(/{%DESCRIPTION%}/g, product.description);
//     output = output.replace(/{%ID%}/g, product.id);

//     //? CSS-StyleDeclaration adds class to div element todo necessary change
//     if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic'); 
//     return output;

// }


// // HTML TEMPLATES
// //* better to read the templates too from data beforehand for once and store them in a variable and use it
// const tempOverview = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-overview.html`, 'utf-8');
// const tempCard = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-card.html`, 'utf-8');
// const tempProduct = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-product.html`, 'utf-8');

// // DATA
// const data = fs.readFileSync(`${__dirname}/1-node-farm/final/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);

// // SERVER
// const server = http.createServer((req,res) => {
//     const pathname = req.url;

//     //OVERVIEW page
//     if(pathname == '/' || pathname == '/overview' ){
//         // res.end('This is the OVERVIEW')
//         res.writeHead(200, {'Content-Type': 'text/html'});

//         // const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)); //? this returns the html elements in an array 
//         const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join(''); //? joims all strings and make one big html string 
//         const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
//         // console.log(output);
//         res.end(output);

//     // PRODUCT page
//     } else if (pathname == '/product') {
//         res.end('This is the PRODUCT')

//     // API
//     } else if (pathname == '/api') {
//         // res.end('You have reached the API')
//         res.writeHead(200, {'Content-type': 'application/json'});
//         res.end(data);

//     // ERROR
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
// });






//? 4

// const replaceTemplate = (temp, product) => {
//     let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
//     output = output.replace(/{%IMAGE%}/g, product.image);
//     output = output.replace(/{%PRICE%}/g, product.price);
//     output = output.replace(/{%FROM%}/g, product.from);
//     output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
//     output = output.replace(/{%QUANTITY%}/g, product.quantity);
//     output = output.replace(/{%DESCRIPTION%}/g, product.description);
//     output = output.replace(/{%ID%}/g, product.id);

//     //? CSS-StyleDeclaration adds class to div element todo necessary change
//     if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic'); 
//     return output;

// }

// // HTML TEMPLATES
// //* better to read the templates too from data beforehand for once and store them in a variable and use it
// const tempOverview = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-overview.html`, 'utf-8');
// const tempCard = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-card.html`, 'utf-8');
// const tempProduct = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-product.html`, 'utf-8');

// // DATA
// const data = fs.readFileSync(`${__dirname}/1-node-farm/final/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);

// // SERVER
// const server = http.createServer((req,res) => {
    
//     // console.log(req.url);
//     // console.log(url.parse(req.url));
    
//     // const pathname = req.url;

//     const { query, pathname } = url.parse(req.url, true);

//     //OVERVIEW page
//     if(pathname == '/' || pathname == '/overview' ){
//         // res.end('This is the OVERVIEW')
//         res.writeHead(200, {'Content-Type': 'text/html'});

//         // const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)); //? this returns the html elements in an array 
//         const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join(''); //? joims all strings and make one big html string 
//         const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
//         // console.log(output);
//         res.end(output);

//     // PRODUCT page
//     } else if (pathname == '/product') {
//         // console.log(query);

//         res.writeHead(200, {'Content-Type': 'text/html'});
//         const product = dataObj[query.id];
//         const output = replaceTemplate(tempProduct, product);
//         res.end(output);

//         // res.end('This is the PRODUCT')

//     // API
//     } else if (pathname == '/api') {
//         // res.end('You have reached the API')
//         res.writeHead(200, {'Content-type': 'application/json'});
//         res.end(data);

//     // ERROR
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
// });






//? 5

// const replaceTemplate = require('./modules/replaceTemplate');

// // HTML TEMPLATES
// //* better to read the templates too from data beforehand for once and store them in a variable and use it
// const tempOverview = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-overview.html`, 'utf-8');
// const tempCard = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-card.html`, 'utf-8');
// const tempProduct = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-product.html`, 'utf-8');

// // DATA
// const data = fs.readFileSync(`${__dirname}/1-node-farm/final/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);

// // SERVER
// const server = http.createServer((req,res) => {
    
//     // console.log(req.url);
//     // console.log(url.parse(req.url));
    
//     // const pathname = req.url;

//     const { query, pathname } = url.parse(req.url, true);

//     //OVERVIEW page
//     if(pathname == '/' || pathname == '/overview' ){
//         // res.end('This is the OVERVIEW')
//         res.writeHead(200, {'Content-Type': 'text/html'});

//         // const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)); //? this returns the html elements in an array 
//         const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join(''); //? joims all strings and make one big html string 
//         const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
//         // console.log(output);
//         res.end(output);

//     // PRODUCT page
//     } else if (pathname == '/product') {
//         // console.log(query);

//         res.writeHead(200, {'Content-Type': 'text/html'});
//         const product = dataObj[query.id];
//         const output = replaceTemplate(tempProduct, product);
//         res.end(output);

//         // res.end('This is the PRODUCT')

//     // API
//     } else if (pathname == '/api') {
//         // res.end('You have reached the API')
//         res.writeHead(200, {'Content-type': 'application/json'});
//         res.end(data);

//     // ERROR
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
// });



//? 6
const slugify = require('slugify');

const replaceTemplate = require('./modules/replaceTemplate');

// HTML TEMPLATES
//* better to read the templates too from data beforehand for once and store them in a variable and use it
const tempOverview = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-product.html`, 'utf-8');
// DATA
const data = fs.readFileSync(`${__dirname}/1-node-farm/final/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// console.log(slugify('Fresh Avacados', { lower: true }));

const slugs = dataObj.map(el => slugify(el.productName, { lower: true }));
console.log(slugs);

// SERVER
const server = http.createServer((req,res) => {
    
    // console.log(req.url);
    // console.log(url.parse(req.url));
    
    // const pathname = req.url;

    const { query, pathname } = url.parse(req.url, true);

    //OVERVIEW page
    if(pathname == '/' || pathname == '/overview' ){
        // res.end('This is the OVERVIEW')
        res.writeHead(200, {'Content-Type': 'text/html'});

        // const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)); //? this returns the html elements in an array 
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join(''); //? joims all strings and make one big html string 
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        // console.log(output);
        res.end(output);

    // PRODUCT page
    } else if (pathname == '/product') {
        // console.log(query);

        res.writeHead(200, {'Content-Type': 'text/html'});
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);
        res.end(output);

        // res.end('This is the PRODUCT')

    // API
    } else if (pathname == '/api') {
        // res.end('You have reached the API')
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data);

    // ERROR
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
});
