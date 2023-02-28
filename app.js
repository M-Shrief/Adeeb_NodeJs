const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const winston = require('winston');
const hpp = require('hpp');
const mongoose = require('mongoose');
const api = require('./routes/api');
require('dotenv').config();

const app = express();
app.use(express.static('./views'));
app.use(helmet());

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET',
  })
);

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
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

app.use(hpp());

app.listen(3000, (req, res) => {
  console.log('Listening');
});

mongoose
  .connect(process.env.MONGO_DB, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});
app.use('/api', api);

app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
