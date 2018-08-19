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

    addContacts = () =>{
        const newContact = {
            emailAddresses:[
                {
                    label:"work",
                    email:"admin@gmail.com"
                }
            ],
            familyName:"Adam Wera",
            givenName:"Adam"
        }

        Contacts.addContact(newContact,(err)=>{
            if(err){
                console.log(err);
            }else{
                this.getContacts();
            }
        })
    }

    openContactForm = ()=>{
        const newContact = {
            familyName: "Wolf",
            givenName: "Mr."
        };

        Contacts.openContactForm(newContact, (err)=>{
            if (err) {
                console.log(err);
            }
        })      
    }

    searchForContact = ()=>{
        Contacts.getContactsMatchingString("Adam",(err,contacts)=>{
            if (err === 'denied') {
                console.log(err);
            } else {
                this.setState({
                    myContacts: contacts
                })
            }
        })
    }

    render(){
        return(
            <View style={{width:'100%'}}>
            {
                this.state.myContacts.map((contact,i)=>(
                    <Text key={i}>{contact.givenName} {contact.familyName}</Text>
                ))
            }
                <Button
                    title="Load Contacts"
                    onPress={this.getContacts}
                />

                <Button
                    title="Add Contacts"
                    onPress={this.addContacts}
                />

                <Button
                    title="Open Contact Form"
                    onPress={this.openContactForm}
                />

                <Button
                    title="Search for "
                    onPress={this.searchForContact}
                />
            </View>
        )
    }
}

export default ContactsComponent;