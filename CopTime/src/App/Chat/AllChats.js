import React, { Component } from 'react'
import { View, StyleSheet, TouchableNativeFeedback, Dimensions, StatusBar } from 'react-native'
import { Text } from 'galio-framework'
import Tabs from '../../Static/components/Tabs'

const Notification = [
    {
        firID: 'FIR #3916',
        msg: 'Police: We will keep informing you...',
        status: "Status: Pending",
        time: '12:12 pm',
    },
    {
        firID: 'FIR #2096',
        msg: 'You: Thank You',
        status: "Status: Resolved",
        time: '12:12 pm',
    },
]

var { height, width } = Dimensions.get('window');


export default class AllChats extends Component {
    constructor() {
        super();
        this.state = {
            notify: Notification
        };
    }



    render() {
        const { notify } = this.state
        return (
            <View style={[styles.container, { marginTop: 18 }]}>
                <StatusBar hidden />
                <Tabs />
                {notify.map((notification, index) => (
                    <View style={styles.outerNotify} key={index} >
                        <TouchableNativeFeedback onPress={() => { this.props.navigation.navigate('Chat', { sos: false }) }} style={styles.outerNotifyTouch} >
                            <View style={styles.innerNotify} >
                                <View style={styles.rowFlexer}>
                                    <View style={{ flex: 1 }} >
                                        <Text color="#0f0f0f" >{notification.firID}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1 }}></View>
                                <View>
                                    <Text color="rgb(130,130,130)" >{notification.msg}</Text>
                                </View>
                                <View style={{ flex: 1 }}></View>
                                <View style={styles.dateTimeFlexer}>
                                    <View style={{ marginLeft: 10 }} >
                                        <Text color="#c1c1c1" size={12} >{notification.status}</Text>
                                    </View>
                                    <View style={{ flex: 1 }}></View>
                                    <View style={{ marginRight: 10 }} >
                                        <Text color="#c1c1c1" size={12} >{notification.time}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 12
    },
    outerNotify: {
        backgroundColor: '#ffffff',
        elevation: 3,
        marginTop: '5%'
    },
    innerNotify: {
        padding: 8,
        height: 90
    },
    rowFlexer: {
        display: "flex",
        flexDirection: "row"
    },
    dateTimeFlexer: {
        display: "flex",
        flexDirection: "row"
    }
});