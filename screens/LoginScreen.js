import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class LoginScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.greeting}>{'Hello again, \n World'}</Text>

                <View style={styles.errorMessage}>
                    <Text>Error</Text>
                </View>

                <View style={styles.form}>
                    <Text style={styles.inputTxt}>Email adress</Text>
                    <TextInput style={styles.txtInput} autoCapitalize="none">
                    </TextInput>
                </View>

                <View style={styles.form}>
                    <Text style={styles.inputTxt}>Password</Text>
                    <TextInput style={styles.txtInput} autoCapitalize="none" secureTextEntry={true}>
                    </TextInput>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text>Sign in</Text>
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