let express = require('express');
let app = express();

const filePath = __dirname + '/views';

app.use('/public', express.static(__dirname +'/public'));

// app.get('/' ,function(req, res){
//   res.sendFile(filePath)
// })

app.get('/json', function (req, res){
  res.json({message: 'Hello json'});
})

module.exports = app;