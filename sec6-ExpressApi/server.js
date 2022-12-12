// START SERVER
const app = require('./app');

port = 4000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});