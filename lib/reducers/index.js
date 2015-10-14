'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

var rootReducer = function rootReducer(reducers, isFromBackground) {
  var extension = isFromBackground ? require('./receive') : require('./send');
  return (0, _redux.combineReducers)(_extends({}, reducers, { extension: extension }));
};

exports['default'] = rootReducer;
module.exports = exports['default'];