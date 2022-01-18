import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, DrawerLayoutAndroid, Button, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import bgImage from "../assets/login-bg.jpg";

const Dashboard = ({ navigation }) => {

    const drawer = useRef(null);
    const date = new Date();

    const navigationView = () => (
        <View style={styles.navigationContainer}>
           <ImageBackground source={bgImage} style={styles.image}>
           <View style={styles.logo}>
              <Text style={styles.logoText}>BITCOIN</Text>
              <TouchableOpacity style={styles.closedrawerButton} onPress={() => drawer.current.closeDrawer()}>
              <Ionicons name="close-outline" size={24} color="#ECF0F1" />   
            </TouchableOpacity>
           </View>
           <TouchableOpacity style={styles.navButton} title="Home" onPress={() => drawer.current.closeDrawer()}>
              <FontAwesome5 name="home" size={15} color="#ECF0F1" />  
              <Text style={styles.navText}>Home</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.navButton} title="Home" onPress={() => drawer.current.closeDrawer()}>
              <FontAwesome5 name="user-circle" size={15} color="#ECF0F1" />  
              <Text style={styles.navText}>Profile</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.navButton} title="Home" onPress={() => drawer.current.closeDrawer()}>
              <FontAwesome5 name="plus-circle" size={15} color="#ECF0F1" />  
              <Text style={styles.navText}>Tender</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.navButton} title="Home" onPress={() => drawer.current.closeDrawer()}>
              <Entypo name="log-out" size={15} color="#ECF0F1" />
              <Text style={styles.navText}>Sign out</Text>
           </TouchableOpacity>
           <Text style={styles.footer}>© {date.getFullYear()} BITCOIN inc. All Rights Reserved.</Text>
           </ImageBackground>
        </View>
      );
    
      return (
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          renderNavigationView={navigationView}
        >
          <View style={styles.container}>
           <View style={styles.navigationBar}>
               <TouchableOpacity  onPress={() => drawer.current.openDrawer()}>
                  <Entypo name="menu" size={30} color="white" />
               </TouchableOpacity>
           </View>
           <TouchableOpacity style={styles.tenderButton} onPress={() => alert("Create new tender")}>
                <Text style={styles.tenderText}>
                   <MaterialCommunityIcons name="plus-circle" size={60} color="black" />
                </Text>
              </TouchableOpacity>
       </View>
        </DrawerLayoutAndroid>
      );
    };

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                resizeMode: "cover",
            },
            navigationBar: {
                backgroundColor: "#000",
                paddingTop: 40,
                paddingLeft: 20,
                paddingRight: 20, 
                paddingBottom: 20
            },
            navigationContainer: {
                flex: 1,
                resizeMode: "cover",
                paddingTop: 35,
            },
            image: {
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                flex: 1,
                bottom: 0,
                paddingTop: 40,
                paddingLeft: 20,
                paddingRight: 20,
                resizeMode: "cover",
                opacity: 0.9
            },
            logo: {
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20
            },
            logoText: {
                fontSize: 20, 
                color: "#ECF0F1"
            },
            closedrawerButton: {
                
            },
            navButton:{
                padding: 18,
                marginBottom: 10,
                borderRadius: 5,
                backgroundColor: "#000000a0",
                flexDirection: "row"
            },
            navText: {
                marginLeft: 10, 
                color: '#ECF0F1',
                
            },
            footer: {
                position: "absolute", 
                left: 30,
                bottom: 20,
                color: "#ECF0F1"
            },
            tenderButton: {
                position: "absolute",
                bottom: 20,
                right: 20,
                backgroundColor: "transparent",
                borderRadius: 50, 
                justifyContent: "center",
            
            }
 })

export default Dashboard;