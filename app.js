const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const helmet = require("helmet");
const getRawBody = require('raw-body');
const winston = require('winston');
const  hpp = require('hpp');
const mongoose = require("mongoose");
const api = require('./routes/api');



const app = express()
app.use(helmet());
// Allow cross origin requests
// app.use(
//   cors({
//     origin: 'http://localhost:3000', // restrict calls to those this address
//     methods: 'GET', // only allow GET requests
//   })
// );

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

// limit request size
app.use(function (req, res, next) {
  getRawBody(req, {
    length: req.headers['content-length'],
    limit: '1mb',
  }, function (err, string) {
    if (err) return next(err)
    req.text = string
    next()
  })
})

app.use(hpp());
// // Add a second HPP middleware to apply the whitelist only to this route.
// app.use('/search', hpp({ whitelist: [ 'filter' ] }));


app.listen(3000, (req, res) => {
  console.log('Listening');  
})

const mongoDB = "mongodb://localhost:27017";
mongoose.connect(mongoDB, {dbName: 'adeeb_Node', useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.sendFile('./views/home.html', { root: __dirname });
});
app.use('/api', api);

app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
