let express = require('express');
let app = express();

const filePath = __dirname + '/views';

app.use('/public', express.static(__dirname +'/public'));

app.get('/' ,function(req, res){
  res.sendFile(filePath)
})


module.exports = app;