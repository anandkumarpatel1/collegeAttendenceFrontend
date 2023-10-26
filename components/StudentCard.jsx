import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const StudentCard = ({
  name,
  id,
  branch,
  absent = [],
  regNo,
  semester,
  semRollNo,
  present = [],
  teachersArray=[]
}) => {
  const navigation = useNavigation();

  const [attend, setAttend] = useState(false);

  const {teacher} = useSelector((state) => state.teacher)


  teachersArray.forEach((item) =>{
    if(teacher._id === item){
      console.log(item)
    }
  })

  const studentHandler = () => {
    navigation.navigate("TeacherStudentProfile", { id: id });
  };
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 20,
        padding: 10,
        borderWidth: 1,
        marginTop: 10,
      }}
      onPress={studentHandler}
    >
      <Text style={styles.args}>
        Name: <Text style={styles.data}>{name}</Text>
      </Text>
      <Text style={styles.args}>
        Branch: <Text style={styles.data}>{branch}</Text>
      </Text>
      <Text style={styles.args}>
        Reg No: <Text style={styles.data}>{regNo}</Text>
      </Text>
      <Text style={styles.args}>
        Semester: <Text style={styles.data}>{semester}</Text>
      </Text>
      {attend ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 30,
            marginTop: 20,
          }}
        >
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.args}>Present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.args}>Absent</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default StudentCard;

const styles = StyleSheet.create({
  args: {
    fontSize: 20,
  },
  data: {
    color: "white",
    fontWeight: "700",
  },
  btn: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
});
