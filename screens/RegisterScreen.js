import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import * as firebase from 'firebase'

class RegisterScreen extends React.Component{
   
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    }


handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(userCredentials => {
        return userCredentials.user.updateProfile({
            displayName: this.state.email
        });
    })
    .catch(error => this.setState({ errorMessage: error.message }))
};

    
    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.greeting}>{'Hello! \n Sign up to get started'}</Text>

                <TouchableOpacity style={styles.avatar}>
                    <Ionicons name="ios-add" size={40} color="#FFF" style={{marginTop: 6, marginLeft: 2}}></Ionicons>
                </TouchableOpacity>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <Text style={styles.inputTxt}>Full name</Text>
                    <TextInput style={styles.txtInput} 
                    autoCapitalize="none"
                    onChangeText={ name => this.setState({ name })}
                    value={this.state.name}
                    >
                    </TextInput>
                </View>             

                <View style={styles.form}>
                    <Text style={styles.inputTxt}>Email adress</Text>
                    <TextInput style={styles.txtInput} 
                    autoCapitalize="none"
                    onChangeText={ email => this.setState({ email })}
                    value={this.state.email}
                    >
                    </TextInput>
                </View>

                <View style={styles.form}>
                    <Text style={styles.inputTxt}>Password</Text>
                    <TextInput style={styles.txtInput} 
                    autoCapitalize="none" 
                    secureTextEntry={true}
                    onChangeText={ password => this.setState({ password })}
                    value={this.state.password}
                    >
                    </TextInput>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{ color: "#FFF", fontWeight: "500"}}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }} onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={{ color:"#414959", fontSize: 13 }}>
                        Already have an account?<Text style={{ color:"#E9446A", fontWeight:"500" }}>Sign in</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    greeting: {
        marginTop: 32,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "400"
    },
    errorMessage: {
        height: 50,
        textAlign: "center",
        marginHorizontal: 30, 
        alignItems: "center",
        justifyContent: "center"
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center",
    },
    form: {
       marginHorizontal: 30,
       marginBottom: 30,
    },
    inputTxt: {
        color: '#8A8F9E',
        textTransform: 'uppercase',
        fontSize: 10
    },
    txtInput: {
        borderBottomColor: '#8A8F9E',
        borderBottomWidth: StyleSheet.hairlineWidth,
        color: '#161F3D',
        fontSize: 15,
        height: 40
    },
    button: {
        backgroundColor:'#E9446A',
        marginHorizontal: 30,
        borderRadius: 5,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: "#000000",
        marginTop: 20,
        marginHorizontal: 150,
        alignItems: "center",
        justifyContent: "center"
    }
}); 