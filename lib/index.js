'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _configure = require('./configure');

var _configure2 = _interopRequireDefault(_configure);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _actionsSend = require('./actions/send');

var bgActions = _interopRequireWildcard(_actionsSend);

exports.configureBg = _configure2['default'];
exports.combineReducers = _reducers2['default'];
exports.bgActions = bgActions;