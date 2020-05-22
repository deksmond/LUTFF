import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import HomeScreen from './screens/HomeScreen'
import MessageScreen from './screens/MessageScreen'
import PostScreen from './screens/PostScreen'
import NotificationScreen from './screens/NotificationScreen'
import ProfileScreen from './screens/ProfileScreen'

import * as firebase from 'firebase'
 
var firebaseConfig = {
    apiKey: "AIzaSyAvOyJOjoYEp_2B4Fegsc-8bJxFNqSiaA4",
    authDomain: "lutff-e8054.firebaseapp.com",
    databaseURL: "https://lutff-e8054.firebaseio.com",
    projectId: "lutff-e8054",
    storageBucket: "lutff-e8054.appspot.com",
    messagingSenderId: "74723080054",
    appId: "1:74723080054:web:eff03a84c7b9b576f9ac57"
  };
  
  firebase.initializeApp(firebaseConfig);

 const AppTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
               tabBarIcon: ({tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} /> 
            }
        },
        Message: {
            screen: MessageScreen,
            navigationOptions: {
               tabBarIcon: ({tintColor }) => <Ionicons name="ios-chatboxes" size={24} color={tintColor} /> 
            }
        },
        Post: {
            screen: PostScreen,
            navigationOptions: {
               tabBarIcon: ({tintColor }) => 
                <Ionicons 
                    name="ios-add-circle" 
                    size={50} 
                    color="#E9446A" 
                    style={{
                        shadowColor: "#E9446A",
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.3,
                        shadowRadius: 10
                    }}
                /> 
            }
        },
        Notification: {
            screen: NotificationScreen,
            navigationOptions: {
               tabBarIcon: ({tintColor }) => <Ionicons name="ios-notifications" size={24} color={tintColor} /> 
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
               tabBarIcon: ({tintColor }) => <Ionicons name="ios-person" size={24} color={tintColor} /> 
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: "#161F3D",
            inactiveTintColor: "#B3BBC4",
            showLabel: false
        }
    }
 );

 const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
 })

 export default createAppContainer(
     createSwitchNavigator(
         {
             Loading: LoadingScreen,
             App: AppTabNavigator,
             Auth: AuthStack
         }, 
         {
             initialRouteName:"Loading"
         }
    )
 );