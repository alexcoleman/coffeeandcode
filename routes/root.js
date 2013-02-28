var express = require('express'),
    app = EXPRESS_APP,
    hoganEngine = require('hogan-engine');

// Jeans
app.get('/', function (req, res, next) {
  var context = {
    page: {
      title: "Coffee and code"
    }
  };

  res.render('home', context);
});