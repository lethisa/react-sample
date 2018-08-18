import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

class Input extends Component{
    state = {
        myInput:"",
        users:['Ade','Bane','Jane','Tommy']
    }

    onChangeInput = (value) => {
        this.setState({
            myInput:value
        })
    }

    onAddUser = () => {
        this.setState(prevState =>{
            return{
                myInput:'',
                users:[...prevState.users,prevState.myInput]
            }
        })
    }

    render(){
        return(
                <View style={styles.inputWapper}>
                    <TextInput
                        value={this.state.myInput}
                        style={styles.input}
                        onChangeText={this.onChangeInput}
                        multiline={true}
                        // maxHeight={5}
                        // editable={true}
                        autoCapitalize={'words'}
                    />
                    <Button
                        title="Add User"
                        onPress={this.onAddUser}
                    />
                    {
                        this.state.users.map(item => (
                            <Text style={styles.users} key={item}>{item}</Text>
                        ))
                    }
                </View>
        )
    }
}

const styles = StyleSheet.create({
    inputWapper:{
        width:'100%'
    },
    input:{
        width:'100%',
        backgroundColor:'#f2f2f2',
        marginTop:20,
        fontSize:20,
        padding:10
    },
    users:{
        fontSize:40,
        borderWidth:1,
        borderColor:'#cecece',
        padding:10,
        marginBottom:20
    }
})

export default Input;

