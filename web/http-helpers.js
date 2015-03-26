var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

var getSite = function(req, res) {
  // verify url path
  // serve http-helpers.serveAssets
};

var saveSite = function(req, res) {

};

exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)

// accesses the file system. is what's getting passed in exist?
  fs.readFile(asset, function(err) { // checks list queue file
    if (err) {
      fs.readFile(....., function(err) { // checks archive file
        if (err) {

        }
      })
    }
  })
};

exports.sendResponse = function(response, data, statusCode) {

};

exports.sendRedirect = function(response, data, statusCode) {

};


// As you progress, keep thinking about what helper functions you can put here!
