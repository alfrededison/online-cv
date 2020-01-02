import {SET_AUTHENTICATED, SET_UNAUTHENTICATED} from '../types';
import {AppAction, UserState} from "../../interface";

const initialState: UserState = {
  authenticated: false,
};

export default function (state = initialState, action: AppAction): UserState {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    default:
      return state;
  }
}
