import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import * as firebase from 'firebase'

class HomeScreen extends React.Component{

    state = {
        email: "",
        displayName: ""
    }

    componentDidMount(){
        const{email, displayName} = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render(){
        return(
            <View style={styles.container}>

                <Text>Hello,{this.state.email}</Text>

                <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
                    <Text>Sign up</Text>
                </TouchableOpacity>
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