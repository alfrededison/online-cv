import {AppAction, UserState} from "../../interface";
import {ActionTypes} from "../types";

const initialState: UserState = {
  authenticated: false,
  user: {},
};

export default function (state = initialState, action: AppAction): UserState {
  switch (action.type) {
    case ActionTypes.SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case ActionTypes.SET_UNAUTHENTICATED:
      return initialState;
    case ActionTypes.SET_USER:
      return {
        authenticated: true,
        user: action.payload
      };
    default:
      return state;
  }
}
