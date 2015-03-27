var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var httpHelpers = require('./http-helpers.js');
var url = require('url');

var headers = httpHelpers.headers;

// var saveSite = function(url) { 
// // wait for POST data to be collected?
// // is it in sites.txt

//   // if yes 
//   archive.isUrlinList(url, function(isInList) {
   
//     if (isInList) { // if yes
//       archive.isUrlArchived(url, function(isArchived){
//         if (isArchived) {// if yes 
//           // display archived page
//         } else {
//           // already in queue, alert wait
//         }  
//       })   
//     } else { // if not in list
//       // append to sites.txt
//       // cron job will do its thing
//     }
//   });
// }

var actions = {
  'GET': function (req, res) {
    var urlobj = url.parse(req.url, true);
    var urlPath = urlobj.pathname === '/' ? '/index.html' : urlobj.pathname;
    httpHelpers.serveAssets(res, urlPath);
  },
  
  'POST': function(req, res) {
    var requestBody = '';  //MAKE OBJECT
    req.on('data', function (data) {
      requestBody += data;  //SET URL PROP OF OBJECT
      console.log(requestBody);
    //  archive.readListOfUrls();
    //  saveSite(requestBody);
    });
    req.on('end', function(){
      archive.addUrlToList(JSON.parse(requestBody));
    });
    res.writeHead(202, headers);
    res.end();
    // res.end(archive.paths.list);
  },

  'OPTIONS': function (req, res) {
    res.writeHead(202, headers);
    res.end();
  }  
};

exports.handleRequest = function (req, res) {
  var handler = actions[req.method];
  if (handler) {
    handler(req, res);
  } else {
    httpHelpers.send404(res);
  }
}; 

/*
exports.handleRequest = function (req, res) {
  

  if (req.method === 'GET'){

    var urlobj = url.parse(req.url, true);
    console.log("URLPATH: ", urlobj.path);
    httpHelpers.serveAssets(res, urlobj.path, function () {

    })
    if (urlobj.path === "/") {
      console.log("TRUE don't escape");
    }
    res.writeHead(200, headers);
    res.end("/<input");
  }

  if (req.method === 'OPTIONS'){
    res.writeHead(202, headers);
    res.end();
  }

  if (req.method === 'POST') {
    var requestBody = '';  //MAKE OBJECT
    req.on('data', function (data) {
      requestBody += data;  //SET URL PROP OF OBJECT
      console.log(requestBody);
    //  archive.readListOfUrls();
    //  saveSite(requestBody);
    })
    req.on('end', function(){
      archive.addUrlToList(JSON.parse(requestBody));
    })
    res.writeHead(202, headers);
    res.end();
    // res.end(archive.paths.list);
  }

};
*/
