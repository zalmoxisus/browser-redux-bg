import { CALL_IN_BG } from '../constants';

export default function extension(state = { fN: null, status: null }, action) {
  if (action.type === CALL_IN_BG) {
    return { ...state, fN: action.fN, status: 'sent' };
  }
  return state;
}
