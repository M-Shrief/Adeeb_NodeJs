const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser')
const api = require('./routes/api');


const app = express()
// Allow cross origin requests
app.use(
  cors({
    origin: 'http://localhost:3000', // restrict calls to those this address
    methods: 'GET', // only allow GET requests
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoDB = "mongodb://localhost:27017";
mongoose.connect(mongoDB, { dbName: 'adeeb_Node', useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected"))
  .catch(err => console.log(err));

app.listen(3000, (req, res) => {
  console.log('Listening');  
})

app.get('/', (req, res) => {
  res.sendFile('./views/home.html', { root: __dirname });
});
app.use('/api', api);

app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
