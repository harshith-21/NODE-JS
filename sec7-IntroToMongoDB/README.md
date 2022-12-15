# **MONGO DB**

![](images/Screenshot%202022-12-12%20at%204.49.32%20PM.png)

![](images/Screenshot%202022-12-12%20at%204.52.39%20PM.png)

![](images/Screenshot%202022-12-12%20at%204.55.31%20PM.png)


----
**You don't need to install MongoDB on your computer**
There have been some problems with installing MongoDB locally, because things change quite frequently.

The truth is, you don't need to install MongoDB on your computer in order to learn MongoDB and go through this course.

You can just use a hosted MongoDB instance using a service called Atlas, as I will teach you in Lecture 80.

This means you can skip Lectures 72-78 (79 is relevant for installing the Compass app).

Happy learning! 

---

![](images/Screenshot%202022-12-12%20at%205.22.28%20PM.png)

![](images/Screenshot%202022-12-12%20at%205.23.25%20PM.png)

> need mongoose (driver for mongoDB)
> npm i mongoose


connecting to DB:
server.js
```js
// START SERVER
const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

//? connect method returns a promise, gives access to a connection object "con"
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then( con => {
    console.log(con.connections);
    console.log("DB connection successfully established");
})

// console.log(app.get('env'));
// console.log(process.env);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
```
and config.env
```
NODE_ENV=development
PORT=4000
DATABASE=mongodb+srv://harshith:<PASSWORD>@cluster0.d1euqbo.mongodb.net/natours?retryWrites=true&w=majority
DATABASE_PASSWORD=harshith21

# USERNAME=harshith
# PASSWORD=harshith@123

#for local server
#DATABASE_LOCAL=mongo://localhost:27017/natours
```
results in CLI:
```bash
npm run start

> natours@1.0.0 start
> nodemon server.js

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
undefined
Server listening on port 4000
(node:42433) [MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
(Use `node --trace-warnings ...` to show where the warning was created)
<ref *1> [
  NativeConnection {
    base: Mongoose {
      connections: [Circular *1],
      models: {},
      modelSchemas: {},
      events: [EventEmitter],
      options: [Object],
      _pluralize: [Function: pluralize],
      Schema: [Function],
      model: [Function (anonymous)],
      plugins: [Array]
    },
    collections: {},
    models: {},
    config: { useCreateIndex: true, useFindAndModify: false },
    replica: false,
    options: null,
    otherDbs: [],
    relatedDbs: {},
    states: [Object: null prototype] {
      '0': 'disconnected',
      '1': 'connected',
      '2': 'connecting',
      '3': 'disconnecting',
      '99': 'uninitialized',
      disconnected: 0,
      connected: 1,
      connecting: 2,
      disconnecting: 3,
      uninitialized: 99
    },
    _readyState: 1,
    _closeCalled: undefined,
    _hasOpened: true,
    plugins: [],
    id: 0,
    _queue: [],
    _listening: false,
    _connectionString: 'mongodb+srv://harshith:harshith21@cluster0.d1euqbo.mongodb.net/natours?retryWrites=true&w=majority',
    _connectionOptions: {
      useNewUrlParser: true,
      promiseLibrary: [Function: Promise],
      useUnifiedTopology: false,
      driverInfo: [Object]
    },
    client: MongoClient {
      _events: [Object: null prototype],
      _eventsCount: 4,
      _maxListeners: 0,
      s: [Object],
      topology: [ReplSet],
      [Symbol(kCapture)]: false
    },
    '$initialConnection': Promise { undefined },
    name: 'natours',
    host: 'ac-nytozpk-shard-00-00.d1euqbo.mongodb.net',
    port: 27017,
    user: 'harshith',
    pass: 'harshith21',
    db: Db {
      _events: [Object: null prototype] {},
      _eventsCount: 0,
      _maxListeners: undefined,
      s: [Object],
      serverConfig: [Getter],
      bufferMaxEntries: [Getter],
      databaseName: [Getter],
      [Symbol(kCapture)]: false
    }
  }
]
DB connection successfully established
```

for local connections
```js
mongoose.connect('mongodb://localhost:27017/natours-test', () => console.log("DB CONNECTION SUCCESSFULL") );
```
for now to make it simple:
```js
