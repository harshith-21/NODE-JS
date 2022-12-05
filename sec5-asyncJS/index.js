const fs = require('fs');
const superagent = require('superagent');

//? 1
// fs.readFile(`${__dirname}/3-asynchronous-JS/starter/dog.txt`, (err, data) => {

//     console.log(`Breed: ${data}`);
//     console.log(`https://dog.ceo/api/breed/${data}/image/random`)
//     superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err,res) => {
//         if(err) return console.log(err.message);

//         console.log(res.body.message);       

//         fs.writeFile('dog-image.txt', res.body.message, err => {
//             if(err) return console.log(err.message);
//             console.log('Random dog image saved to file!!!');

//         });
//     });
// });



//? 2
// fs.readFile(`${__dirname}/3-asynchronous-JS/starter/dog.txt`, (err, data) => {

//     console.log(`Breed: ${data}`);
//     console.log(`https://dog.ceo/api/breed/${data}/image/random`)


//     superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then(res => {
//         console.log(res.body.message);

//         fs.writeFile('dog-image.txt', res.body.message, err => {
//             if(err) return console.log(err.message);
//             console.log('Random dog image saved to file!!!');
//         });
//     })
//     .catch(err => {
//         console.log(err.message)
//     });
// });




//? 3
// const readFilepro = file => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(file, (err, data) => {
//             if(err) return reject("i could not find the file :(");
//             resolve(data);
//         });
//     });
// };

// readFilepro(`${__dirname}/3-asynchronous-JS/starter/dog.txt`).then((data) => {

//     console.log(`Breed: ${data}`);
//     console.log(`https://dog.ceo/api/breed/${data}/image/random`)


//     superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then(res => {
//         console.log(res.body.message);

//         fs.writeFile('dog-image.txt', res.body.message, err => {
//             if(err) return console.log(err.message);
//             console.log('Random dog image saved to file!!!');
//         });
//     })
//     .catch(err => {
//         console.log(err.message)
//     });
// });



//? 3
// const readFilepro = file => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(file, (err, data) => {
//             if(err) reject("i could not find the file :(");
//             resolve(data);
//         });
//     });
// };

// const writeFilePro = (file, data) => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(file, data, err => {
//             if(err) reject("could not write file :(");
//             resolve('success');
//         });
//     });
// };

// readFilepro(`${__dirname}/3-asynchronous-JS/starter/dog.txt`)
//     .then(data => {
//         console.log(`Breed: ${data}`);
//         console.log(`https://dog.ceo/api/breed/${data}/image/random`)
//         return  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//     })
//     .then(res => {
//         console.log(res.body.message);
//         return writeFilePro('dog-img.txt', res.body.message)
//     })
//     .then(() => {
//         console.log("random dog image added to the file!!");
//     })
//     .catch(err => {
//         console.log(err);
//     });



//? 4
// const readFilepro = file => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(file, (err, data) => {
//             if(err) reject("i could not find the file :(");
//             resolve(data);
//         });
//     });
// };

// const writeFilePro = (file, data) => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(file, data, err => {
//             if(err) reject("could not write file :(");
//             resolve('success');
//         });
//     });
// };


// const getDogPic = async () => {
//     try{
//         const data = await readFilepro(`${__dirname}/3-asynchronous-JS/starter/dog.txt`);
//         console.log(`Breed: ${data}`);

//         const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//         console.log(res.body.message);


//         await writeFilePro('dog-img.txt', res.body.message);
//         console.log("random dog image added to the file!!");
//     } catch (error) {
//         console.log(error);
//     }
         
// };


// getDogPic();


//? 5
// const readFilepro = file => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(file, (err, data) => {
//             if(err) reject("i could not find the file :(");
//             resolve(data);
//         });
//     });
// };

// const writeFilePro = (file, data) => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(file, data, err => {
//             if(err) reject("could not write file :(");
//             resolve('success');
//         });
//     });
// };


// const getDogPic = async () => {
//     try{
//         const data = await readFilepro(`${__dirname}/3-asynchronous-JS/starter/dog.txt`);
//         console.log(`Breed: ${data}`);

//         const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//         console.log(res.body.message);


//         await writeFilePro('dog-img.txt', res.body.message);
//         console.log("random dog image added to the file!!");
//     } catch (err) {
//         console.log(err);

//         throw err;
//     }
//     return "2: dog image is ready (form async function)";
         
// };


// // console.log("1: getting the dog pix");
// // getDogPic()
// //     .then( x => {
// //         console.log(x);
// //         console.log("3: got the dog");
// //     })
// //     .catch(err => {
// //         console.log('ERROR !!!');
// //     });


// //? iife : immediately invoked function expression
// (async () => {
//     try{
//         console.log("1: getting the dog pix");
//         const x = await getDogPic();
//         console.log(x);
//         console.log("3: got the dog");
//     } catch (err) {
//         console.log('ERROR !!!');
//     }
// })();


//? 6
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