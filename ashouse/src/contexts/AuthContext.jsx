import React, { createContext, useReducer, useContext } from "react";

export const AuthContext = createContext();

// Initial state
const initialState = {
  isLoggedIn: false,
  name: null,
  error: null
};

// Actions
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

// Action creators
export function loginSuccess(name) {
  return { type: LOGIN_SUCCESS, name };
}

export function loginFail(error) {
  return { type: LOGIN_FAIL, error };
}

export function signUpSuccess(name) {
  return { type: SIGNUP_SUCCESS, name };
}

export function signUpFail(error) {
  return { type: SIGNUP_FAIL, error };
}

export function logout() {
  return { type: LOGOUT };
}

// Reducer
export function authReducer(state, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return { isLoggedIn: true, name: action.name, error: null };
    case SIGNUP_FAIL:
      return { isLoggedIn: false, name: null, error: action.error };
    case LOGIN_SUCCESS:
      return { isLoggedIn: true, name: action.name, error: null };
    case LOGIN_FAIL:
      return { isLoggedIn: false, name: null, error: action.error };
    case LOGOUT:
      return { isLoggedIn: false };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [auth, dispatch] = useReducer(authReducer, initialState);

  const authData = { auth, dispatch };

  return <AuthContext.Provider value={authData} {...props} />;
}

function useAuthContext() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuthContext };