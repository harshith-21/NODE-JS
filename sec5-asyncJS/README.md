# **Asynchronous JS**

### **promises, asyncc/await >>> call back functions**

> traditionally async js is implemented using callback functions but promises and async and awaita are the new way for an asynchronous approach.

### **problem with callback**
- call back hell

> need a package for working with apis so

> npm init

> npm i superagent

code:
```js
const fs = require('fs');
const superagent = require('superagent');


fs.readFile(`${__dirname}/3-asynchronous-JS/starter/dog.txt`, (err, data) => {

    console.log(`Breed: ${data}`);
    console.log(`https://dog.ceo/api/breed/${data}/image/random`)
    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err,res) => {
        if(err) return console.log(err.message);

        console.log(res.body.message);       

        fs.writeFile('dog-image.txt', res.body.message, err => {
            if(err) return console.log(err.message);
            console.log('Random dog image saved to file!!!');

        });
    });
});
```


    now to simply read a text file to get the dog name and giving a call back there for the name

    then hitting an api with that dog name in the link and waiting there for response and giving a call back there

    and writting the link to an image recieved to a text file will and printing error.There is one more call back after writiing link to the text file

- A simple task like this took 3 call backs and when a complex situation comes its better to use async etc


### **FROM callback hell to PROMISES**

> promise is promising that you will get some data back after some time ( after loading or geeting response from the server)
> 
> when a promise gets back with the data (data or err) then its called resolved promise

resolved promise :-
1. fulfilled promise
2. rejected promise 

> now making those callbacks to promises

```js
fs.readFile(`${__dirname}/3-asynchronous-JS/starter/dog.txt`, (err, data) => {

    console.log(`Breed: ${data}`);
    console.log(`https://dog.ceo/api/breed/${data}/image/random`)


    superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then(res => {
        console.log(res.body.message);

        fs.writeFile('dog-image.txt', res.body.message, err => {
            if(err) return console.log(err.message);
            console.log('Random dog image saved to file!!!');
        });
    })
    .catch(err => {
        console.log(err.message)
    });
});
```
> superagent has support for promises so we have consumed/used them here
> 
> core modeules dont have support for promises
> 
> we have to write

- **Writting a promise for readfile and reshaping the code**

```js
//? 3
const readFilepro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if(err) return reject("i could not find the file :(");
            resolve(data);
        });
    });
};

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err, res) => {
            if(err) return reject("could not write file :(");
            resolve(res);
        });
    });
};

readFilepro(`${__dirname}/3-asynchronous-JS/starter/dog.txt`)
    .then((data) => {
        console.log(`Breed: ${data}`);
        console.log(`https://dog.ceo/api/breed/${data}/image/random`)
        return  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    })
    .then(res => {
        console.log(res.body.message);
        return writeFilePro('dog-img.txt', res.body.message)
    })
    .then( () => {
        console.log("random dog image added to the file");
    })
    .catch(err => {
        console.log(err.message)
    });
  
```
this is so called flat structure 

> basically if readFilepro returns a fulfilled promise then it goes to next "then" statement and id it fails for some reason it will go to catch error and and print corresponding error from the "pronise functions"

>  also observe every return statement is a promise



```js
readFilepro(`${__dirname}/3-asynchronous-JS/starter/dogg.txt`)
    .then(data => {
        console.log(`Breed: ${data}`);
        console.log(`https://dog.ceo/api/breed/${data}/image/random`)
        return  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    })
    .then(res => {
        console.log(res.body.message);
        return writeFilePro('dog-img.txt', res.body.message)
    })
    .then(() => {
        console.log("random dog image added to the file!!");
    })
    .catch(err => {
        console.log(err);
    });
```
> incase you give the file name wrong one and run it. as the file doesnt exist and readfilepro fails, it gives error and its then catched by .catch function and the error os logged.
```
node index.js
i could not find the file :(
```

> if i enter a wrong dog name in the text file like

- /starter/dog.txt
```
labradorrr
```
> and run it, itll give me this error

```bash
node index.js
Breed: labradorrr
https://dog.ceo/api/breed/labradorrr/image/random
Error: Not Found
    at Request.callback (/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec5-asyncJS/node_modules/superagent/lib/node/index.js:844:17)
    at /Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec5-asyncJS/node_modules/superagent/lib/node/index.js:1057:18
    at IncomingMessage.<anonymous> (/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec5-asyncJS/node_modules/superagent/lib/node/parsers/json.js:21:7)
    at Stream.emit (node:events:513:28)
    at Unzip.<anonymous> (/Users/harshithgandhe/Desktop/NODE-TUT/NODE-JS/sec5-asyncJS/node_modules/superagent/lib/node/unzip.js:54:12)
    at Unzip.emit (node:events:513:28)
    at endReadableNT (node:internal/streams/readable:1359:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
  status: 40
.
.
. so on
```
as it failed to get the image. mind you this error message is catched by the catch funcction, but it is generated by something like if(err) from the "superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);" promise


## **Async and Await**
> introduced in ES8

writting the same above code using async and await

```js
const readFilepro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if(err) reject("i could not find the file :(");
            resolve(data);
        });
    });
};

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if(err) reject("could not write file :(");
            resolve('success');
        });
    });
};


const getDogPic = async () => {
    try{
        const data = await readFilepro(`${__dirname}/3-asynchronous-JS/starter/dog.txt`);
        console.log(`Breed: ${data}`);

        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);


        await writeFilePro('dog-img.txt', res.body.message);
        console.log("random dog image added to the file!!");
    } catch (error) {
        console.log(error);
    }
         
};

getDogPic();
```
- try and catch are basic js functions to TRY to do something and incase that fails, catch the error and and do something with it in CATCH function

- at every await it waits for result from promise function attached and if error it goes to catch, if result or data recieved then its sent to next step
- this looks like a synchronous code but its asynchronous

-> TO USE AWAIT YOU HAVE TO DEFINE THE FUNCTION AS ASYNC FUNCTION
-> ASYNC FUNCTIONS RUN IN BACJKGROUND, jus see the below example

```js
console.log("getting the dog pix");
getDogPic();
console.log("got the dog");
```
just do the same with logs above and below and u observe:
```
node index.js
getting the dog pix
got the dog
Breed: labrador
https://images.dog.ceo/breeds/labrador/n02099712_7142.jpg
random dog image added to the file!!
```
BEC async funs run in background...
> thats the whole philosophy of async and await, dont stop the event loop
then how to achieve something, something like
```
node index.js
getting the dog pix
Breed: labrador
https://images.dog.ceo/breeds/labrador/n02099712_7142.jpg
random dog image added to the file!!
got the dog
```

we can try something like
```js
const getDogPic = async () => {
    try{
        const data = await readFilepro(`${__dirname}/3-asynchronous-JS/starter/dog.txt`);
        console.log(`Breed: ${data}`);

        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);


        await writeFilePro('dog-img.txt', res.body.message);
        console.log("random dog image added to the file!!");
    } catch (error) {
        console.log(error);
    }
    return "dog image is ready (form async function)";
         
};


console.log("getting the dog pix");
const x = getDogPic();
console.log(x);
console.log("got the dog");
```
but this results in :
```
> node index.js
getting the dog pix
Promise { <pending> }
got the dog
Breed: labrador
https://images.dog.ceo/breeds/labrador/n02099712_1987.jpg
random dog image added to the file!!
```
> we are logging a result which is not evaluated at time of logging as the x is in event loop and the value of x get from async fun which runs in background and not returned anything when event loop asked so we got a pending promise

to successfully implement this we have to use .then (promise as before used above) OR 

use async await functions

> USING .then 
```js
console.log("getting the dog pix");
getDogPic().then( x => {
    console.log(x);
    console.log("got the dog");
});
```
results in :
```
> node index.js
getting the dog pix
Breed: labrador
https://images.dog.ceo/breeds/labrador/n02099712_4384.jpg
random dog image added to the file!!
dog image is ready (form async function)
got the dog
```

more simply put:
```js
.
.
.
        console.log("random dog image added to the file!!");
    } catch (error) {
        console.log(error);
    }
    return "2: dog image is ready (form async function)";
         
};


console.log("1: getting the dog pix");
getDogPic().then( x => {
    console.log(x);
    console.log("3: got the dog");
});
```
results in:
```
> node index.js
1: getting the dog pix
Breed: labrador
https://images.dog.ceo/breeds/labrador/n02099712_6664.jpg
random dog image added to the file!!
2: dog image is ready (form async function)
3: got the dog
```

if we replace dog with dogg  or something  in get readfilepro statementto create an error:

we get this:
```
> node index.js
1: getting the dog pix
i could not find the file :(
2: dog image is ready (form async function)
3: got the dog
```
see that we havent managed the error and even if there is an error it still returns that string ... to work with that error we have to add a throw statement in error statement

```js
const getDogPic = async () => {
    try{
        const data = await readFilepro(`${__dirname}/3-asynchronous-JS/starter/dogg.txt`);
        console.log(`Breed: ${data}`);

        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);


        await writeFilePro('dog-img.txt', res.body.message);
        console.log("random dog image added to the file!!");
    } catch (err) {
        console.log(err);

        throw err;
    }
    return "2: dog image is ready (form async function)";
         
};


console.log("1: getting the dog pix");
getDogPic().then( x => {
    console.log(x);
    console.log("3: got the dog");
});
```
will result in:
```
1: getting the dog pix
i could not find the file :(
node:internal/process/promises:288
            triggerUncaughtException(err, true /* fromPromise */);
            ^

[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "i could not find the file :(".] {
  code: 'ERR_UNHANDLED_REJECTION'
}

Node.js v18.12.1
```

making this a lil better
```js
const getDogPic = async () => {
    try{
        const data = await readFilepro(`${__dirname}/3-asynchronous-JS/starter/dogg.txt`);
        console.log(`Breed: ${data}`);

        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);


        await writeFilePro('dog-img.txt', res.body.message);
        console.log("random dog image added to the file!!");
    } catch (err) {
        console.log(err);

        throw err;
    }
    return "2: dog image is ready (form async function)";
         
};


console.log("1: getting the dog pix");
getDogPic()
    .then( x => {
        console.log(x);
        console.log("3: got the dog");
    })
    .catch(err => {
        console.log('ERROR !!!');
    });
```
results in:
```
> node index.js
1: getting the dog pix
i could not find the file :(
ERROR !!!
```

--> USING ASYNC AND AWAITS FOR THIS SAME TASK;

---
### - **IMP : IIFE : immediately invoked function expression**
```js
(() => {
    //code
})();
```
---
repalcing the " then " , " catch " block with this 
```js
//? iife : immediately invoked function expression
(async () => {
    try{
        console.log("1: getting the dog pix");
        const x = await getDogPic();
        console.log(x);
        console.log("3: got the dog");
    } catch (err) {
        console.log('ERROR !!!');
    }
})();
```
will solve the issue but in Async way
> result in 
```
node index.js
1: getting the dog pix
i could not find the file :(
ERROR !!!
```


### <font color="red"> if we wanna add more api get requests,we can jus directly copy that req like </font>
```js
const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
```
But there is no point in making one qpi req to wait for other so how to make them run in async ???

TO achieve that

change the code to
```js
const getDogPic = async () => {
    try{
        const data = await readFilepro(`${__dirname}/3-asynchronous-JS/starter/dog.txt`);
        console.log(`Breed: ${data}`);

        const res1pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const res2pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const res3pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);

        // console.log(res.body.message);

        const all = await Promise.all([res1pro, res2pro, res3pro]);
        const imgs = all.map(el => el.body.message);

        console.log(imgs.join("\n"))

        await writeFilePro('dog-img.txt', imgs.join("\n"));
        console.log("random dog image added to the file!!");
    } catch (err) {
        console.log(err);

        throw err;
    }
    return "2: dog image is ready (form async function)";
         
};
```
CLI:
```
node index.js
1: getting the dog pix
Breed: labrador
https://images.dog.ceo/breeds/labrador/Luke.jpg
https://images.dog.ceo/breeds/labrador/n02099712_1383.jpg
https://images.dog.ceo/breeds/labrador/n02099712_2228.jpg
random dog image added to the file!!
2: dog image is ready (form async function)
3: got the dog
```
and txt file:
```
https://images.dog.ceo/breeds/labrador/Luke.jpg
https://images.dog.ceo/breeds/labrador/n02099712_1383.jpg
https://images.dog.ceo/breeds/labrador/n02099712_2228.jpg
```

### <font color="GREEN"> SUCCESSFULLY IMPLEMENTED ASYNC AND AWAIT FUNCITONS </font>
