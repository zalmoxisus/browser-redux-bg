import rehydrateAction from './actions/receive';

export default function configure (store, actions, isFromBackground) {
  return isFromBackground ? { rehydrateAction: rehydrateAction(store, actions) } : {};
};
