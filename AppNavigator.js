// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import ShoppingScreen from './ShoppingScreen';
import ProfileScreen from './ProfileScreen';
import Item1Screen from './Item1Screen';
import Item2Screen from './Item2Screen';
import Item3Screen from './Item3Screen';
import Item4Screen from './Item4Screen';

// Stack Navigator for Login and Register
const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator initialRouteName="Login">
   <AuthStack.Screen
  name="Login"
  component={LoginScreen}
  options={{
    headerStyle: {
      backgroundColor: 'tomato',
    },
  }}
/>

<AuthStack.Screen
  name="Register"
  component={RegisterScreen}
  options={{
    headerStyle: {
      backgroundColor: 'tomato',
    },
  }}
/>
  </AuthStack.Navigator>
);

// Top Tab Navigator for any four items
const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => (
  <TopTab.Navigator>
    <TopTab.Screen name="Item1" component={Item1Screen} />
    <TopTab.Screen name="Item2" component={Item2Screen} />
    <TopTab.Screen name="Item3" component={Item3Screen} />
    <TopTab.Screen name="Item4" component={Item4Screen} />
  </TopTab.Navigator>
);

// Bottom Tab Navigator for Home, Detail, Shopping, Profile, and Top Tab Navigator
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen
  name="Home"
  component={HomeScreen}
  options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="home" color="tomato" size={size} />
    ),
    headerStyle: {
      backgroundColor: 'tomato',
    },
  }}
/>

    <BottomTab.Screen
      name="Detail"
      component={DetailScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="information-circle" color="tomato" size={size} />
        ),
        headerStyle: {
          backgroundColor: 'tomato',
        },
      }}
    />
    <BottomTab.Screen
      name="Shopping"
      component={ShoppingScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="cart" color="tomato" size={size} />
        ),
        headerStyle: {
          backgroundColor: 'tomato',
        },
      }}
    />
    <BottomTab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color="tomato" size={size} />
        ),
        headerStyle: {
          backgroundColor: 'tomato',
        },
      }}
    />
    <BottomTab.Screen
      name="TopTab"
      component={TopTabNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="list" color="tomato" size={size} />
        ),
        headerStyle: {
          backgroundColor: 'tomato',
        },
      }}
    />
  </BottomTab.Navigator>
);

const MainStack = createStackNavigator();

const MainStackNavigator = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Auth"
      component={AuthNavigator}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="Main"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
  </MainStack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <MainStackNavigator />
  </NavigationContainer>
);

export default AppNavigator;
