import { StyleSheet, TextInput, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { searchStudents } from "../Action/Teacher";
import Loader from "../components/Loader";
import StudentCard from "../components/StudentCard";

const Search = () => {
  const [key, setKey] = useState("");

  const dispatch = useDispatch();

  const { loading, student } = useSelector((state) => state.searchStudents);

  const searchHandler = () => {
    dispatch(searchStudents(key));
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
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: 1,
                  borderColor: "rgba(255, 255, 255, 0.8)",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: 20,
                  width: "100%",
                }}
              >
                <TextInput
                  placeholder="Search..."
                  style={{
                    fontSize: 20,
                    padding: 10,
                    width: "85%",
                  }}
                  defaultValue={key}
                  onChangeText={(e) => setKey(e)}
                />
                <Icon
                  name="search1"
                  size={32}
                  color={"white"}
                  style={{ padding: 10 }}
                  onPress={searchHandler}
                />
              </View>
              <ScrollView>
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

export default Search;

const styles = StyleSheet.create({});
