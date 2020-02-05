import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Text, TouchableHighlight, TextInput, ToastAndroid, PermissionsAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class ChatComponent extends Component {
    render() {
        return (
            <View style={styles.chatPage}>
                <View style={{ flex: 1 }}>
                    <ScrollView ref={ref => this.scrollView = ref}
                        onContentSizeChange={(contentWidth, contentHeight) => {
                            this.scrollView.scrollToEnd({ animated: true });
                        }}>

                        {
                            this.props.allChats.map(elm => {
                                return (
                                    elm.type == "sent" ? (
                                            <View style={[styles.messageContainer, styles.send]} key={this.props.allChats.indexOf(elm)} >
                                                <View style={[styles.messageTextBox, styles.sendMessageTextBox]} >
                                                    <Text style={styles.sendMessageText} >{elm.data}</Text>
                                                </View>
                                                <View style={styles.timestamp} >
                                                    <Text style={styles.timestampText} >{elm.timestamp}</Text>
                                                </View>
                                            </View>
                                    ) : (
                                                <View style={[styles.messageContainer, styles.receive]} >
                                                    <View style={[styles.messageTextBox, styles.receiveMessageTextBox]} >
                                                        <Text style={styles.receiveMessageText} >{elm.data}</Text>
                                                    </View>
                                                    <View style={[styles.timestamp,{marginLeft:20}]} >
                                                        <Text style={styles.timestampText} >{elm.timestamp}</Text>
                                                    </View>
                                                </View>
                                        )
                                )
                            })
                        }

                    </ScrollView>

                </View>
                <View style={styles.bottomChatBar}>
                    <View style={styles.chatTextBox} elevation={1} >
                        <TextInput style={styles.textMsg} placeholder={'Type a message'} onChangeText={text => { this.props.onChangeText(text) }} value={this.props.value} />
                        <Icon name="attachment" size={26} color="rgb(200,200,200)" style={styles.attachmentIcon} />
                        <Icon name="photo-camera" size={26} color="rgb(200,200,200)" style={styles.cameraIcon} />
                    </View>
                    <TouchableHighlight underlayColor="white" style={styles.chatSendButton} >
                        <View>
                            <Icon name="send" size={24} color="rgb(256,256,256)" style={{ marginLeft: 2 }} onPress={this.props.sendMessageFunction} />
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    chatPage: {
        backgroundColor: "rgb(230,230,230)",
        display: "flex",
        flexDirection: 'column',
        height: "100%"
    },
    bottomChatBar: {
        height: 58,
        display: "flex",
        flexDirection: 'row'
    },
    chatTextBox: {
        margin: 5,
        marginBottom: 6,
        borderRadius: 25,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    chatSendButton: {
        width: 47,
        height: 47,
        borderRadius: 24,
        margin: 5,
        marginLeft: 0,
        backgroundColor: 'rgb(19, 15, 84)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textMsg: {
        fontSize: 17,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1
    },
    pic: {
        margin: 1
    },
    attachmentIcon: {
        marginRight: 5
    },
    cameraIcon: {
        marginRight: 10,
    },
    messageContainer: {
        maxWidth: "80%",
    },
    send: {
        alignSelf: "flex-end",
        // backgroundColor:'rgb(220, 226, 255)',
    },
    receive: {
        alignSelf: "flex-start",
    },
    messageTextBox: {
        margin: 10,
        padding: 9,
        paddingLeft: 13,
        paddingRight: 13,
        borderRadius: 5,
        marginBottom: 2,
    },
    receiveMessageTextBox: {
        backgroundColor: 'rgb(250,250,250)',
        borderTopLeftRadius: 0,
    },
    sendMessageTextBox: {
        borderTopRightRadius: 0,
        // backgroundColor: 'rgb(143,143,143)',
        backgroundColor: 'rgb(123,132,179)',
    },
    timestamp: {
        alignSelf: 'flex-end',
        marginRight: 10,
        marginTop: 0,
    },
    timestampText: {
        fontSize: 10,
        color: "grey"
    },
    upperCallButtons: {
        margin: 10,
        borderRadius: 5
    },
    sendMessageText: {
        color: "rgb(250,250,250)"
    },
    receiveMessageText: {

    }

})
