'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _reduxPersistConstants = require('redux-persist/constants');

var rehydrateAction = function rehydrateAction(store, actions) {
  return function (key, data) {
    if (key === 'extension' && data.status === 'sent') {
      store.dispatch(actions[data.fN]());
    }

    return {
      type: _reduxPersistConstants.REHYDRATE,
      key: key,
      payload: data
    };
  };
};

exports['default'] = rehydrateAction;
module.exports = exports['default'];