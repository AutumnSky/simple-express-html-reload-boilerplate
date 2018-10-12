var express = require('express');
var reload = require('reload');
var path = require('path');
var app = express();

var publicDir = path.join(__dirname, 'public');

app.get('/', function (req, res) {
    res.sendFile(path.join(publicDir, 'index.html'))
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

reload(app);
