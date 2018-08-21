import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native';

import SuperText from '../widgets/supertext/supertext';

class DsPlatform extends Component{

    constructor(props){
        super(props)

        this.state = {
            os: Platform.OS,
            orientation: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
        }

         Dimensions.addEventListener("change", (ds)=>{
            this.setState({
                orientation: ds.window.height > 500 ? 'portrait' : 'landscape'
            })

        })
    }

    checkSupport = () =>{
        if(this.state.os === 'ios'){
            if(Platform.Version > 10){
                return false
            }
        } else {
            if (Platform.Version > 26) {
                return false
            }
        }
        
        return true;
    }  

    componentWillMount(){
        Dimensions.removeEventListener("change")
    }

    render(){

        console.log(this.state.orientation);
        
        // console.log(Dimension.get('window'));

        // console.log(Platform.Version);
        return(
            <View>
                {
                    this.checkSupport() ?
                        <SuperText 
                            style={
                                this.state.orientation === "portrait" ?
                                styles.roguePortrait : styles.rogueLandscape
                            }
                        >
                            {Platform.OS === 'ios' ? 'Welcome IOS' : 'Welcome Android'}
                        </SuperText>
                    :
                        <Text>Sorry Not Supported</Text>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
  roguePortrait:{
      width:'100%',
      ...Platform.select({
          ios: {backgroundColor:'red'},
          android:{backgroundColor:'green'}
      })
  },
    rogueLandscape: {
        width:'30%',
        ...Platform.select({
            ios: { backgroundColor: 'yellow' },
            android: { backgroundColor: 'blue' }
        })
    }
});

export default DsPlatform;