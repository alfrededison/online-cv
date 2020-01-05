import axios from 'axios';
import {trackPromise} from "react-promise-tracker";
import {Dispatch} from "redux";
import {ResumeData} from "../../../../interface";
import {ActionTypes} from "../types";

export const loadResume = (resumeId: string) => (dispatch: Dispatch) => {
  trackPromise(
    axios.get(`/resume/${resumeId}`)
      .then(res => {
        dispatch({type: ActionTypes.CLEAR_ERRORS});
        dispatch({
          type: ActionTypes.LOAD_RESUME,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ActionTypes.SET_ERRORS,
          payload: err.response.data
        });
      })
  ).then();
};

export const editResume = (resumeInfo: Partial<ResumeData>) => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.EDIT_RESUME,
    payload: resumeInfo
  })
};

export const updateResume = (resumeId: string, resumeData: ResumeData) => (dispatch: Dispatch<any>) => {
  trackPromise(
    axios.post(`/resume/${resumeId}`, resumeData)
      .then(res => {
        dispatch({type: ActionTypes.CLEAR_ERRORS});
      })
      .catch(err => {
        dispatch({
          type: ActionTypes.SET_ERRORS,
          payload: err.response.data
        });
      })
  ).then();
};