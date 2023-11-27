let express = require('express');
let app = express();

const filePath = __dirname + '/public';

app.use(express.static("/public", __dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(filePath)
})


module.exports = app;