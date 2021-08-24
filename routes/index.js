
var express = require('express');
var router = express.Router();
var JsonReader = require('./jsonFileReader');
var cors = require('cors');

var corsOptions = {
  origin: ['http://localhost'],
  optionsSuccessStatus: 200
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/policy-selection', cors(corsOptions), function(req, res, next) {
    console.log("api hit");
    res.send(JsonReader.getFile('policy-selection.json'))
});

router.get('/service-selection', cors(corsOptions), function(req, res, next) {
  console.log("api hit");
  res.send(JsonReader.getFile('service-selection.json'))
})

module.exports = router;
