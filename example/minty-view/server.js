
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');



var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(3003, function () {
    console.log('Server listening on port 3003!');
});