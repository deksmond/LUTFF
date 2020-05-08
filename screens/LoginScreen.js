import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase'

class LoginScreen extends React.Component{
    state = {
        email: "",
        password: "",
        errorMessage: null
    }

   handleLogin = () => {
       const { email, password } = this.state

       firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({ errorMessage: error.message }))
   }
    
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.greeting}>{'Hello again, \n World'}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
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

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{ color: "#FFF", fontWeight: "500"}}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }} onPress={() => this.props.navigation.navigate("Register")}>
                    <Text style={{ color:"#414959", fontSize: 13 }}>
                        New here?<Text style={{ color:"#E9446A", fontWeight:"500" }}>Sign up</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default LoginScreen;

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
        height: 72,
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
       marginBottom: 48,
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

}); 