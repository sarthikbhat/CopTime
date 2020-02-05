import React from 'react'
import { View, StyleSheet, ScrollView, Text, TouchableHighlight, TextInput, ToastAndroid, PermissionsAndroid } from 'react-native'
import Iocon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import Geolocation from 'react-native-geolocation-service'
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import ChatComponent from './ChatComponent'

class ChatScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name', 'Chat'),
            headerRight: () => (
                <React.Fragment>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgb(250,250,250)')} >
                        <View style={styles.upperCallButtons}>
                            <Iocon name="md-videocam" size={25} color="rgb(255,255,255)" />
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgb(250,250,250)')}>
                        <Iocon name="md-call" size={25} color="rgb(255,255,255)" style={styles.upperCallButtons} />
                    </TouchableNativeFeedback>
                </React.Fragment>
            ),
            headerStyle: {
                backgroundColor: 'rgb(16,12,70)',
            },
            headerTintColor: 'rgb(255,255,255)',
            headerTitleStyle: {
                fontWeight: '700',
            },
        };
    };

    constructor(props) {
        super(props)
        this.state = {
            value: "",
            tagged: null,
            allChats: [
            ]
        }
    }
    /*

                {
                    type: "sent",
                    data: "ABC1qwertyuiopqwertyuiopqwerty",
                    timestamp: "09:02 pm"
                },
                {
                    type: "received",
                    data: "ABC1",
                    timestamp: "09:02 pm"
                }
    */

    onChangeText = (value) => {

        this.setState({
            value
        })

    }

    sendMessageFunction = () => {

        if (this.state.value.trim() != "") {
            var allChats = [...this.state.allChats, { type: "sent", data: this.state.value, timestamp: "09:02 pm" }, { type: "received", data: this.state.value.length, timestamp: "09:02 pm" }]
            this.setState({
                allChats,
                value: ""
            })
        }

    }

    componentDidMount=()=>{
        
        if(this.props.navigation.state.params['sos']==true && this.state.allChats.length==0)
            this.setState({
                allChats:[{
                    type:"sent",
                    data:
`Sent from ${this.props.navigation.state.params['latitude']}, ${this.props.navigation.state.params['longitude']}
                        
This is an SOS alert
Please send help as fast as possible
Thank You`,
                    timestamp:"09:02 pm"
                }]
            })

    }
    

    render() {


        return (
            <ChatComponent allChats={this.state.allChats} value={this.state.value} onChangeText={this.onChangeText} sendMessageFunction={this.sendMessageFunction} />
        );
    }
}


export default ChatScreen;