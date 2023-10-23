import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { useNavigation } from "@react-navigation/native";
import { allStudents, loadTeacher } from "../Action/Teacher";

const TeacherHome = () => {
  const naviagation = useNavigation();
  const dispatch = useDispatch();
  const { teacher, loading, error } = useSelector((state) => state.teacher);

  const EnrolledHandler = async () => {
    naviagation.navigate("EnrolledStudents");
  };

  const allStudentsHandler = async () => {
    dispatch(allStudents());
    naviagation.navigate("AllStudents");
  };

  useEffect(() => {
    if (error) {
      dispatch({ type: "clearError" });
    }
  }, [alert, error]);

  const date = new Date().toString();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={{ flex: 1, alignItems: "center" }}
          >
            <View
              style={{
                borderColor: "rgba(255, 255, 255, 0.8)",
                borderWidth: 1,
                marginTop: 50,
                flex: 1,
                width: "100%",
                borderRadius: 25,
                padding: 20,
              }}
            >
              <View style={styles.dataCont}>
                <Text style={styles.args}>
                  Name: <Text style={styles.data}>{teacher?.name}</Text>
                </Text>
              </View>
              <View style={styles.dataCont}>
                <Text style={styles.args}>
                  Subject: <Text style={styles.data}>{teacher?.subject}</Text>
                </Text>
              </View>

              <View style={styles.dataCont}>
                <Text style={styles.args}>
                  Date: <Text style={styles.data}>{date}</Text>
                </Text>
              </View>

              <TouchableOpacity
                style={styles.dataCont}
                onPress={EnrolledHandler}
              >
                <Text style={styles.args}>Total Enrolled Students</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => naviagation.navigate("AddStudent")}
                >
                  <Text style={styles.args}>Add new Student</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={allStudentsHandler}
                >
                  <Text style={styles.args}>Enroll New Student</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  args: {
    fontSize: 20,
  },
  data: {
    color: "blue",
  },
  dataCont: {
    backgroundColor: "rgba(225, 255, 255, 0.2)",
    padding: 10,
    borderColor: "rgba(225, 255, 255, 0.8)",
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 10,
  },
  btn: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(225, 255, 255, 0.8)",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    marginTop: 10,
  },
});

export default TeacherHome;
