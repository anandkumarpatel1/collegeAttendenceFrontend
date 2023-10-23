import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

const Profile = () => {
  const { teacher, loading } = useSelector((state) => state.teacher);

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
                <Text style={{textTransform: 'uppercase', fontSize: 20, fontWeight: '700', color: 'white'}}>{teacher?.name}'s profiles</Text>
              </View>

              <View style={styles.dataCont}>
                <Text style={styles.args}>
                  Name: <Text style={styles.data}>{teacher?.name}</Text>
                </Text>
              </View>
              <View style={styles.dataCont}>
                <Text style={styles.args}>
                  Email: <Text style={styles.data}>{teacher?.email}</Text>
                </Text>
              </View>
              <View style={styles.dataCont}>
                <Text style={styles.args}>
                  Subject: <Text style={styles.data}>{teacher?.subject}</Text>
                </Text>
              </View>
              <View style={styles.dataCont}>
                <Text style={styles.args}>
                  ID: <Text style={styles.data}>{teacher?._id}</Text>
                </Text>
              </View>
              <View style={styles.dataCont}>
                <Text style={styles.args}>
                  Total Enrolled Students:
                  <Text style={styles.data}>{teacher?.students.length}</Text>
                </Text>
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
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
});

export default Profile;
