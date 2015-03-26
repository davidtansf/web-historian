var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback){
//  console.log("readListOfUrls gets called");
  fs.readFile('../archives/sites.txt', function (err, data) {
    if (err) {
      console.log("CANT READ FILE");
    }
    console.log("READLIST");
    callback(data.toString('utf-8'));
  })
  // return list of urls, but in what format? object, array, string (look in spec)
};

exports.isUrlInList = function(url){
  // check in txt file for url 
  //if in list return true, else false

  this.readListOfUrls(function(list) {
    console.log("LIST passed in: ", list);
    console.log("URL passed in: ", url);
    var splitList = list.split("\n");
    console.log("splitList.length: ", splitList.length)
    for (var i = 0 ; i < splitList.length ; i++){
      console.log("splitlist[i]: ", splitList[i]);
      if (url === splitList[i]){
        console.log("TRUE");
        return true;
      }
    }
    console.log("FALSE");
    return false;
  });

};

exports.addUrlToList = function(url){
  // is url in list? if so, send null or error
  // if not, add to list (queue)

};

exports.isUrlArchived = function(url){
  // check archive folder for site
  // if found, return true, else false
};

exports.downloadUrls = function(list){
  // take all the urls in .txt file, grab the sites, and put them into archive directory
  // BEAST
};
