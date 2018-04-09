'use strict';

exports.listAll = function(req, res, location, then) {
  var fs = require('fs');
  console.log(location)
  var files = fs.readdirSync(location);
  console.log(files);
  then(files);
};
  