import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, loadTeacher } from "../Action/Teacher";
import Loader from "../components/Loader";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");
  const [semRollNo, SetSemRollNo] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [hide, setHide] = useState(true);

  const dispatch = useDispatch();

  const { loading, student, error } = useSelector((state) => state.student);
  const {} = useSelector((state) => state.teacher)

  useEffect(()=>{
    if(error){
      alert(error)
      dispatch({type: "clearError"})
    }
  }, [alert, error, dispatch])

  const createHandler = async() => {
    await dispatch(addStudent(name, regNo, password, semRollNo, branch, semester));
    dispatch(loadTeacher())
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={{
              flex: 1,
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <View
              style={{
                borderColor: "rgba(255, 255, 255, 0.8)",
                borderWidth: 1,
                marginTop: 50,
                flex: 1,
                width: "100%",
                height: "100%",
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
                  Add New Student
                </Text>
                <TextInput
                  label="Name"
                  placeholder="Name"
                  style={styles.input}
                  onChangeText={(newText) => setName(newText)}
                  defaultValue={name}
                />
                <TextInput
                  label="Reg No"
                  placeholder="Reg No"
                  style={styles.input}
                  onChangeText={(newText) => setRegNo(newText)}
                  defaultValue={regNo}
                />
                <TextInput
                  label="Password"
                  placeholder="Password"
                  secureTextEntry={hide}
                  style={styles.input}
                  right={
                    <TextInput.Icon icon="eye" onPress={() => setHide(!hide)} />
                  }
                  onChangeText={(newText) => setPassword(newText)}
                  defaultValue={password}
                />
                <TextInput
                  label="Semester Rollno"
                  placeholder="Semester Rollno"
                  style={styles.input}
                  onChangeText={(newText) => SetSemRollNo(newText)}
                  defaultValue={semRollNo}
                />
                <TextInput
                  label="Branch"
                  placeholder="Branch"
                  style={styles.input}
                  onChangeText={(newText) => setBranch(newText)}
                  defaultValue={branch}
                />
                <TextInput
                  label="Semester"
                  placeholder="Semester"
                  style={styles.input}
                  onChangeText={(newText) => setSemester(newText)}
                  defaultValue={semester}
                />
                <TouchableOpacity
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.8)",
                    borderWidth: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    marginTop: 10,
                    padding: 10,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={createHandler}
                >
                  <Text style={{ fontSize: 20, color: "white" }}>Create</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </LinearGradient>
        </View>
      )}
    </>
  );
};

export default AddStudent;

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
