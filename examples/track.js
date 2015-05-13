/*
 * @fileOverview
 * @author: Mike Grabowski (@grabbou)
 */

'use strict';

var Chirpy = require('../lib');

// Paste here your production token
var myProject = new Chirpy('token');

myProject.track('hey!', function(err) {
  console.log(err);
});