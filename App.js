import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import Signin from './screens/login';
import Signup from './screens/regsiter';
import Forgot from './screens/forgot';
import Dashboard from './screens/dashboard';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
           name="Home"
           component={Home} 
           options={{ title: 'Home' }}
        />
        <Stack.Screen
           name="Signin"
           component={Signin} 
           options={{ title: 'Sign in to your account' }}
        />
        <Stack.Screen
           name="Signup" 
           component={Signup} 
           options={{ title: 'Create an account' }}
        />
         <Stack.Screen
           name="Forgotpassword" 
           component={Forgot} 
           options={{ title: 'Recover password' }}
        />
        <Stack.Screen
           name="Dashboard"
           component={Dashboard} 
           options={{ title: 'Dashboard' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;