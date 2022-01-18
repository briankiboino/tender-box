import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import bgImage from "../assets/home-bg.jpg";

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
          <ImageBackground source={bgImage} style={styles.image}>
             <TouchableOpacity style={styles.signinBtn} onPress={() => navigation.navigate('Signin')}>
                 <Text style={styles.text}>Sign in</Text>
             </TouchableOpacity> 
             <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Signup')}>
                 <Text style={styles.text}>Sign up</Text>
             </TouchableOpacity>  
          </ImageBackground>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
    },
    signinBtn: {
      position: "absolute",
      left: 20,
      right: 20,
      bottom: 80,
      height: 50,
      borderRadius: 30,
      marginBottom: 20,
      padding: 10,
      backgroundColor: "#000000a0",
    },
    signupBtn: {
      position: "absolute",
      left: 20,
      right: 20,
      bottom: 35,
      height: 50,
      height: 50,
      borderRadius: 30,
      padding: 10,
      backgroundColor: "#000000a0",
    },
    text: {
      textAlign: "center",
      color: "white",
      fontSize: 18,
      textTransform: "uppercase"
    }
  });

export default Home;