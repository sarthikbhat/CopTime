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
    TouchableNativeFeedback
} from "react-native";
import { Divider } from 'react-native-elements';
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Input } from "../../Static/components"
import { Avatar } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Images, argonTheme } from "../../Static/Constants";
import { Body } from "native-base";

const { width, height } = Dimensions.get("window");

export default class ProfileScreen extends Component {
    constructor() {
        super();
        this.state = {
            contact1: 'No contact added'
        }

    }
    render() {
        return (
            <Block >
                <StatusBar backgroundColor="#c8d2db" barStyle="dark-content" />
                <ImageBackground
                    source={require('../../Static/assets/imgs/profile-bg.jpg')}
                    style={{ width, height, zIndex: -1 }}
                >
                    <ScrollView>
                        <View
                            style={styles.profileBackground}
                        >
                            <Avatar rounded size="large" title="SB" containerStyle={styles.avatarStyle} />
                            <Text style={styles.textProfile}>Sarthik Bhat</Text>
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.textInfo}>Basic Information</Text>
                            <Divider style={{ width: width / 1.1, alignSelf: 'center', }} />
                            <View style={styles.phone}>
                                <Text
                                    style={{
                                        // marginLeft:10,
                                        fontSize: 17
                                    }}
                                >Phone Number</Text>
                                <Text
                                    style={{ color: "#787777" }}
                                >7889776139</Text>
                            </View>
                            <View style={styles.adhaar}>
                                <Text
                                    style={{
                                        // marginLeft:10,
                                        fontSize: 17
                                    }}
                                >Adhaar Number</Text>
                                <Text
                                    style={{ color: "#787777" }}
                                >XXXX-XXXX-XXXX</Text>
                            </View>
                        </View>
                        <View style={styles.emergencyContacts}>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={styles.textInfo}>Emergency Contacts</Text>
                                <View style={{ flex: 0.95 }}></View>
                                <MaterialIcons 
                                onPress={() => this.props.navigation.navigate('EditContacts') }
                                style={styles.editIcon} name="edit" size={20} color="#787777" />
                            </View>
                            <Divider style={{ width: width / 1.1, alignSelf: 'center', }} />
                            <View style={styles.contact}>
                                {/* <Ionicons style={styles.contactIcon} name="ios-contact" size={31} color="#000" /> */}
                                {/* <View style={{flex:0.05}}></View> */}

                                <Text style={styles.contactText}>No emergency contacts</Text>
                                <Text style={styles.contactText2}>To send an SOS message during emergency to your emergency contacts , you need to add them</Text>
                                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('EditContacts') }>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontSize:15,
                                        padding:15,
                                        paddingBottom:4,
                                        color:'red'
                                    }}>Add Contacts</Text>
                                </TouchableNativeFeedback>
                                <View style={{
                                }}>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </Block >
        )
    }
}

const styles = StyleSheet.create({
    profileBackground: {
        // width: width/1.1,
        marginTop: 85,
        width: width / 1.05,
        alignSelf: 'center',
        // height: height / 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 40,
        paddingBottom: 10
        // alignSelf:'center',
        // justifyContent:'center'
        // zIndex:-1
    },
    avatarStyle: {
        marginTop: -(height / 12),
        // padding:10,
        alignSelf: 'center',
        elevation: 8,
        borderColor: "#ffff",
        borderWidth: 4
    },
    textProfile: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'TitilliumWeb-Light',
        padding: 10,
    },
    profileInfo: {
        marginTop: 20,
        backgroundColor: '#fff',
        width: width / 1.05,
        alignSelf: 'center',
        borderRadius: 5,
        // padding: 40,
        paddingBottom: 10
    },
    textInfo: {
        fontSize: 17,
        // textAlign: 'center',
        fontFamily: 'TitilliumWeb-Light',
        padding: 10,
        color: '#787777'
    },
    emergencyContacts: {
        marginTop: 20,
        backgroundColor: '#fff',
        width: width / 1.05,
        alignSelf: 'center',
        borderRadius: 5,
        // padding: 40,
        paddingBottom: 10
    },
    editIcon: {
        // justifyContent:'center',
        alignSelf: 'center'
    },
    phone: {
        padding: 10
    },
    adhaar: {
        padding: 10
    },
    contact: {
        padding: 15
    },
    contactText: {
        fontSize: 20,
        textAlign: 'center'
    },
    contactText2: {
        fontSize: 15,
        textAlign: 'center'
    }
})

