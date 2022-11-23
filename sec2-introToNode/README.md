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

