import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class LoginScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>This is the LoginScreen</Text>
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}); 