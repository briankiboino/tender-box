import React, { useState } from 'react';
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import bgImage from "../assets/login-bg.jpg";
import { FontAwesome5 } from '@expo/vector-icons';

const Signin = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <View style={styles.container}>
          <View style={styles.imageContainer}>
            <ImageBackground source={bgImage} style={styles.image}></ImageBackground>
          </View> 
          <View style={styles.loginForm}>
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
          </View>
          <View style={styles.actionsContainer}>
              <TouchableHighlight style={styles.signUp} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.siginText}>Create Account?</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.signIn} onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.siginText}>
                  <FontAwesome5 name="sign-in-alt" size={30} color="#FFF"/>
                </Text>
              </TouchableHighlight>
          </View>
          <TouchableHighlight style={styles.forgot} onPress={() => navigation.navigate('Forgotpassword')}>
                <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableHighlight>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        justifyContent: 'center',
        flex: 1,
        resizeMode: "cover",
    },
    imageContainer: {
        position: "absolute",
        top: 50,
        left: 20, 
        right: 20,
        padding: 10
    },
    image: {
        position: "absolute",
        left: 5,
        top: 20,
        right: 5,
        flex: 1,
        height: 250,
        resizeMode: "cover",
    },
    loginForm: {
        paddingTop: 180,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 20
    },
    label: {
        marginLeft: 1,
        color: '#ECF0F1',
        textTransform: 'uppercase',
    },
    input: {
        borderRadius: 3, 
        borderBottomWidth: 1,
        borderColor: '#ECF0F1',
        marginBottom: 10,
        padding: 8,
        paddingLeft: 1,
        color: "#ECF0F1", 
        marginBottom: 20,
    },
    actionsContainer: {
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    signIn: {
        marginTop: -5,
        marginRight: 8
    },
    siginText: {
        color: "#FFF",
        textTransform: "uppercase",
        textAlign: "left"
    },
    forgot: {
        position: "absolute",
        bottom: 35,
        right: 32
    },
    forgotText: {
        color: "#ECF0F1",
   }
})

export default Signin;