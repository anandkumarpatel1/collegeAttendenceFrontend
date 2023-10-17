import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { useDispatch, useSelector } from "react-redux";
import { loadTeacher } from "./Action/Teacher";
import Loader from "./components/Loader";
import Login from "./screens/Login";
import TeacherHome from "./screens/TeacherHome";
import BottomNav from "./screens/BottomNav";

const Stack = createNativeStackNavigator();

const main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTeacher());
  }, [dispatch]);

  const { isAuthenticated, loading } = useSelector(
    (state) => state.teacherLoad
  );
  console.log(isAuthenticated);

  return (
    <>
      <NavigationContainer>
        {loading ? (
          <Loader />
        ) : (
          <Stack.Navigator
            initialRouteName={isAuthenticated ? "TeacherHome" : "Home"}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
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
          </Stack.Navigator>
        )}
        {
          isAuthenticated && <BottomNav />
        }
      </NavigationContainer>
    </>
  );
};

export default main;
