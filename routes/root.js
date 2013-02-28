var express = require('express'),
    app = EXPRESS_APP,
    hoganEngine = require('hogan-engine');

// Jeans
app.get('/', function (req, res, next) {
  var context = {
    page: {
      title: "Coffee & Code"
    }
  };

  res.render('home', context);
});