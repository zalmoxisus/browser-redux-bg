export default function extension(state = { fN: null, status: null }, action) {
  if (action.key === 'extension' && action.payload.fN && action.payload.status === 'sent') {
    console.info('Received action', action);
    return { ...state, fN: action.payload.fN, status: 'received' };
  }
  return state;
}
