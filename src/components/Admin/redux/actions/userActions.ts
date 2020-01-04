import axios from 'axios';
import {trackPromise} from "react-promise-tracker";
import {Dispatch} from "redux";
import {History} from 'history';
import {LoginData, RegisterData} from "../../interface";
import {ActionTypes} from "../types";
import {loadResume} from "./resumeAction";

export const loginUser = (loginData: LoginData, history: History) => (dispatch: Dispatch<any>) => {
  trackPromise(
    axios.post('/login', loginData)
      .then(res => {
        setAuthorizationHeader(res.data.token);
        dispatch(getUserData());
        dispatch({type: ActionTypes.CLEAR_ERRORS});
        history.push('/manage');
      })
      .catch(err => {
        dispatch({
          type: ActionTypes.SET_ERRORS,
          payload: err.response.data
        });
      })
  ).then();
};

export const registerUser = (registerData: RegisterData, history: History) => (dispatch: Dispatch<any>) => {
  trackPromise(
    axios.post('/register', registerData)
      .then(res => {
        setAuthorizationHeader(res.data.token);
        dispatch(getUserData());
        dispatch({type: ActionTypes.CLEAR_ERRORS});
        history.push('/manage');
      })
      .catch(err => {
        dispatch({
          type: ActionTypes.SET_ERRORS,
          payload: err.response.data
        });
      })
  ).then();
};

export const logoutUser = () => (dispatch: Dispatch) => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({type: ActionTypes.SET_UNAUTHENTICATED});
};

export const getUserData = () => (dispatch: Dispatch<any>) => {
  trackPromise(
    axios.get('/user')
      .then((res) => {
        dispatch({
          type: ActionTypes.SET_USER,
          payload: res.data
        });
        dispatch(loadResume(res.data.resume));
      })
      .catch((err) => console.log(err))
  ).then();
};

const setAuthorizationHeader = (token: string) => {
  localStorage.setItem('token', token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
