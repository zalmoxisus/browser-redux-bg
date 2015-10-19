'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = configureBg;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _actionsReceive = require('./actions/receive');

var _actionsReceive2 = _interopRequireDefault(_actionsReceive);

function configureBg(store, actions, isFromBackground) {
  return isFromBackground ? { rehydrateAction: (0, _actionsReceive2['default'])(store, actions) } : {};
}

;
module.exports = exports['default'];