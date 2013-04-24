var express = require('express'),
    app = EXPRESS_APP,
    hoganEngine = require('hogan-engine'),
    Instagram = require('instagram-node-lib');

app.get('/', function (req, res, next) {

  var view = {
    page: {
      title: "Coffee & Code",
      description: "Las Vegas coffee meetup Wednesday's at 9:30."
    }
  };

  // make the api call to instagram, then render the page
  getPhotosByTag('cclv', function (err, thePhotos) {
    if (err) return next(err);

    view.instagramPhotos = thePhotos.slice(0,16);
    res.render('home', view);
  });
  
});

// need to abstract this out to a model
function getPhotosByTag (tag, callback) {

  Instagram.tags.recent({
    name: tag,
    complete: function (data, pagination) {

      // grab the raw data and append it to the object specifed as a param
      var json = JSON.stringify(data);
      var instagramPhotos = JSON.parse(json);

      // run the callback
      callback(null, instagramPhotos);
    },
    error: function (error) {
      callback(error);
    }
  });

}