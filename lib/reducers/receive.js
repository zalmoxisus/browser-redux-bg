'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = extension;

function extension(state, action) {
  if (state === undefined) state = { command: null, status: null };

  if (action.key === 'extension' && action.payload.fN && action.payload.status === 'sent') {
    console.info('Received action', action);
    return _extends({}, state, { fN: action.payload.fN, status: 'received' });
  }
  return state;
}

module.exports = exports['default'];