import {AppAction, UIState} from "../../interface";
import {ActionTypes} from "../types";

const initialState: UIState = {
  errors: null
};

export default function (state = initialState, action: AppAction): UIState {
  switch (action.type) {
    case ActionTypes.SET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    case ActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        errors: null
      };
    default:
      return state;
  }
}
