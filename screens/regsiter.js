import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import bgImage from "../assets/login-bg.jpg";
import { FontAwesome5 } from '@expo/vector-icons';

const Signin = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
      <View style={styles.container}>
          <View style={styles.introContainer}>
              <Text style={styles.logo}>BITCOIN</Text>
              <Text style={styles.motto}>Your finance, our priority</Text>
          </View>
          <View style={styles.registerForm}>
              <ImageBackground source={bgImage} style={styles.image}>
                <Text style={styles.label}>Name</Text>
                <TextInput 
                  style={styles.input}
                  textContentType='emailAddress'
                  onChangeText={(val) => setName(val)}
                />
              <Text style={styles.label}>Email</Text>
                <TextInput 
                  style={styles.input}
                  textContentType='emailAddress'
                  onChangeText={(val) => setEmail(val)}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput 
                  style={styles.input}
                  extContentType='emailAddress'
                  onChangeText={(val) => setPassword(val)}
                />
                <Text style={styles.label}>Confirm password</Text>
                <TextInput 
                  style={styles.input}
                  extContentType='emailAddress'
                  onChangeText={(val) => setConfirm(val)}
                />
                <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.signupText}>
                        <FontAwesome5 name="chevron-right" size={22} color="#FFF"/>
                    </Text>
                </TouchableOpacity> 
                <View style={styles.alreadyhaveanAccount}>
                    <Text style={styles.alreadyhaveanaccountText}>Already have an acoount ?</Text>
                    <TouchableOpacity style={styles.signinBtn} onPress={() => navigation.navigate('Signin')}>
                      <Text style={styles.signinText}>Sign in</Text>
                    </TouchableOpacity>  
                </View>
              </ImageBackground>
          </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        resizeMode: "cover",
    },
    introContainer: {
        position: "relative",
        backgroundColor: '#000',
        height: 230,
    },
    logo: {
      position: "absolute",
      left: 27,
      bottom: 25, 
      color: "#FFF",
      fontSize: 42,
      letterSpacing: 6,
    },
    motto: {
      position: "absolute",
      left: 30,
      bottom: 15, 
      color: "#FFF",
      fontStyle: "italic"
    },
    registerForm: {
        backgroundColor: "#FFF",
        resizeMode: "cover",
    },
    image: {
        padding: 30,
        resizeMode: "cover",
        height: 550
    },
    label: {
        marginLeft: 1,
        color: '#FFF',
        textTransform: 'uppercase',
    },
    input: {
        borderRadius: 3,
        borderBottomWidth: 1,
        borderColor: '#FFF',
        marginBottom: 10,
        padding: 8,
        paddingLeft: 1,
        color: "#FFF", 
        marginBottom: 20,
    },
    signupBtn: {
        position: "absolute",
        right: 30,
        bottom: 130,
        height: 60,
        width: 53,
        backgroundColor: "#000",
        textAlign: "right", 
        borderRadius: 5,
        padding: 21, 
        justifyContent: "center"
    },
    signupText: {
        color: "#FFF"
    },
    alreadyhaveanAccount: {
        position: 'absolute',
        bottom: 100,
        left: 30,
        flexDirection: "row",
    },
    alreadyhaveanaccountText: {
        marginRight: 10,
        color: "#FFF"
    },
    signinText: {
      color: "#178FAB"
    }
})

export default Signin;