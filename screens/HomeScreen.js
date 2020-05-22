import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';

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
        LayoutAnimation.easeInEaseOut();
        
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 15}}>What'a gwan {this.state.email}</Text>

                <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
                    <Text>Sign out</Text>
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