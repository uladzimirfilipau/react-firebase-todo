import { HIDE_CONFIRM, SHOW_CONFIRM } from '../types';

export const initialState = {
  show: false,
  text: '',
};

export const confirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CONFIRM:
      return {
        show: true,
        text: action.payload.text,
      };
    case HIDE_CONFIRM:
      return initialState;
    default:
      return initialState;
  }
};
