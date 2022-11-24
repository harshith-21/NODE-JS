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



