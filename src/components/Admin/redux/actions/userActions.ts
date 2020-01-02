import {CLEAR_ERRORS, SET_AUTHENTICATED, SET_ERRORS, SET_UNAUTHENTICATED,} from '../types';
import axios from 'axios';
import {trackPromise} from "react-promise-tracker";
import {LoginData} from "../../interface";
import {Dispatch} from "redux";
import {History} from 'history';

export const loginUser = (loginData: LoginData, history: History) => (dispatch: Dispatch) => {
  trackPromise(
    axios.post('/login', loginData)
      .then(res => {
        setAuthorizationHeader(res.data.token);
        dispatch({type: SET_AUTHENTICATED});
        dispatch({type: CLEAR_ERRORS});
        history.push('/manage');
      })
      .catch(err => {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data
        });
      })
  ).then();
};

export const logoutUser = () => (dispatch: Dispatch) => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({type: SET_UNAUTHENTICATED});
};

const setAuthorizationHeader = (token: string) => {
  localStorage.setItem('token', token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
