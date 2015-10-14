'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.bg = bg;

var _constants = require('../constants');

/**
 * Send an action to be called in background script by its function name.
 * Can be used from window, popup or content script.
 *
 * @param {String} actionFN Action function name to be called in background after rehydratation
 * @returns {Object} Returns action.
 * @example
 *
 * bg('increment')
 */

function bg(actionFN) {
  return { type: _constants.CALL_IN_BG, fN: actionFN };
}