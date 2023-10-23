import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const StudentCard = ({
  name,
  id,
  branch,
  absent = [],
  regNo,
  semester,
  semRollNo,
  present = [],
}) => {
  
  const navigation = useNavigation()

  const studentHandler = () =>{
    navigation.navigate("TeacherStudentProfile", {id: id} )
  }
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
      <Text style={styles.args}>Name: <Text style={styles.data}>{name}</Text></Text>
      <Text style={styles.args}>Branch: <Text style={styles.data}>{branch}</Text></Text>
      <Text style={styles.args}>Reg No: <Text style={styles.data}>{regNo}</Text></Text>
      <Text style={styles.args}>Semester: <Text style={styles.data}>{semester}</Text></Text>
    </TouchableOpacity>
  );
};

export default StudentCard;

const styles = StyleSheet.create({
    args: {
        fontSize: 20
    },
    data: {
        color: 'white',
        fontWeight: '700'
    }
});
