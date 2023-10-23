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

export const addStudentReducer = createReducer(initialState, {
  addStudentRequest: (state) => {
    state.loading = true;
  },
  EnrolledStudentsRequest: (state) => {
    state.loading = true;
  },
  addStudentSuccess: (state, action) => {
    state.loading = false;
    state.student = action.payload;
  },
  EnrolledStudentsSuccess: (state, action) => {
    state.loading = false;
    state.student = action.payload;
  },
  addStudentFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  EnrolledStudentsFailure: (state, action) => {
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

export const enrolledStudentsReducer = createReducer(initialState, {
  EnrolledStudentsRequest: (state) => {
    state.loading = true;
  },
  EnrolledStudentsSuccess: (state, action) => {
    state.loading = false;
    state.student = action.payload;
  },
  EnrolledStudentsFailure: (state, action) => {
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

export const allStudentsReducer = createReducer(initialState, {
  AllStudentsRequest: (state) => {
    state.loading = true;
  },
  AllStudentsSuccess: (state, action) => {
    state.loading = false;
    state.student = action.payload;
  },
  AllStudentsFailure: (state, action) => {
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

export const searchStudentsReducer = createReducer(initialState, {
  SearchStudentRequest: (state) => {
    state.loading = true;
  },
  SearchStudentSuccess: (state, action) => {
    state.loading = false;
    state.student = action.payload;
  },
  SearchStudentFailure: (state, action) => {
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

export const profileStudentsReducer = createReducer(initialState, {
  ProfileStudentRequest: (state) => {
    state.loading = true;
  },
  ProfileStudentSuccess: (state, action) => {
    state.loading = false;
    state.student = action.payload;
  },
  ProfileStudentFailure: (state, action) => {
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

export const enrollNewStudentReducer = createReducer(initialState, {
  EnrollNewRequest: (state) => {
    state.loading = true;
  },
  EnrollNewSuccess: (state, action) => {
    state.loading = false;
    state.action = action.payload;
  },
  EnrollNewFailure: (state, action) => {
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
