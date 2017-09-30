'use strict';

const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//routing
const index = require('./routes/index');
const about = require('./routes/about');
const download = require('./routes/download');
const api = require('./routes/api');
const post = require('./routes/post');
const lesson = require('./routes/lesson');
const logger = require('morgan');
app.disable('x-powered-by');

//create a defualtLayout in ./views/layout/main.handlebars
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var db = mongoose.connection;
db.on("error", (err) => {
  console.error(err);
});

db.once('open', function() {
  // we're connected!
  console.log("connected to db");
});


app.use('/', index)
app.use('/about', about)
app.use('/download', download)
app.use('/api', api)
app.use('/post', post)
app.use('/lesson', lesson)


app.post('/posting' , (req,res) => {

  console.log("Username is "  + req.body.username);
})

app.use(function(req, res){
  console.log("Error 404");
  res.type('text/html');
  res.status(404);
  res.render('404');
});
app.use(function(err, req, res, next){

  res.type('text/html');
  res.status(500);
  res.render('500');
  console.log("Error 500");

});

app.listen(app.get('port'), function(){
  console.log("Express started on http://" + app.get('port') + " Press Ctrl-C to terminate");
});
