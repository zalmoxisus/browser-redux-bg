import rehydrateAction from './actions/receive';

export default function configureBg (store, actions, isFromBackground) {
  return isFromBackground ? { rehydrateAction: rehydrateAction(store, actions) } : {};
};
