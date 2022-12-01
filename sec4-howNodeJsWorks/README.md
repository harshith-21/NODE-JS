## **NODE ARCHITECTURE**

![](images/Screenshot%202022-11-24%20at%203.22.59%20PM.png)

![](images/Screenshot%202022-11-24%20at%203.28.36%20PM.png)

node offloads heavy tasks which consume more time/resources to thread pool ( min-4 max-128 )

### **EVENT LOOP**

![](images/Screenshot%202022-11-24%20at%203.37.52%20PM.png)

![](images/Screenshot%202022-11-24%20at%203.39.55%20PM.png)

![](images/Screenshot%202022-11-24%20at%203.41.08%20PM.png)

![](images/Screenshot%202022-11-24%20at%203.41.51%20PM.png)

![](images/Screenshot%202022-11-24%20at%203.43.45%20PM.png)

![](images/Screenshot%202022-11-24%20at%203.48.00%20PM.png)

![](images/Screenshot%202022-11-24%20at%203.50.04%20PM.png)

![](images/Screenshot%202022-11-24%20at%203.56.02%20PM.png)

![](images/Screenshot%202022-11-24%20at%204.20.43%20PM.png)

### **EVENT-LOOP IN PRACTICE**

```js
//? 1
const fs = require('fs');

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
    console.log("I/O finished");
});

console.log("hello from the top level code");
```
would result in
```bash
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ node event-loop.js 
hello from the top level code
Timer 1 finished
Immediate 1 finished
I/O finished
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ 
```
> note that it ewxited immediately after bec there is no process running after

```js
//? 2

const fs = require('fs');

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
    console.log("I/O finished");
    console.log("---------------------");

    setTimeout(() => console.log("Timer 2 finished"), 0);
    setTimeout(() => console.log("Timer 3 finished"), 3000);
    setImmediate(() => console.log("Immediate 2 finished"));
});

console.log("hello from the top level code");
```
would result in
```bash
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ node event-loop.js 
hello from the top level code
Timer 1 finished
Immediate 1 finished
I/O finished
---------------------
Immediate 2 finished
Timer 2 finished
Timer 3 finished
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$
```

```js
//? 3

const fs = require('fs');

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
    console.log("I/O finished");
    console.log("---------------------");

    setTimeout(() => console.log("Timer 2 finished"), 0);
    setTimeout(() => console.log("Timer 3 finished"), 3000);
    setImmediate(() => console.log("Immediate 2 finished"));

    process.nextTick(() => console.log("Process.nextTick"));
});

console.log("hello from the top level code");
```
will result in
```bash
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ node event-loop.js 
hello from the top level code
Timer 1 finished
Immediate 1 finished
I/O finished
---------------------
Process.nextTick
Immediate 2 finished
Timer 2 finished
Timer 3 finished
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ 
```

--> **NOW TO PROVE THAT THERE ARE 4 THREADS WHICH HELP DOING HEAVY TASKS IN EVENT LOOP**
```js
//? 4
const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
    console.log("I/O finished");
    console.log("---------------------");

    setTimeout(() => console.log("Timer 2 finished"), 0);
    setTimeout(() => console.log("Timer 3 finished"), 3000);
    setImmediate(() => console.log("Immediate 2 finished"));

    process.nextTick(() => console.log("Process.nextTick"));

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
});

console.log("hello from the top level code");
```
would result in
```bash
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ node event-loop.js 
hello from the top level code
Timer 1 finished
Immediate 1 finished
I/O finished
---------------------
Process.nextTick
Immediate 2 finished
Timer 2 finished
crypto.pbkdf2 finished/ password emcrypted
time taken: 626 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 627 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 628 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 630 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 1227 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 1241 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 1245 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 1255 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 1862 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 1863 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 1869 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 1888 ms
Timer 3 finished
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ 
```
> OBSERVE THAT THERE ARE SETS OF 4 SIMILAR TIMINGS AS THOSE TASKS ARE DONE IN PARALLE SO 4 TASKS GET COMPLETED AT ALMOST SAME TIME ( AS THEY ARE SAME TASK).
> 
> AND THE NEXT FOUR WILL DO FOLLOW THE SAME PATTERN AND SO ON
>
> WE CAN CHANGE THE THREAD COUNT BY SETTING THE ENV VARAIBLE



```js
const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
    console.log("I/O finished");
    console.log("---------------------");

    setTimeout(() => console.log("Timer 2 finished"), 0);
    setTimeout(() => console.log("Timer 3 finished"), 3000);
    setImmediate(() => console.log("Immediate 2 finished"));

    process.nextTick(() => console.log("Process.nextTick"));

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log("crypto.pbkdf2 finished/ password emcrypted");
        console.log('time taken:', Date.now() - start, 'ms');
    })
});

console.log("hello from the top level code");
```
NOW that its 1, in cli u will see something like
```bash
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ node event-loop.js 
hello from the top level code
Timer 1 finished
Immediate 1 finished
I/O finished
---------------------
Process.nextTick
Immediate 2 finished
Timer 2 finished
crypto.pbkdf2 finished/ password emcrypted
time taken: 573 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 1124 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 1683 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 2240 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 2789 ms
Timer 3 finished
crypto.pbkdf2 finished/ password emcrypted
time taken: 3344 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 3896 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 4448 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 5008 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 5558 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 6108 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 6658 ms
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ 
```

if its 5
```js
process.env.UV_THREADPOOL_SIZE = 5;
```

```bash
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ node event-loop.js 
hello from the top level code
Timer 1 finished
Immediate 1 finished
I/O finished
---------------------
Process.nextTick
Immediate 2 finished
Timer 2 finished
crypto.pbkdf2 finished/ password emcrypted
time taken: 736 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 743 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 767 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 783 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 823 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 1438 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 1458 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 1460 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 1548 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 1569 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 2022 ms
crypto.pbkdf2 finished/ password emcrypted
time taken: 2039 ms
Timer 3 finished
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ 
```

if we use sync 
```js
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
```
```bash
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ node event-loop.js 
hello from the top level code
Timer 1 finished
Immediate 1 finished
I/O finished
---------------------
time taken: 575 ms
time taken: 1127 ms
time taken: 1684 ms
time taken: 2233 ms
time taken: 2787 ms
Process.nextTick
Immediate 2 finished
Timer 2 finished
Timer 3 finished
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ 
```
as they are sync functions ... cant be moved to threads
so they execute one by one 

> aas they are in background and only be picked after those 5 password encryptions


## **THE EVENT DRIVEN ARCHITECTURE** 
---

![](images/Screenshot%202022-11-29%20at%202.37.16%20PM.png)


## **EVENTS** :

```JS
const EventEmittor = require('events');
const myEmittor = new EventEmittor();


//? listener
myEmittor.on('newSale', () => {
    console.log('there is a new sale');
});

//? listener
myEmittor.on('newSale', () => {
    console.log('any random sh*t u wanna print for that event');
});

//? event
myEmittor.emit('newSale');
```
will result in 
```bash
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ node events.js 
there is a new sale
any random sh*t u wanna print for that event
```


another example:
```js
const EventEmittor = require('events');
const myEmittor = new EventEmittor();

myEmittor.on('anothernewSale', () => {
    console.log('there is a another new sale');
});

myEmittor.on('newSale', () => {
    console.log('new sale!!');
    myEmittor.emit('anothernewSale');
});

myEmittor.emit('newSale');
```
will result in
```bash
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ node events.js 
new sale!!
there is a another new sale
```
> we can also pass values from the events and use them in listeners as below:

```js
const EventEmittor = require('events');
const myEmittor = new EventEmittor();

myEmittor.on('newSale', (stocknumber, stockname) => {
    console.log('there is a another new sale');
    console.log(`there are ${stocknumber} ${stockname}'s `);
});

myEmittor.emit('newSale', 9, "apple");
myEmittor.emit('newSale', 7, "banana");
myEmittor.emit('newSale', 2, "pine");
```
will result in
```
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ node events.js 
there is a another new sale
there are 9 apple's 
there is a another new sale
there are 7 banana's 
there is a another new sale
there are 2 pine's 
```

adding a lil OOPS:

-> learn ES6 syntax for below

```js
//? 4
const EventEmittor = require('events');
// const myEmittor = new EventEmittor();

class Sales extends EventEmittor {
    constructor() {
        super();
    }
}

const myEmittor = new Sales();

myEmittor.on('newSale', () => {
    console.log('any random sh*t u wanna print for that event');
});

myEmittor.emit('newSale');
```
will result in 
```
MBP-1AQ05D-GHR:sec4-howNodeJsWorks harshithgandhe$ node events.js 
any random sh*t u wanna print for that event
```

> http, file system etc core modules implement events internally

    adding a server to the above code gives

```js
const EventEmittor = require('events');
const http = require('http');

class Sales extends EventEmittor {
    constructor() {
        super();
    }
}

const myEmittor = new Sales();

myEmittor.on('newSale', () => {
    console.log('There is a new sale');
});

myEmittor.on('newSale', () => {
    console.log('customer namme is steve');
});

myEmittor.on('newSale', stock => {
    console.log(`There are ${stock} items in stock.`);
});

myEmittor.emit('newSale', 9);

////////////////////////////////

const server = http.createServer();


//? listener event, event will be the request
server.on("request", (req, res) => {
    console.log("request received");
    console.log(req.url);
    res.end("REQ RECIEVED");
});

//? listener event, event will be the request
server.on("request", (req, res) => {
    console.log('a request received');
});
// on server close
server.on('close', () => {
    console.log('server closed');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('waiting for requests, listening on *:8000');
});
```
and result in terminal output for 2 tabs or 2 requests from browser ... there should be a request for favicon icon here ... ( find out where it went )

```
> node events.js
There is a new sale
customer namme is steve
There are 9 items in stock.
waiting for requests, listening on *:8000
request received
/
a request received
request received
/
a request received
```

## **INTRO TO STREAMS**

![](images/Screenshot%202022-12-01%20at%2011.45.11%20AM.png)

![](images/Screenshot%202022-12-01%20at%2011.50.49%20AM.png)

-> simple way to read a file to the website

```js
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    //? solution 1
    fs.readFile("test-file.txt", (err, data) => {
        if (err) console.log(err);

        res.end(data);
    })
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:8000/');
});
```
![](images/Screenshot%202022-12-01%20at%2012.05.53%20PM.png)
>**NOTICE THAT THE REFRESH BUTTON IS STILL LOADING, MEANS ITS STILL READIND THE ENTIRE FILE WHICH IS NOT IDEAL FOR ALL CASES, DEFINATLE NOT GOOD FOR PRODUCTION**

- **STREAMING HELPS TO IMPROVE THE PERFORMANCE A TON HERE**


```js
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {

    //? solution 2: streaming
    const readable = fs.createReadStream("test-file.txt");
    readable.on("data", chunk => {
        res.write(chunk);
    });
    readable.on("end", () => {
        res.end();
    });

});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:8000/');
});
```

- pretty much same result as before but better performance

adding error if file is missing
```js
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {

    //? solution 2: streaming
    const readable = fs.createReadStream("testt-file.txt");
    readable.on("data", chunk => {
        res.write(chunk);
    });
    readable.on("end", () => {
        res.end();
    });
    readable.on("error", err => {
        console.log(err);
        res.statusCode = 500;
        res.end("file not found ffs !!");
    });
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:8000/');
});
```
result in
![](images/Screenshot%202022-12-01%20at%2012.31.03%20PM.png)


In terminal
```
> node streams.js
Server running at http://127.0.0.1:8000/
[Error: ENOENT: no such file or directory, open 'testt-file.txt'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'testt-file.txt'
}
[Error: ENOENT: no such file or directory, open 'testt-file.txt'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'testt-file.txt'
}
```

THERE IS A PROBLEM STILL:

Speed of readable stream from files is much much faster then writing res writtable stream and it may get overwhelmed

--> **THIS IS CALLED BACK-PRESSURE AND ITS A REAL BIG PROBLEM**

--> TO SOLVE THIS WE NEED TO USE PIPES

```js
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {

    //? solution 3: streaming with pipes
    const readable = fs.createReadStream("test-file.txt");
    readable.pipe(res);
    // readableSource.pipe(writableDestination);

});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:8000/');
});
```
-> pipe kinda does the same thing as before in a better way and saving us the syntax


```js
readableSource.pipe(writableDestination);
// is syntax for piping stuff
```

result:
the page takes around 5 seconds to fully load but we see content from the instant we open website


## **HOW NODE MODULES ACTUALLY WORK**

![](images/Screenshot%202022-12-01%20at%201.01.45%20PM.png)

![](images/Screenshot%202022-12-01%20at%201.47.38%20PM.png)

> That module/Javascript code is then converted into a function like below called **wrapper function**

![](images/Screenshot%202022-12-01%20at%201.50.56%20PM.png)


then its executed
![](images/Screenshot%202022-12-01%20at%201.54.07%20PM.png)

then variables which are to be exported are exported

![](images/Screenshot%202022-12-01%20at%201.55.45%20PM.png)

last: when the module returns same value as everytinme we can cache that ( it will be )

![](images/Screenshot%202022-12-01%20at%201.57.19%20PM.png)

## **REQUIRING MODULES IN PRACTICE**

> to prove that our modules/js files are wrapped first

```js
console.log(arguments);
```
in a script and run will give this in cli

> node modules.js 
```json
[Arguments] {
  '0': {},
  '1': [Function: require] {
    resolve: [Function: resolve] { paths: [Function: paths] },
    main: Module {
      id: '.',
      path: '/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec4-howNodeJsWorks',
      exports: {},
      filename: '/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec4-howNodeJsWorks/modules.js',
      loaded: false,
      children: [],
      paths: [Array]
    },
    extensions: [Object: null prototype] {
      '.js': [Function (anonymous)],
      '.json': [Function (anonymous)],
      '.node': [Function (anonymous)]
    },
    cache: [Object: null prototype] {
      '/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec4-howNodeJsWorks/modules.js': [Module]
    }
  },
  '2': Module {
    id: '.',
    path: '/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec4-howNodeJsWorks',
    exports: {},
    filename: '/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec4-howNodeJsWorks/modules.js',
    loaded: false,
    children: [],
    paths: [
      '/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec4-howNodeJsWorks/node_modules',
      '/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/node_modules',
      '/Users/harshithgandhe/Desktop/NODE-TUT/node_modules',
      '/Users/harshithgandhe/Desktop/node_modules',
      '/Users/harshithgandhe/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  '3': '/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec4-howNodeJsWorks/modules.js',
  '4': '/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec4-howNodeJsWorks'
}

```

    where 

    0 is -> exports , empty bec we havent exported anything here

    1 is -> require function.

    2 is -> modules and exports

    3 is -> filename with location

    4 is -> folder name

> hence all the code is wrapped in a function ( here in this example modules.js is wrapped in a function AS EXPLAINED IN WRAPPING SLIDE ABOVE)

  
Also
```js
console.log(require("module").wrapper);
```
```
[
  '(function (exports, require, module, __filename, __dirname) { ',
  '\n});'
]
```

### **ES6 way of writting class**

in test-module-1.js
```js
class Calculator {
    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}

module.exports = Calculator;
```
in 

modules.js
```js
const C = require("./test-module-1");
const calci = new C();
console.log(calci.add(60, 9))
```
will result in
```
> node modules.js
69
```

defining the above caliculator class can be done in a more elegant way.
> CLASS EXPRESSION 

```js
module.exports = class {
    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}
```

replaceing code in test-module-1 with above would also gice the same result without any changes in modules.js

> another way:

in 
test-module-2.js
```js
exports.add = (a,b) => a + b;
exports.multiply = (a,b) => a * b;
exports.divide = (a,b) => a / b;
```
and in 

modules.js
```js
const C = require("./test-module-1");
const calci = new C();
console.log(calci.add(60, 9))

const calci2 = require("./test-module-2");
console.log(calci2.add(60, 9))
```
will result in
    
    > node modules.js
    69
    69


> **NOTE**: U can also import only functions u need from a module, like

modules.js
```js
const { add, multiply } = require("./test-module-2");
console.log(add(400, 20))
console.log(multiply(400, 20))
console.log(divide(400, 20))
```

    > node modules.js
    420
    8000
    /Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec4-howNodeJsWorks/modules.js:18
    console.log(divide(400, 20))
            ^

    ReferenceError: divide is not defined
        at Object.<anonymous> (/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec4-howNodeJsWorks/modules.js:18:9)
        at Module._compile (node:internal/modules/cjs/loader:1159:14)
        at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
        at Module.load (node:internal/modules/cjs/loader:1037:32)
        at Module._load (node:internal/modules/cjs/loader:878:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
        at node:internal/main/run_main_module:23:47

    Node.js v18.12.1


> we have imported add and multiply functions but not divide so it failed there, mind you divide is defined in test-module-2 but still wont work bec it wasnt imported


### **CACHING**

now in

test-module-3.js
```js
console.log("Hello from the module");
module.exports = () => console.log("log this beautiful text");
```

and in

modules.js
```js
// callig the module.exports function directly
require("./test-module-3")();
```
would give

    > node modules.js 
    Hello from the module
    log this beautiful text

but if in modules.js
```js
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
```
would result in

    > node modules.js
    Hello from the module
    log this beautiful text
    log this beautiful text
    log this beautiful text
    log this beautiful text

> So technically the module is loaded and compiled only once and stored the result

    Hello from the module
    log this beautiful text

came from the first call

    log this beautiful text
    log this beautiful text
    log this beautiful text

these 3 came from the last 3 calls and some where in node processes the output is stored when last compiled and returned from cache

