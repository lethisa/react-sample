import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

// class ProfileComponent extends Component {
class ProfileScreen extends Component {
    constructor(props){
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.navigatorEvent)
    }

    state = {
        avatar:''
    }

    navigatorEvent = event =>{
        if(event.type === "NavBarButtonPress" && event.id === "DrawerButton"){
            this.props.navigator.toggleDrawer({
                side:'left',
                animated:true
            })
        }
    }

    addAvatar = () => {
        ImagePicker.showImagePicker({
            title:'select an awesome avatar',
            cancelButtonTitle:'shame on you',
            takePhotoButtonTitle:'take a super nice pick',
            chooseFromLibraryButtonTitle:'really? an old photo?'
        }, response => {
            if(response.didCancel){
                alert('cancel op')
            }else if(response.error){
                alert('sorry not working')
            } else{
                // alert(response.data)

                this.setState({
                    avatar: response.uri
                })
            }
        })

        // ImagePicker.launchImageLibrary(null, (response) =>{

        // });
    }

    render() {
        return (
            <View style={{width:'100%'}}>
                <Image 
                    source={{uri:this.state.avatar}}
                    style={styles.avatar}
                />
                <Button
                    title="Add our avatar"
                    onPress={()=>this.addAvatar()}
                />
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    avatar:{
        width:'100%',
        height:400
    }
})

// export default ProfileComponent;
export default ProfileScreen;