import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class RegisterScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>This is the RegisterScreen</Text>
            </View>
        );
    }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});