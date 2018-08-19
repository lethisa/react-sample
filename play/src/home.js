import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import LoadTabs from './tabs';

// class HomeComponent extends Component {
class HomeScreen extends Component {
    // static navigationOptions = {
    //     title:'Home'
    // }

    render(){
        // const { navigate } = this.props.navigation;
        return(
            <View>
                <Text>This is home</Text>
                <Button
                    title="see profile"
                    onPress={()=>{
                        // navigate('Profile')

                        // this.props.navigator.push({
                        //     screen:"play.ProfileScreen",
                        //     title:"profile"
                        // })

                        LoadTabs();
                    }}
                />
            </View>
        )
    }
}

// export default HomeComponent;
export default HomeScreen;