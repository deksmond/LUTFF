import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class LoadingScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>This is the LoadingScreen</Text>
            </View>
        );
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});