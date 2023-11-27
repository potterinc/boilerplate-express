let express = require('express');
let app = express();

console.log('Hello World');

const filePath = __dirname + '/views/';

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.sendFile(filePath);
});


































module.exports = app;
