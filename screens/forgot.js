import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Forgotpassword = ({ navigation }) => {
    
    return(
       <View>
           <Text style={styles.forgot}>
               Forgot pasword
           </Text>
       </View>
    )

}

const styles = StyleSheet.create({
    forgot: {
        color: 'red'
    }
})

export default Forgotpassword;