let express = require('express');
let dotenv = require('dotenv');
let app = express();

dotenv.config();

const filePath = __dirname + '/views';

app.use(logger);
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

function logger(req, res, next){
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
}

module.exports = app;