import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Dimensions, StatusBar } from 'react-native'
import {Text, Button, Block} from 'galio-framework'
import Icon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const Notification = [
    {
        notify: 'An SOS message from your locality, looks like someone needs your help',
        date: '07th Feb 2020',
        time: '12:12 pm',
    },
    {
        notify: 'An SOS message from your locality, looks like someone needs your help',
        date: '07th Feb 2020',
        time: '12:12 pm',
    },
    {
        notify: 'An SOS message from your locality, looks like someone needs your help',
        date: '07th Feb 2020',
        time: '12:12 pm',
    },
]

var { height, width } = Dimensions.get('window');


export default class NotificationScreen extends Component {
    constructor() {
        super();
        this.state = {
            notify: Notification
        };
    }

    removeNotification = (index) => {
        Notification.splice(index, 1)
        this.setState({
            notify: Notification
        })
    }



    render() {
        const { notify } = this.state
        return (
            <View style={[styles.container, { marginTop: 25 }]}>
                <Block middle>
                    <Button disabled={this.state.notify.length==0} color="#5e73e5" onPress={()=>{this.setState({notify:[]})}} >Clear All</Button>
                </Block>
                <StatusBar hidden />
                {notify.map((notification, index) => (
                    <View style={styles.outerNotify} key={index} >
                        <TouchableNativeFeedback onPress={() => { this.props.navigation.navigate('RouteDirector') }} style={styles.outerNotifyTouch} >
                            <View style={styles.innerNotify} >
                                <View style={styles.rowFlexer}>
                                    <View style={{flex:1}} >
                                        <Text color="#0f0f0f" >{notification.notify}</Text>
                                    </View>
                                    <View style={{margin:10}} >
                                        <TouchableOpacity onPress={() => this.removeNotification(index)}>
                                        <MCIcon name='delete' size={28} color="#ff6868" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{flex:1}}></View>
                                <View style={styles.dateTimeFlexer}>
                                    <View style={{marginLeft:10}} >
                                        <Text color="#c1c1c1" size={12} >{notification.date}</Text>
                                    </View>
                                    <View style={{flex:1}}></View>
                                    <View style={{marginRight:10}} >
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
    dateTimeFlexer:{
        display:"flex",
        flexDirection:"row"
    }
});