import React, { Component } from "react";
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar,
    KeyboardAvoidingView,
    Alert,
    View,
    ScrollView,
    PermissionsAndroid
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Input } from "../../Static/components"
import { Avatar } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Images, argonTheme } from "../../Static/Constants";
import { Body } from "native-base";
import Contacts from 'react-native-unified-contacts';

const { width, height } = Dimensions.get("window");

const contactList = [
    {
        name: 'Emergency Contact 1'
    },
    {
        name: 'Emergency Contact 2'
    },
    {
        name: 'Emergency Contact 3'
    },
]

let granted;
export default class EditContacts extends Component {
    constructor() {
        super();
        this.state = {
            addContact: true,
            cameraPermisson: []
        }
    }

    componentDidMount=()=>{
        let currentComponent = this;
        this.requestContactPermisson(currentComponent) 
    }
    requestContactPermisson = async (currentComponent) => {
        try {
            granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            )

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.warn("Contact Permission Granted.");
            }
            else {
                console.warn("Contact Permission Not Granted");
            }
        } catch (err) {
            console.warn(err)
        }
    }

    getContact = () => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            Contacts.selectContact( (error, contact) =>  {
                if (error) {
                  console.error(error);
                }
                else {
                  console.log(contact.phoneNumbers[0].digits);
                }
              });
        }
        else {
            let currentComponent = this;
            this.requestContactPermisson(currentComponent)
        }
        
    }
    render() {
        return (
            <Block>
                <StatusBar backgroundColor="#c8d2db" barStyle="dark-content" />
                <ImageBackground
                    source={require('../../Static/assets/imgs/profile-bg.jpg')}
                    style={{ width, height, zIndex: -1 }}
                >
                    <View style={styles.profileBackground}>
                        <Text style={{
                            fontSize: 20,
                            textAlign: 'center',
                            color: 'red',
                            marginBottom: 10
                        }}>Add Emergency Contacts</Text>

                        <View>
                            {contactList.map((contact,index) => {
                                return (
                                    <View key={index}>
                                        <Text style={{
                                            fontSize: 17,
                                            textAlign: 'center',
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}>{contact.name}</Text>
                                        <Input
                                            borderless
                                            placeholder="Name"
                                        />
                                        <Input
                                            borderless
                                            placeholder="Contact Number"
                                            right
                                            iconContent={
                                                <AntDesign
                                                    size={16}
                                                    color={argonTheme.COLORS.ICON}
                                                    name="contacts"
                                                    style={styles.inputIcons}
                                                    onPress={() => this.getContact()}
                                                />
                                            }
                                        />
                                    </View>
                                )
                            })}
                            <Button color="primary" style={styles.createButton} onPress={() => this.props.navigation.navigate('Profile')} >
                                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                    Update Emergency Contacts
                        </Text>
                            </Button>
                        </View>
                    </View>
                </ImageBackground>
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    profileBackground: {
        // width: width/1.1,
        marginTop: 35,
        width: width / 1.05,
        alignSelf: 'center',
        // height: height / 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        // paddingBottom: 10
        // alignSelf:'center',
        // justifyContent:'center'
        // zIndex:-1
    },
    addContact: {
        flexDirection: 'row'
    },
    textEmergency: {
        padding: 10,
        fontSize: 17,
    },
    icons: {
        alignSelf: 'center',
        padding: 4
    },
    createButton: {
        width: width / 1.1,
        marginTop: 25,
        marginBottom: 10,
        alignSelf: 'center',
    },
    editIcon: {
        position: 'absolute',
        marginTop: -19, zIndex: -3,
        overflow: 'visible'
    },
})

