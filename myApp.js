let express = require('express');
let app = express();

const filePath = __dirname + '/views';

app.use(express.static(__dirname + '/public'));

app.get('/', app.use(express.static("/public", __dirname + "/public")), function(req, res){
  res.sendFile(filePath)
})


module.exports = app;