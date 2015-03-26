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
  fs.readFile('archives/sites.txt', function (err, data) {
    if (err) {
      // console.log("data.toString: ", data.toString('utf-8'));
      console.log("ERR: ", err);
      console.log("CANT READ FILE");
    } else {
      console.log("READLIST");
      console.log('data.toString: ', data.toString('utf-8'))
      callback(data.toString('utf-8'));
    }
  })
  // return list of urls, but in what format? object, array, string (look in spec)
};

exports.isUrlInList = function(url, callback){
  // check in txt file for url 
  //if in list return true, else false

  this.readListOfUrls(function(list) {
    var found = false;
    console.log("LIST passed in: ", list);
    console.log("URL passed in: ", url);
    var splitList = list.split("\n");
    for (var i = 0 ; i < splitList.length ; i++){
      console.log("splitlist[i]: ", splitList[i]);
      if (url === splitList[i]){
        console.log("TRUE");
        callback(true);
        found = true;
        break;
      }
    }
    if (!found) {
      console.log("FALSE");
      callback(false);
    }
  });

};

exports.addUrlToList = function(url){
  this.isUrlInList(url, function (found) {
    if (found) {
      //do nothing for now
    } else {
      console.log("NOT FOUND SO WRITING");
      fs.appendFile('archives/sites.txt', "\n" + url.toString('utf-8'), function (err) {
        if (err) {
          console.log("CANT WRITE TO FILE");
        }
      });
    }
  });
};

exports.isUrlArchived = function(url){
  // check archive folder for site
  // if found, return true, else false
};

exports.downloadUrls = function(list){
  // take all the urls in .txt file, grab the sites, and put them into archive directory
  // BEAST
};
