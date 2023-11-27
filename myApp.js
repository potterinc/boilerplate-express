let express = require('express');
let dotenv = require('dotenv');
let app = express();

dotenv.config();

const filePath = __dirname + '/views';

app.use('/public', express.static(__dirname + '/public'));

// app.get('/' ,function(req, res){
//   res.sendFile(filePath)
// })

app.get('/json', function (req, res) {
  if (process.env.MESSAGE_STYLE == 'uppercase')
    res.json({ message: ('Hello json').toUpperCase() });
  else
    res.json({message: 'Hello json'})
})

module.exports = app;