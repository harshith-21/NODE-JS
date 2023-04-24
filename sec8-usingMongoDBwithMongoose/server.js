// START SERVER
const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

//? we set env to things present in config file and use those variables, we replace the password thing in DATABASE variable and store the link in DB
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);




//? connect method returns a promise, gives access to a connection object "con"

//? for offline db onnect
// mongoose
//     .connect(process.env.DATABASE_LOCAL, {
//     // .connect(DB, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//     }).then( () => console.log("DB connection successfully established"))

//! online db connect
mongoose
    // .connect(process.env.DATABASE_LOCAL, {
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then( () => console.log("DB connection successfully established"))

// console.log(app.get('env'));
// console.log(process.env);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});