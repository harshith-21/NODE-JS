## **INTRO TO NODE.JS AND NPM**
---

Node js is javascript runtime built on googles open source V8 javascript runtime

![](images/Screenshot%202022-11-22%20at%2011.23.46%20AM.png)


```js
Welcome to Node.js v16.17.0.
Type ".help" for more information.
> 1+1
2
> const app = 'pythyon'
undefined
> app
'pythyon'
> 
```

> hit tab once or twice to see all available global variables
```js
> 
AbortController       AbortSignal           AggregateError        Array                 ArrayBuffer           Atomics               BigInt                BigInt64Array         BigUint64Array
Boolean               Buffer                DataView              Date                  Error                 EvalError             Event                 EventTarget           FinalizationRegistry
Float32Array          Float64Array          Function              Infinity              Int16Array            Int32Array            Int8Array             Intl                  JSON
Map                   Math                  MessageChannel        MessageEvent          MessagePort           NaN                   Number                Object                Promise
Proxy                 RangeError            ReferenceError        Reflect               RegExp                Set                   SharedArrayBuffer     String                Symbol
SyntaxError           TextDecoder           TextEncoder           TypeError             URIError              URL                   URLSearchParams       Uint16Array           Uint32Array
Uint8Array            Uint8ClampedArray     WeakMap               WeakRef               WeakSet               WebAssembly           _                     _error                assert
async_hooks           atob                  btoa                  buffer                child_process         clearImmediate        clearInterval         clearTimeout          cluster
console               constants             crypto                decodeURI             decodeURIComponent    dgram                 diagnostics_channel   dns                   domain
encodeURI             encodeURIComponent    escape                eval                  events                fs                    global                globalThis            http
http2                 https                 inspector             isFinite              isNaN                 module                net                   os                    parseFloat
parseInt              path                  perf_hooks            performance           process               punycode              querystring           queueMicrotask        readline
repl                  require               setImmediate          setInterval           setTimeout            stream                string_decoder        sys                   timers
tls                   trace_events          tty                   undefined             unescape              url                   util                  v8                    vm
wasi                  worker_threads        zlib

__proto__             hasOwnProperty        isPrototypeOf         propertyIsEnumerable  toLocaleString        toString              valueOf

constructor

app
```

> underscore means previous result
```js
> 1+2
3
> _+4
7
> _
7
> _-7
0
```

---
### **HELLO WORLD**
```js
const hello = 'Hello warldd';
console.log(hello);
```
```bash
MBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ node index.js 
Hello warldd
```
---

### **To read a file - FS MODULE**

```js
const fs = require('fs');
```
> adding this require is like and import and "fs" is a module for handing files. Doing (importing this module) this would allow us to use its functions

>**USE DOCUMENTATION FOR KNOWING MORE ABOUT THESE STUFF**
> https://nodejs.org/dist/latest-v18.x/docs/api/fs.html

#### **USAGE :**
```js
const fs = require('fs');

const textIn = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
console.log(textIn);
```

    > MBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ node index.js 
    The avocado 🥑 is popular in vegetarian cuisine as a substitute for meats in sandwiches and salads because of its high fat content 😄


#### **Read file, add some more text to string and save that text to output.txt**
```js
const fs = require('fs');

const textIn = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avacado: ${textIn}. \nCrearted on ${Date.now()}`;
fs.writeFileSync('./1-node-farm/starter/txt/ouput.txt', textOut); 
console.log('File is writen!');
```
 -  `` are using in ES6 
 -  anything inside ${} is compiled as js inside ``

```js
> console.log(`1+1 is ${1+1}`)
1+1 is 2
```


> file created at that location: /Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec2-introToNode/1-node-farm/starter/txt

    cat ouput.txt 
    This is what we know about the avacado: The avocado 🥑 is popular in vegetarian cuisine as a substitute for meats in sandwiches and salads because of its high fat content 😄. 
    Crearted on 1669098653403%    

---

## SYNCHRONOUS and ASYNCHRONOUS
## **Blocking and non-Blocking nature of node JS**
Synchronous code - Blocking
Asynchronous code - Non Blocking

> if a function or code block is taking long time it will also stop other functions. so better to run them in background

![](images/Screenshot%202022-11-22%20at%203.11.00%20PM.png)

>we can also create a callback function to use the data which was loaded before

![](images/Screenshot%202022-11-22%20at%203.13.33%20PM.png)

## **ASYNC-FUNCTIONS**

```js
fs.readFile('./1-node-farm/starter/txt/start.txt', 'utf-8', (err,data) => {});
```
> (err,data) => {}

    this is the function that is called when the data is loaded
    readfile gives errror if any to err and data to data variable and and when its done proceeds to do whats inside
---
> full async function looks like below

```js
fs.readFile('./1-node-farm/starter/txt/start.txt', 'utf-8', (err,data) => {
    // console.log('hello from async function');
    console.log(data);
    console.log('hello from async function2');
});
console.log("will read file")
```
```bash
MBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ node index.js 
will read file
read-this
hello from async function2
```


### creating a lil callback hell
```js
fs.readFile('./1-node-farm/starter/txt/start.txt', 'utf-8', (err,data1) => {
    console.log(data1);
    fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`, 'utf-8', (err,data2) => {
        console.log(data2);
    });
});
console.log("will read file")
```
> there is a file called read-this.txt in the corresponding folder
```bash
MBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ node index.js 
will read file
read-this
The avocado 🥑 is also used as the base for the Mexican dip known as guacamole, as well as a spread on corn tortillas or toast, served with spices.
```

Adding one more call back
```js
const fs = require('fs');

fs.readFile('./1-node-farm/starter/txt/start.txt', 'utf-8', (err,data1) => {
    console.log(data1);
    fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`, 'utf-8', (err,data2) => {
        console.log(data2);
        fs.readFile(`./1-node-farm/starter/txt/append.txt`, 'utf-8', (err,data3) => {
            console.log(data3);
        });
    });
});
console.log("will read file")
```

```bash
MBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ node index.js 
will read file
read-this
The avocado 🥑 is also used as the base for the Mexican dip known as guacamole, as well as a spread on corn tortillas or toast, served with spices.
APPENDIX: Generally, avocados 🥑 are served raw, but some cultivars can be cooked for a short time without becoming bitter.
```

Addind those texts togather and writting into the file togather
```js
const fs = require('fs');

fs.readFile('./1-node-farm/starter/txt/start.txt', 'utf-8', (err,data1) => {
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
```
```bash
MBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ node index.js 
will read file
read-this
The avocado 🥑 is also used as the base for the Mexican dip known as guacamole, as well as a spread on corn tortillas or toast, served with spices.
APPENDIX: Generally, avocados 🥑 are served raw, but some cultivars can be cooked for a short time without becoming bitter.
file has been written😌
```
Reading the above created file 
```
MBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ cat 1-node-farm/starter/txt/final.txt 
The avocado 🥑 is also used as the base for the Mexican dip known as guacamole, as well as a spread on corn tortillas or toast, served with spices.
APPENDIX: Generally, avocados 🥑 are served raw, but some cultivars can be cooked for a short time without becoming bitter.
```

### **Error handling**
```js
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
```
As the file mentioned does not exists and we have added a return statement... prints the error and returns

```bash
MBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ node index.js 
will read file
ERROR!!!
```
---
---

## **SERVER**

> simple server
```js
const http = require('http')

//? SERVER
//* server is the variabke which stores the result of the createServer method
const server = http.createServer((req,res) => {
    res.end('Hello from the server!');
});

// server.listen(8000) //? defaults to local host
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000 !!!');
})
```
![](images/Screenshot%202022-11-22%20at%204.30.25%20PM.png)

in CLI

![](images/Screenshot%202022-11-22%20at%204.31.04%20PM.png)

>> its struck there unlike before because of event loop (discussed later) 


```js
const http = require('http')

//* server is the variabke which stores the result of the createServer method
const server = http.createServer((req,res) => {
    console.log(req)
    res.end('Hello from the server!');
});

// server.listen(8000) //? defaults to local host
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000 !!!');
})
```
and you will get a huge block in terminal which is response from the browser









```bash
MBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ node index1.js 
Listening to requests on port 8000 !!!
<ref *2> IncomingMessage {
  _readableState: ReadableState {
    objectMode: false,
    highWaterMark: 16384,
    buffer: BufferList { head: null, tail: null, length: 0 },
    length: 0,
    pipes: [],
    flowing: null,
    ended: false,
    endEmitted: false,
    reading: false,
    constructed: true,
    sync: true,
    needReadable: false,
    emittedReadable: false,
    readableListening: false,
    resumeScheduled: false,
.
.
.
. so on
```
---
---
## **ROUTING**
> when you dont introduce any routing whatever route u open it shows the same content unlike its supposed tobe 

![](images/Screenshot%202022-11-22%20at%204.45.11%20PM.png)

- EXPRESS makes the work routing very easy and can make complex route simple and will be implemented later


```js
const fs = require('fs');
const http = require('http');
const url = require('url');

//? SERVER

//* server is the variabke which stores the result of the createServer method
const server = http.createServer((req,res) => {
    console.log(req.url)
    res.end('Hello from the server!');
});

// server.listen(8000) //? defaults to local host
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000 !!!');
})
```
In browser

![](images/Screenshot%202022-11-22%20at%204.53.38%20PM.png)

In cli

![](images/Screenshot%202022-11-22%20at%204.54.24%20PM.png)

> we get 2 reqs, one for response for the particular route and one for favicon

### If-else for routing


```js
const server = http.createServer((req,res) => {
    const pathName = req.url;

    if(pathName == '/' || pathName == '/overview' ){
        res.end('This is the OVERVIEW')
    } else if (pathName == '/product') {
        res.end('This is the PRODUCT')
    } else {
        // headers
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'mt-own-header': 'hello world'  
        });
        // response
        res.end('<h1>Page not found</h1>');
    }
    
});

// server.listen(8000) //? defaults to local host
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000 !!!');
})
```
![](images/Screenshot%202022-11-22%20at%205.17.26%20PM.png)
![](images/Screenshot%202022-11-22%20at%205.18.03%20PM.png)
![](images/Screenshot%202022-11-22%20at%205.18.40%20PM.png)


> if there is no route in the ifelse statement for routes then the brower strucks at loading 

> send headers before response

> u can find error code and headers in developer tools network section 

![](images/Screenshot%202022-11-22%20at%205.20.24%20PM.png)

> this is how the dev tools look like for wrong route

> see general tab in network for similar things from code and the error code

## **API**

- api is service/server from which we can ask and recieve the data

**simple web api**
```js
const fs = require('fs');
const http = require('http');
const url = require('url');

//? server/api
const server = http.createServer((req,res) => {
    const pathName = req.url;

    if(pathName == '/' || pathName == '/overview' ){
        res.end('This is the OVERVIEW')
    } else if (pathName == '/product') {
        res.end('This is the PRODUCT')
    } else if (pathName == '/api') {
        res.end('You have reached the API')
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
```
**Browser:**

![](images/Screenshot%202022-11-23%20at%2011.11.36%20AM.png)

> **using ./ and ${__dirname}/ ..**
> 
> using ./ means where the script is running 
>
> ${__dirname} means where the current file is located

### **Reading from a json file**
```js
const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
    const pathName = req.url;

    if(pathName == '/' || pathName == '/overview' ){
        res.end('This is the OVERVIEW')
    } else if (pathName == '/product') {
        res.end('This is the PRODUCT')
    } else if (pathName == '/api') {
        // res.end('You have reached the API')

        fs.readFile(`${__dirname}/1-node-farm/starter/dev-data/data.json`, 'utf-8', (err, data) => {
            // console.log(__dirname);
            const productData = JSON.parse(data);
            res.writeHead(200, {'Content-type': 'application/json'});
            res.end(data);
        });


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
```
**Browser response**
![](images/Screenshot%202022-11-23%20at%2011.52.52%20AM.png)


- **ALWAYS KEEP AN EYE ON WHICH CODE BLOCK IS SYNCHRONOUS AND WHICH IS NOT AND WHICH CODE EXECUTED IN BEGINNING AND WHICH CODE GET EXECUTED OVER AND OVER AGAIN FOR REQUESTS**

- **But in this case everytime a req hits the server it has read the jsoon file again and again, its better to store that in a variable and use that for speed and reliability**

```js
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
```

- here the json file is read once and everytime a req comes then the variable is read not the file and file is read only once and that too synchronously, if file big , yes it will take some time to start the server because it will start answering reqs after the above synchronous part 
- if it was in server it would be read again and again for each req which makes the server slow af

## **Adding html content**

- after adding html content and repalacing the hardcoded things for a particular product to place holders which look like 
- {%<name_for_placeholder>%}

and adding the overview template to the overview path which would result in below code

```js
// HTML TEMPLATES
//* better to read the templates too from data beforehand for once and store them in a variable and use it
const tempOverview = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-product.html`, 'utf-8');

// DATA
const data = fs.readFileSync(`${__dirname}/1-node-farm/starter/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// SERVER
const server = http.createServer((req,res) => {
    const pathName = req.url;

    //OVERVIEW page
    if(pathName == '/' || pathName == '/overview' ){
        // res.end('This is the OVERVIEW')
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(tempOverview);

    // PRODUCT page
    } else if (pathName == '/product') {
        res.end('This is the PRODUCT')

    // API
    } else if (pathName == '/api') {
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
```
would return the following response at /overview or / path

![](images/Screenshot%202022-11-23%20at%2012.48.08%20PM.png)


-> replacing that placeholder with data gives

```js
const cardsHtml = dataObj.map(el => reaplceTemplate(tempCard, el));
```
cardsHtml is an array of elements where placeholders in tempCard are replaced with values 

the index2.js would look like 
```js
const reaplceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);

    //? CSS-StyleDeclaration adds class to div element todo necessary change
    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic'); 
    return output;
}

// HTML TEMPLATES
//* better to read the templates too from data beforehand for once and store them in a variable and use it
const tempOverview = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/1-node-farm/final/templates/template-product.html`, 'utf-8');

// DATA
const data = fs.readFileSync(`${__dirname}/1-node-farm/final/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// SERVER
const server = http.createServer((req,res) => {
    const pathName = req.url;

    //OVERVIEW page
    if(pathName == '/' || pathName == '/overview' ){
        // res.end('This is the OVERVIEW')
        res.writeHead(200, {'Content-Type': 'text/html'});

        // const cardsHtml = dataObj.map(el => reaplceTemplate(tempCard, el)); //? this returns the html elements in an array 
        const cardsHtml = dataObj.map(el => reaplceTemplate(tempCard, el)).join(''); //? joims all strings and make one big html string 
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        res.end(output);

    // PRODUCT page
    } else if (pathName == '/product') {
        res.end('This is the PRODUCT')

    // API
    } else if (pathName == '/api') {
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
```

> And the webpage will look like

![](images/Screenshot%202022-11-23%20at%202.10.05%20PM.png)


this is the content of template-card.html and notice the last 'a' element which denotes the link and changes according to the product ID therefore creating a different link for diff product
```html
  <figure class="card">
    <div class="card__emoji">{%IMAGE%}{%IMAGE%}</div>
    <div class="card__title-box">
      <h2 class="card__title">{%PRODUCTNAME%}</h2>
    </div>

    <div class="card__details">
      <div class="card__detail-box {%NOT_ORGANIC%}">
          <h6 class="card__detail card__detail--organic">Organic!</h6>
      </div>

      <div class="card__detail-box">
        <h6 class="card__detail">{%QUANTITY%} per 📦</h6>
      </div>
        
      <div class="card__detail-box">
        <h6 class="card__detail card__detail--price">{%PRICE%}€</h6>
      </div>
    </div>

    <a class="card__link" href="/product?id={%ID%}">
      <span>Detail <i class="emoji-right">👉</i></span>
    </a>
  </figure>
  ```



---
## **IMP**

```js
let out = temp.replace('{%PRODUCTNAME%}', product.productName);
```
- above thing will replace the {%PRODUCTNAME%} with the value of product.productName ( for once in the html string )

- but if there are multiple instances of {%PRODUCTNAME%} and we need to replace all it better to use REGEX which would look like

```js
let out = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
```

- this replaces all the {%PRODUCTNAME%} with the value of product.productName

- Also notice that we have read the html templates and json (essentailly data for website) at the start of the index.js synchronously.So if we are making any edits in the templates or json or anything reg files which are read before the start of the server function, while the server is not running, we wont be able to see the changes as the data is read into variables and we are using them.
- If we want to Reflect those changes we have to restart the server therefore reading the files again and storing the updated data into the variable objects.
- we can also write that read function in the server function and then we should be able to see the changes upon a browser refresh
  
- we havent yet gave a response to the link with the ID / that "detail" button from the page so iot would give us an "page not found error" as we have written in the routes

---

### **Getting queries from URL**

```js
console.log(req.url);
console.log(url.parse(req.url));
``` 
- adding these two lines at the start of the function and clicking on the fifth product detail would give 

```json
product?id=4
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?id=4',
  query: 'id=4',
  pathname: '/product',
  path: '/product?id=4',
  href: '/product?id=4'
}
```
- where first line would be the link being requested and followed by the object URL object
  
---

```js
const { query, pathname } = url.parse(req.url, true);
```
This line would only take query and pathname from the url objec and store them in the said variables

---
Also when you 
```js
console.log(query);
```
product path in server it will print that query obj from above URL obj like

```bash
MBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ node index2.js 
Listening to requests on port 8000 !!!
[Object: null prototype] { id: '0' }

```
when i hit first link 

---

- **Now parcing that url and getting the id fpr product and replacing the placeholders with the appropriate data from the json for that product and returning that as a response by using the replaceTemplate function would give**

![](images/Screenshot%202022-11-23%20at%202.56.14%20PM.png)

and clickiong that details link would give 

![](images/Screenshot%202022-11-23%20at%202.56.42%20PM.png)

(similarly for each and every product)
--> back button works too

## **MODULES :**
---
cant write all function in same file as it makes hella big and those functions cant be used inb other files
so better make modules for functions

```js
const replaceTemplate = require('./modules/replaceTemplate');
```
- import a module like this
- module contents are
```js
module.exports = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);

    //? CSS-StyleDeclaration adds class to div element todo necessary change
    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic'); 
    return output;
}
```
the name you give after the const while importing or require statement will be the function name for that file scope



## **NPM**
**node package manager**

funny enuf nmp is used to manage the packages and the repository itself

for packages
- **https://www.npmjs.com/**

when you start a new project, hit
```bash
mpm init
```
answer the questions and it

will create a package .json - config file


```bash
MBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (sec2-introtonode) node-farm
version: (1.0.0) 
description: me learning nodeJS
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: harshith gandhe
license: (ISC) 
About to write to /Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec2-introToNode/package.json:

{
  "name": "node-farm",
  "version": "1.0.0",
  "description": "me learning nodeJS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "harshith gandhe",
  "license": "ISC"
}


Is this OK? (yes) y
```
2 types of installs
- simple dependencies / regular
  - eg: express etc
- development dependencies
  - eg: code bundler like webpack, debugger tool or testing library
 
we are installing a package called "slugify" which helps in product urls ?
helps in beautifying the urls

nodemon installed
restarts the server whenever we change some files or code

you can install a dependency globally and use wherever you want 

in mac
```bash
MBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ sudo npm install nodemon --global
Password:

added 33 packages, and audited 34 packages in 5s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

- using node mon
```bash
MBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ nodemon index2.js 
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index2.js`
Listening to requests on port 8000 !!!
[nodemon] restarting due to changes...
[nodemon] starting `node index2.js`
Listening to requests on port 8000 !!!
[nodemon] restarting due to changes...
[nodemon] starting `node index2.js`
Listening to requests on port 8000 !!!
```
restarts after every save/change

## **USING SLUGIFY**

```js
console.log(slugify('Fresh Avacados', { lower: true }));
```
the above line produces
```bash
^CMBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ nodemon index2.js 
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index2.js`
fresh-avacados
Listening to requests on port 8000 !!!
```
in CLI

- Now working with the arrays
```js
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
```
last console.log would result in 
```bash
^CMBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ nodemon index2.js 
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index2.js`
[
  'fresh-avocados',
  'goat-and-sheep-cheese',
  'apollo-broccoli',
  'baby-carrots',
  'sweet-corncobs'
]
Listening to requests on port 8000 !!!
```
in CLI

- Notice that array where product names are turned to slugs, caps to smalls and spaces to hyphens etc

## **VERSIONING IN PACKAGES**
PACKAGES are versioned like 1.2.3
where 1 is major version number
2 is minor version number
3 is patch version number

patches are for bug fixes 

minor version number are for added features... if one uses 1.4.5 and new version is 1.4.6 even after updating that package his code wont break as there would be backwards compatibility as feature is added not deleted

and major for huge changes and may break things 

in package.json
```json
{
  "name": "node-farm",
  "version": "1.0.0",
  "description": "me learning nodeJS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "harshith gandhe",
  "license": "ISC",
  "dependencies": {
    "slugify": "^1.6.5"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}
```
- see that version started by " ^ " : means it accepts latest minor and patches but not major

- we can also use " ~ " in its place to only accept patches

- if we use " * " in the same place that means we accept all patches, minor and major versions

> uninstalling and installing packages

```bash
MBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ npm i express

added 62 packages, and audited 97 packages in 652ms

10 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```json
  "author": "harshith gandhe",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "slugify": "^1.6.5"
  },
  ```
  ```bash
  MBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ npm uninstall express

removed 62 packages, and audited 35 packages in 621ms

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```json
  "author": "harshith gandhe",
  "license": "ISC",
  "dependencies": {
    "slugify": "^1.6.5"
  },
```

--> add node_modules to gitignore everytime 

- To check if any package is oudated or not
```bash
MBP-1AQ05D-GHR:sec2-introToNode harshithgandhe$ npm outdated
```
 