import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allStudents } from "../Action/Teacher";
import Loader from "../components/Loader";
import { LinearGradient } from "expo-linear-gradient";
import StudentCard from "../components/StudentCard";

const AllStudents = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(allStudents());
  }, [dispatch]);

  const { student, loading } = useSelector((state) => state.allStudents);




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
              <ScrollView style={{ flex: 1, height: "100%", width: "100%" }}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    borderColor: "rgba(255, 255, 255, 0.8)",
                    borderWidth: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    padding: 10,
                    borderRadius: 20,
                  }}
                >
                  All Students
                </Text>
                {student.map((student, index) => (
                  <StudentCard
                    key={index}
                    name={student?.name}
                    id={student?._id}
                    absent={student?.absent}
                    branch={student?.branch}
                    regNo={student?.regNo}
                    semRollNo={student?.semRollNo}
                    semester={student?.semester}
                    present={student?.present}
                  />
                ))}
              </ScrollView>
            </View>
          </LinearGradient>
        </View>
      )}
    </>
  );
};

export default AllStudents;

const styles = StyleSheet.create({});
