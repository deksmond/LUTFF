import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

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

 const AppStack = createStackNavigator({
     Home: HomeScreen
 })

 const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
 })

 export default createAppContainer(
     createSwitchNavigator(
         {
             Loading: LoadingScreen,
             App: AppStack,
             Auth: AuthStack
         }, 
         {
             initialRouteName:"Loading"
         }
    )
 );