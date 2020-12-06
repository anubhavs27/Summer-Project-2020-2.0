import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './src/screens/introScreen';
import HomePage from './src/screens/homePage';
import PlaceHolder from './src/screens/accountRegistration';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerLeft: false
        }}
      >
        <Stack.Screen
              name="Reigstration"
              component={PlaceHolder}
        />
        <Stack.Screen
            name="IntroScreen"
            component={IntroScreen}
        />
        <Stack.Screen
            name="Home"
            component={HomePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
