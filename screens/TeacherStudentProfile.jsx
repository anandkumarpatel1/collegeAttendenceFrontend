import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allStudents, enrollNewStudent, profileStudent } from "../Action/Teacher";
import { LinearGradient } from "expo-linear-gradient";
import Loader from "../components/Loader";
import { useNavigation } from "@react-navigation/native";

const TeacherStudentProfile = (props) => {
  const [enroll, setEnroll] = useState(false);
  const dispatch = useDispatch();
  const { student, loading } = useSelector((state) => state.studentProfile);

  const { teacher } = useSelector((state) => state.teacher);

  const navigation = useNavigation()
  useEffect(() => {
    setEnroll(false)

    student?.teacher?.forEach((item) => {
      if (item === teacher._id) {
        setEnroll(true)
      }
    });
  });
  useEffect(() => {
    dispatch(profileStudent(props.route.params.id));
  }, [dispatch]);

  const enrollStudentHandler = () => {
    dispatch(enrollNewStudent(props.route.params.id));

    navigation.navigate('AllStudents')

  };
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
                <Text
                  style={{
                    textTransform: "uppercase",
                    fontSize: 20,
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  {student?.name}'s Profile
                </Text>
              </View>
              <View style={styles.dataCont}>
                <Text style={styles.args}>
                  Branch: <Text style={styles.data}>{student?.branch}</Text>
                </Text>
              </View>
              <View style={styles.dataCont}>
                <Text style={styles.args}>
                  Reg No: <Text style={styles.data}>{student?.regNo}</Text>
                </Text>
              </View>
              <View style={styles.dataCont}>
                <Text style={styles.args}>
                  Sem Rollno:
                  <Text style={styles.data}>{student?.semRollNo}</Text>
                </Text>
              </View>
              <View style={styles.dataCont}>
                <Text style={styles.args}>
                  Semester: <Text style={styles.data}>{student?.semester}</Text>
                </Text>
              </View>
              <View style={styles.dataCont}>
                <Text style={styles.args}>
                  Present:
                  <Text style={styles.data}>{student?.present.length}</Text>
                </Text>
              </View>
              <View style={styles.dataCont}>
                <Text style={styles.args}>
                  Absent:
                  <Text style={styles.data}>{student?.absent.length}</Text>
                </Text>
              </View>
              <View style={styles.dataCont}>
                <Text style={styles.args}>
                  ID:
                  <Text style={styles.data}>{student?._id}</Text>
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.enrollBtn}
                  onPress={enrollStudentHandler}
                  disabled={enroll}
                >
                  <Text style={styles.args}>
                    {enroll ? "Student is Enrolled" : "Enroll new student"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      )}
    </>
  );
};

export default TeacherStudentProfile;

const styles = StyleSheet.create({
  dataCont: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  enrollBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
  },
  args: {
    fontSize: 20,
  },
  data: {
    color: "blue",
  },
});
