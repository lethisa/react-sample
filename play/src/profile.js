import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// class ProfileComponent extends Component {
class ProfileScreen extends Component {
    constructor(props){
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.navigatorEvent)
    }

    navigatorEvent = event =>{
        if(event.type === "NavBarButtonPress" && event.id === "DrawerButton"){
            this.props.navigator.toggleDrawer({
                side:'left',
                animated:true
            })
        }
    }

    render() {
        return (
            <Text>This is profile</Text>
        )
    }
}

// export default ProfileComponent;
export default ProfileScreen;