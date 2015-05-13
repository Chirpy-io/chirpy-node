/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

// Dependencies
var url = require('url');
var request = require('request');
var assert = require('assert');
var extend = require('deep-extend');
var errors = require('./errors');

// Package version
var VERSION = require('../package.json').version;

var Chirpy = module.exports = function Chirpy(options) {

  if (!options) options = {};

  if (typeof options === 'string') {
    options = {
      token: options
    };
  }

  assert(options.token, 'You need to provide an access token in order to query Chirpy Api');

  this.options = extend({
    token: null,
    host: 'api.chirpy.io',
    version: 'v1',
    port: 80,
    ssl: false,
    request_options: {
      headers: {
        'Accept': '*/*',
        'Connection': 'close',
        'Content-Type': 'application/json',
        'User-Agent': 'node-chirpy/' + VERSION,
        'Authorization': 'Bearer ' + options.token
      }
    }
  }, options);

  this.request = request.defaults(this.options.request_options);

};

Chirpy.prototype._buildUrl = function(path) {

  var pathname = this.options.version + ((path.charAt(0) === '/') ? path : '/' + path);

  var options = {
    protocol: this.options.ssl ? 'https' : 'http',
    hostname: this.options.host,
    port: this.options.port,
    pathname: pathname
  };

  return url.format(options);
};

Chirpy.prototype._request = function(method, path, data, callback) {

  var options = {
    method: method.toLowerCase(),
    url: this._buildUrl(path)
  };

  if (options.method === 'get') {
    options.qs = data;
  }

  if (options.method === 'post') {
    options.body = data;
    options.json = true;
  }

  this.request(options, function(error, response, data) {
    if (error) {
      return callback(error, data, response);
    }

    var isInvalidResponse = (response.statusCode < 200 || response.statusCode > 299);

    if ((data && data.errors) || isInvalidResponse) {
      return callback(new errors.ApiError(response.statusCode, data), data, response);
    }

    callback(null, data, response);
  });

};

Chirpy.prototype.track = function trackEvent(eventName, meta, callback) {

  if (typeof meta === 'function') {
    callback = meta;
    meta = {};
  }

  var payload = extend({
    name: eventName
  }, meta);

  this._request('POST', 'events', payload, callback);
};