import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

//teacher login reques
export const teacherLoginReducer = createReducer(initialState, {
  LoginRequest: (state, action) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.teacher = action.payload;
    state.isAuthenticated = true;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  clearError: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});

//load teacher
export const teacherLoad = createReducer(initialState, {
  LoadRequest: (state) => {
    state.loading = true;
  },

  LoadSuccess: (state, action) => {
    state.loading = false;
    state.teacher = action.payload;
    state.isAuthenticated = true;
  },

  LoadFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },

  clearMessage: (state) => {
    state.message = null;
  },
});

//logout teacher
export const teacherLogout = createReducer(initialState, {
  LogoutRequest: (state) => {
    state.loading = true;
  },
  LogoutSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
  },
  LogoutFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },

  clearMessage: (state) => {
    state.message = null;
  },
});
