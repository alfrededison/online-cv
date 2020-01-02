import {CLEAR_ERRORS, SET_ERRORS} from '../types';
import {AppAction, UIState} from "../../interface";

const initialState: UIState = {
  errors: null
};

export default function (state = initialState, action: AppAction): UIState {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null
      };
    default:
      return state;
  }
}
