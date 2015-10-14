import { combineReducers } from 'redux';

const rootReducer = (reducers, isFromBackground) => {
  const extension = isFromBackground ? require('./receive') : require('./send');
  return combineReducers({ ...reducers, extension });
};

export default rootReducer;
