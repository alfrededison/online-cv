import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import uiReducer from './reducers/uiReducer';
import resumeReducer from "./reducers/resumeReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  UI: uiReducer,
  resume: resumeReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export type AppState = ReturnType<typeof reducers>;
export default store;
