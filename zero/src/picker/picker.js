import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

class PickerComponent extends Component {

    state = {
        language:"turki"
    }

    render(){
        return(
            <Picker 
            style={{width:'100%'}}
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex)=>{
                this.setState({
                    language:itemValue
                })
            }}
            >
                <Picker.Item label="Indonesia" value="indonesia"/>
                <Picker.Item label="Turki" value="turki" />
            </Picker>
        )
    }
}

export default PickerComponent;

