import { ImageBackground, StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import bgHome from "../assets/home_bg.jpg";
import logo from '../assets/Logo.png'
import { useSelector } from "react-redux";

const Home = () => {
  const navigation = useNavigation();
  

  return (
    <View style={styles.container}>
      <ImageBackground source={bgHome} resizeMode="cover" style={styles.image}>
        <View style={styles.imgCont}>
            <Image source={logo} style={styles.logoImg}/>
            <Text style={styles.homeSlogn}>Complete Your Attendence From Attendo College</Text>
        </View>
        <View>
          <Button
            style={styles.btnCont}
            onPress={() => navigation.navigate("Login")}
            mode="contained-tonal"
            buttonColor="rgba(255, 255, 255, 0.4)"
            textColor="blue"
            labelStyle={{ fontSize: 20, fontWeight: "600" }}

          >
            Login
          </Button>
          <Button
            style={styles.btnCont}
            onPress={() => navigation.navigate("Signup")}
            mode="contained-tonal"
            textColor="blue"
            buttonColor="rgba(255, 255, 255, 0.4)"
            labelStyle={{ fontSize: 20, fontWeight: "600" }}
          >
            Signup
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: 'center',
  },
  btnCont: {
    marginTop: 20,
    width: 250,
    padding: 10,
  },
  logoImg: {
    width: 250,
    height:250,
    borderRadius: 25
  },
  imgCont:{
    width: 250,
    height:250,
  },
  homeSlogn: {
    marginTop: 30,
    fontSize: 20,
    color: 'white',

  }
});

export default Home;
