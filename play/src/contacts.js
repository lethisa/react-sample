import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Contacts from 'react-native-contacts';

class ContactsComponent extends Component{

    state={
        myContacts:[

        ]
    }

    getContacts = ()=>{
        Contacts.getAll((err, contacts)=>{
            if(err === 'denied'){
                console.log(err);
            } else{
                // console.log(contacts);
                this.setState({
                    myContacts:contacts
                })
                
            }
        })
    }

    render(){
        return(
            <View style={{width:'100%'}}>
            {
                this.state.myContacts.map(contact=>(
                    <Text key={i}>{contact.givenName} {contact.familyName}</Text>
                ))
            }
                <Button
                    title="Load Contacts"
                    onPress={this.getContacts}
                />
            </View>
        )
    }
}

export default ContactsCo