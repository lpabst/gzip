const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var massive = require('massive');
var session = require('express-session');
var config = require('./config.js');
var fs = require('fs');
// var compression = require('compression');

const app = module.exports = express();

// app.use(compression());
app.use(bodyParser.json());
app.use(session({
  secret: config.secret,
    resave: true,
    saveUninitialized: false,
    cookie:{
      maxAge: (1000*60*60*24*14) //this is 14 days
    }
}))

// massive(config.connection)
// .then( db => {
//   app.set('db', db);
// })

// gzip your .js files in the terminal with gzip <filepath> to use this
app.get('*.js', function (req, res, next) {
  let zipPath = __dirname + '/../build' + req.url + '.gz';
  if (fs.existsSync(zipPath)){
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
  }
  next();
});

app.use(express.static(__dirname + './../build'))


var userController = require("./userController.js");

//////////Endpoints for the front end




app.listen(config.port, console.log("you are now connected on " + config.port));
