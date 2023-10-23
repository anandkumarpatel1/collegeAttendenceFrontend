import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { logoutTeacher, searchStudents } from "../Action/Teacher";
import { useNavigation } from "@react-navigation/native";

const BottomNav = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [toggle, setToggle] = useState(false);

  const logoutHandler = () => {
    dispatch(logoutTeacher());
    setToggle(false);
  };

  const HomeHandler = () =>{
    navigation.navigate("TeacherHome")
    setToggle(false);
  }

  const searchHandler = () =>{
    dispatch(searchStudents())
    navigation.navigate("Search")
    setToggle(false)
  }

  const ProfileHandler = () =>{
    navigation.navigate("Profile")
    setToggle(false);
  }
  return (
    <>
      <View
        style={{
          width: "80%",
          height: "100%",
          backgroundColor: "rgba(90, 140, 255, 0.8)",
          position: "absolute",
          display: `${toggle ? "flex" : "none"}`,
          right: 0,
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          bottom: 59,
        }}
      >
        <TouchableOpacity style={styles.sidebarBtn} onPress={logoutHandler}>
          <Text style={styles.sidebarText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarBtn}  onPress={HomeHandler}>
          <Text style={styles.sidebarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarBtn}  onPress={searchHandler}>
          <Text style={styles.sidebarText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarBtn} onPress={ProfileHandler}>
          <Text style={styles.sidebarText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarBtn}>
          <Text style={styles.sidebarText}>Devloper</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          height: 60,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          position: "absolute",
          bottom: 0,
          left: 0,
          borderColor: "rgba(255, 255, 255, 0.8)",
          borderWidth: 1,
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 25,
          padding: 10,
        }}
      >
        <TouchableOpacity style={styles.navbtn}>
          <Icon name="home" size={32} color={"white"} onPress={HomeHandler}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbtn}>
          <Icon name="user" size={32} color={"white"} onPress={ProfileHandler}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbtn}>
          <Icon name="search1" size={32} color={"white"} onPress={searchHandler}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navbtn}
          onPress={() => setToggle(!toggle)}
        >
          <Icon name="menufold" size={32} color={"white"} />
        </TouchableOpacity>
      </View>
      <View></View>
    </>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    paddingLeft: "10",
    paddingTop: 3,
  },
  sidebarBtn: {
    backgroundColor: "rgba(100, 100, 255, 1.8)",
    borderRadius: 15,
    width: "100%",
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  sidebarText: {
    fontSize: 25,
  },
});
