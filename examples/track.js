/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var Chirpy = require('../lib');

// Paste here your production token
var myProject = new Chirpy('token');

myProject.track('hey!', function(err) {
  console.log(err);
});