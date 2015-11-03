const bgReducer = (isFromBackground) => {
  return isFromBackground ? require('./receive') : require('./send');
};

export default bgReducer;
