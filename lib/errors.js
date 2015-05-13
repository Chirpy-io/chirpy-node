/*
 * @fileOverview
 * @author: Mike Grabowski (@grabbou)
 */

'use strict';

var util = require('util');

var ApiError = exports.ApiError = function ChirpyError(statusCode, errors) {
  Error.call(this);
  this.message = 'Status code: ' + statusCode;
  this.errors = errors;
  this.statusCode = statusCode;
};

util.inherits(ApiError, Error);