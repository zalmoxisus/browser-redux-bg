# Messaging library for cross-browser extensions and Chrome apps

Sends [redux](https://github.com/gaearon/redux) actions (from popup, windows or inject pages) to be called in the background by their function name. Use with [redux-persist](https://github.com/rt2zz/redux-persist) and [browser-redux-sync](https://github.com/zalmoxisus/browser-redux-sync).

### Usage
```js
import { createStore, compose, combineReducers } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { configureSync, sync } from 'browser-redux-sync'
import { configureBg, bgReducers } from 'browser-redux-bg';

import reducers from '../reducers';
import actions from '../actions';

const isFromBackground = false; // should be true for the background script

const finalCreateStore = compose(autoRehydrate())(createStore)
const extension = bgReducer(isFromBackground)
const rootReducer = combineReducers({ ...reducers, extension })
const store = finalCreateStore(rootReducer)
const persistor = persistStore(store, configureSync(configureBg(store, actions, isFromBackground)))
sync(persistor)
```

#### To send actions to be called in the background script:

In the container: 
```js
import { connect } from 'react-redux';
import someComponent from '../components/someComponent';
import * as someActions from '../actions/someActions';
import { bgActions } from 'browser-redux-bg';

function mapStateToProps(state) {
  return {
    state: state
  };
}

const mapDispatchToProps = { ...someActions, ...bgActions};

export default connect(mapStateToProps, mapDispatchToProps)(someComponent);
```

In the component:
```js
import React, { Component } from 'react';

class someComponent extends Component {
  render() {
    const { ...someActions, bg } = this.props;
    return (
      <p>
        <button onClick={() => bg('actionFunctionName')}>Call an actionFunctionName in the background script</button>
      </p>
    );
  }
}

export default someComponent;
```

See [browser-redux](https://github.com/zalmoxisus/browser-redux) for a boilerplate and more details.
