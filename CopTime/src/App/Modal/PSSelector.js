import React, { Component } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

export default class PSSelector extends Component {
    render() {
        return (
            <View>
                <Button title="Lodge at nearest police station" onPress={() => { this.props.navigation.navigate('ChatBot'), { nearest: true, sos:false } }} />
                <View style={styles.separator} >
                    <View style={styles.separatorContent} >
                        <View style={styles.separatorLine} ></View>
                        <Text style={styles.separatorText} > OR </Text>
                        <View style={styles.separatorLine} ></View>
                    </View>
                </View>
                <Button title="Lodge at registered police station" onPress={() => { this.props.navigation.navigate('ChatBot'), { nearest: false,sos:false } }} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    separator: {
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center'
    },
    separatorContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    separatorLine: {
        borderTopColor: "rgb(150,150,150)",
        borderTopWidth: 1,
        width: "40%",
        marginLeft: 10,
        marginRight: 10
    },
    separatorText: {
        color: "rgb(130,130,130)"
    },
})