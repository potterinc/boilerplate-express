let express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
let app = express();

dotenv.config();

// const filePath = __dirname + '/views';

app.use(logger); // Logger middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));

// Static server
// app.get('/', function (req, res) {
//   res.sendFile(filePath)
// });

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
app.get('/:word/echo', function (req, res) {
  res.json({ echo: req.params.word })
})

//Query params
app.route('/name')
  .get(function (req, res) {
    return res.json({ name: `${req.query.first} ${req.query.last}` })
  })
  .post(function (req, res) {
    res.json({name:`${req.body.first} ${req.body.last}`});
  })

// Middleware function
function logger(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
}

module.exports = app;