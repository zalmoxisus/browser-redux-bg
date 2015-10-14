'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = extension;

var _constants = require('../constants');

function extension(state, action) {
  if (state === undefined) state = { fN: null, status: null };

  if (action.type === _constants.CALL_IN_BG) {
    return _extends({}, state, { fN: action.fN, status: 'sent' });
  }
  return state;
}

module.exports = exports['default'];