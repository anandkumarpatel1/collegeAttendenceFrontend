import { configureStore } from "@reduxjs/toolkit";
import { teacherLoad, teacherLoginReducer, teacherLogout } from "./Reducer/Teacher";

const Store = configureStore({
  reducer: {
    teacherLogin: teacherLoginReducer,
    teacherLoad: teacherLoad,
    teacherLogout: teacherLogout
  },
});

export default Store;
