import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
                
                <TouchableOpacity
                    onPress={()=>alert('touch')}
                >
                    < Icon
                    name = "tachometer"
                    size = {
                        60
                    }
                    color = "red"
                    style = {
                        {
                            borderWidth: 1,
                            borderColor: "blue",
                            padding: 10,
                            textAlign: "center",
                            backgroundColor: "lightgrey"
                        }
                    }
                    />
                </TouchableOpacity>

                <Icon.Button
                    name="tachometer"
                    backgroundColor="#3b5998"
                    onPress={()=>alert('icon button touched')}
                    iconStyle={{
                        marginRight:20
                    }}

                >
                    <Text style={{color:"#fff"}}>Facebook</Text>
                </Icon.Button>
                

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