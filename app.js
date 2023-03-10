const express = require('express');
const app = express();
const cors = require('cors');

const GPSController = require('./controllers/GPSController')

app.enable('trust proxy');
app.use(cors());
app.options('*', cors());

app.get('/data', GPSController.getNewData);
app.get('/deleteAll', GPSController.deleteAllData);

app.use('/', () => {
    console.log('hello')
})

module.exports = app;