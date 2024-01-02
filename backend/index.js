
require('dotenv').config({path: "../.env"}); 
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path')


//if needing to refernce css called in from html
app.use('/public', express.static(path.join(__dirname, '../public')));

app.use(express.static('../client'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});



app.listen(port, () => {
  console.log(` Microservice listening on port ${port}`);
});