var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Blink = require('./api/models/blinkModel'),
    bodyParser = require('body-parser');
    

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BlinkDB');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/blinkRoutes');
routes(app);


app.listen(port);


console.log('Blinker RESTful API server started on: ' + port);


return module.exports;