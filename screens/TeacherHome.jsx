import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

const TeacherHome = () => {
  const { teacher, loading } = useSelector((state) => state.teacherLoad);

  const date = new Date().toString();
  return (
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
          <Text style={styles.args}>
            Name: <Text style={styles.data}>{teacher?.name}</Text>
          </Text>
          <Text style={styles.args}>
            Subject: <Text style={styles.data}>{teacher?.subject}</Text>
          </Text>
          <Text style={styles.args}>
            Date: <Text style={styles.data}>{date}</Text>
          </Text>
          <Text style={styles.args}>
            Total Enrolled Students: <Text style={styles.data}>{teacher?.students.length}</Text>
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
    args: {
        fontSize: 20
    },
    data: {
        color: 'blue'
    }
})

export default TeacherHome;
