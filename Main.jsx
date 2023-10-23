import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { loadTeacher } from "./Action/Teacher";
import Loader from "./components/Loader";
import Login from "./screens/Login";
import TeacherHome from "./screens/TeacherHome";
import BottomNav from "./screens/BottomNav";
import Profile from "./screens/Profile";
import AddStudent from "./screens/AddStudent";
import EnrolledStudents from "./screens/EnrolledStudents";
import AllStudents from "./screens/AllStudents";
import Search from "./screens/Search";
import TeacherStudentProfile from "./screens/TeacherStudentProfile";

const Stack = createNativeStackNavigator();

const main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTeacher());
  }, [dispatch]);

  const { isAuthenticated, loading } = useSelector((state) => state.teacher);

  return loading ? (
    <Loader />
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? "TeacherHome" : "Login"}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TeacherHome"
          component={TeacherHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddStudent"
          component={AddStudent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EnrolledStudents"
          component={EnrolledStudents}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AllStudents"
          component={AllStudents}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TeacherStudentProfile"
          component={TeacherStudentProfile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      {isAuthenticated ? <BottomNav /> : null}
    </NavigationContainer>
  );
};

export default main;
