import React, { Component } from 'react'
import { Dialogflow_V2 } from 'react-native-dialogflow';
import ChatComponent from './ChatComponent'
import { dialogflowConfig } from './env';

const BOT_USER = {
    _id: 2,
    name: 'FAQ Bot',
    avatar: 'https://i.imgur.com/7k12EPD.png'
};

export default class Bot extends Component {
    state = {
        value:"",
        messages: [
            {
                _id: 1,
                data: `Hi! I am the Cop bot 🤖 from Valar Codulis.\n\nHow may I help you today?`,
                timestamp: "09:20",
                // user: BOT_USER // <= note this
                type:"received"
            }
        ],
    };
    componentDidMount() {
        Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            Dialogflow_V2.LANG_ENGLISH_US,
            dialogflowConfig.project_id
        );
    }
    handleGoogleResponse(result) {
        console.log(result)
        let text = result.queryResult.fulfillmentMessages[0].text.text[0];
        this.sendBotResponse(text);
    }
    onSend(messages) {
        this.setState(previousState => ({
            messages: [...previousState.messages, { type: "sent", data: this.state.value, timestamp: "09:02 pm" }],
            value:""
        }));

        let message = this.state.value;
        Dialogflow_V2.requestQuery(
            message,
            result => this.handleGoogleResponse(result),
            error => console.log(error)
        );
    }

    onChangeText = (value) => {

        this.setState({
            value
        })

    }

    sendBotResponse(data) {
        let msg = {
            _id: this.state.messages.length + 1,
            data,
            timestamp: "09:20",
            // user: BOT_USER
            type:"received"
        };

        this.setState(previousState => ({
            messages: [...previousState.messages, msg]
        }));
    }

    render() {
        return (
            <ChatComponent
            value={this.state.value}
                allChats={this.state.messages}
                sendMessageFunction={messages => this.onSend(messages)}
                user={{
                    _id: 1
                }}
                onChangeText={this.onChangeText}
            />
        )
    }
}
