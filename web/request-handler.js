var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var httpHelpers = require('./http-helpers.js');

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

exports.handleRequest = function (req, res) {

  if (req.method === 'OPTIONS'){
    res.writeHead(202, headers);
    res.end();
  }

  if (req.method === 'POST') {
    var requestBody = '';
    req.on('data', function (data) {
      requestBody += data;
      console.log(requestBody);
    //  archive.readListOfUrls();
    //  saveSite(requestBody);
    })
    req.on('end', function(){
      archive.isUrlInList(JSON.parse(requestBody));
    })
    res.writeHead(202, headers);
    res.end();
    // res.end(archive.paths.list);
  }

};
