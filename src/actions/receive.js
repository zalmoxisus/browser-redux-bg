import { REHYDRATE } from 'redux-persist/constants';

const rehydrateAction = (store, actions) => {
  return (key, data) => {
    if (key === 'extension' && data.status === 'sent') {
      store.dispatch(actions[data.fN]());
    }

    return {
      type: REHYDRATE,
      key: key,
      payload: data
    };
  };
};

export default rehydrateAction;