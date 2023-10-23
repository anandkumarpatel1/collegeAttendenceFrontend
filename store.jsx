import { configureStore } from "@reduxjs/toolkit";
import {
  addStudentReducer,
  allStudentsReducer,
  enrollNewStudentReducer,
  enrolledStudentsReducer,
  profileStudentsReducer,
  searchStudentsReducer,
  teacherLoginReducer,
} from "./Reducer/Teacher";

const Store = configureStore({
  reducer: {
    teacher: teacherLoginReducer,
    student: addStudentReducer,
    enrolledStudents: enrolledStudentsReducer,
    allStudents: allStudentsReducer,
    searchStudents: searchStudentsReducer,
    studentProfile: profileStudentsReducer,
    enrollNewStudent: enrollNewStudentReducer
  },
});

export default Store;
