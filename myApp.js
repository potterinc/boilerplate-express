let express = require('express');
let dotenv = require('dotenv');
let app = express();

dotenv.config();

const filePath = __dirname + '/views';

app.use(logger); // Logger middleware
app.use('/public', express.static(__dirname + '/public'));


// Static server
app.get('/' ,function(req, res){
  res.sendFile(filePath)
});

// JSON server
app.get('/json', function (req, res) {
  if (process.env.MESSAGE_STYLE == 'uppercase')
    res.json({ message: ('Hello json').toUpperCase() });
  else
    res.json({ message: 'Hello json' })
});

// Time server
app.get('/now', function (req, res, next) {
  req.time = new Date().toString();
  next();
}, function (req, res) {
  res.json({ time: req.time })
});

// Echo server
app.get('/:word/echo', function(req, res){
  res.json({echo: req.params.word})
})


// Middleware function
function logger(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
}

module.exports = app;