import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { loginTeacher } from "../Action/Teacher";

const Login = () => {
  const [hide, setHide] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.teacher);

  const loginHandler = (e) => {
    dispatch(loginTeacher(email, password));
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              width: "80%",
              borderWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.8)",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
            }}
          >
            <Text style={{ fontSize: 25, marginTop: 10, color: "white" }}>
              Teacher's Login
            </Text>
            <TextInput
              label="E-mail"
              placeholder="E-mail"
              style={styles.input}
              onChangeText={(newText) => setEmail(newText)}
              defaultValue={email}
            />
            <TextInput
              label="Password"
              secureTextEntry={hide}
              right={
                <TextInput.Icon icon="eye" onPress={() => setHide(!hide)} />
              }
              style={styles.input}
              defaultValue={password}
              onChangeText={(e) => setPassword(e)}
            />
            <TouchableOpacity
              style={{
                width: "86%",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                justifyContent: "center",
                alignItems: "center",
                padding: 13,
                borderRadius: 5,
                margin: 10,
              }}
              onPress={loginHandler}
            >
              <Text style={{ fontSize: 15, fontWeight: 600 }}>Login</Text>
            </TouchableOpacity>
            <Text style={{ color: "white", fontSize: 15, margin: 10 }}>
              Have an account?{" "}
              <Text style={{ color: "red", textDecorationLine: "underline" }}>
                create account
              </Text>
            </Text>
            <Text style={{ color: "white", fontSize: 15, margin: 10 }}>
              Student Login?{" "}
              <Text style={{ color: "red", textDecorationLine: "underline" }}>
                Login
              </Text>
            </Text>
          </View>
        </LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "88%",
    margin: 10,
  },
});

export default Login;
