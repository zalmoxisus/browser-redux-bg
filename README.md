# Messaging library for Cross-browser extensions and Chrome apps

Sends redux [redux](https://github.com/gaearon/redux) actions (from popup, windows or inject pages) to be called in the background by their function name. Use with [redux-persist](https://github.com/rt2zz/redux-persist) and [browser-redux-sync](https://github.com/zalmoxisus/browser-redux-sync).

### Usage
```js
import { createStore, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { configureSync, sync } from 'browser-redux-sync'
import { configureBg, combineReducers } from 'browser-redux-bg';

import reducers from '../reducers';
import actions from '../actions';

const isFromBackground = false; // should be true for the background script

const finalCreateStore = compose(autoRehydrate())(createStore)
const store = finalCreateStore(combineReducers(reducers, isFromBackground))
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
