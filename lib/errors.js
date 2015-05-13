/*
 * @fileOverview
 * @author: Mike Grabowski (@grabbou)
 */

'use strict';

var util = require('util');

var ApiError = exports.ApiError = function ChirpyError(statusCode, data) {
  Error.call(this);
  this.message = 'Status code: ' + statusCode;
  this.errors = data && data.errors ? data.errors : {};
  this.statusCode = statusCode;
};

util.inherits(ApiError, Error);