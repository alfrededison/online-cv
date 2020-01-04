import {Action} from "redux";

export interface JSONData {
  [key: string]: any
}

export interface LoginData {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  confirmPassword: string
  resume: string
}

export interface AppAction extends Action {
  payload?: JSONData
}

export interface UserState {
  authenticated: boolean
  user?: JSONData
}

export interface UIState {
  errors: JSONData | null | undefined
}
