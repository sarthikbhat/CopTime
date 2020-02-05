import React, { Component } from 'react'
import { Modal, StyleSheet, View, Dimensions, Image, TouchableWithoutFeedback } from 'react-native'
import { Block, Checkbox, Text, theme } from "galio-framework";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import { Button, Input } from "../../Static/components"
import { Images, argonTheme } from "../../Static/constants";

export default class Modallar extends Component {
    render() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.props.modalVisibleShort}
                onRequestClose={() => {
                    this.props.setModalVisibleShort(false);
                }}
            >
                <View style={styles.viewUnderModal} elevation={5} >
                    <Block middle >
                        <Block right style={{ alignSelf: 'flex-end' }} >
                            <TouchableWithoutFeedback onPress={() => { this.props.setModalVisibleShort(false) }}>
                                <MaterialCommunityIcons name='window-close' size={20} color="#a9a9a9" />
                            </TouchableWithoutFeedback>
                        </Block>
                        <Image
                            style={{ width: 300, alignSelf: "center", height: 300, alignSelf: "center" }}
                            source={{ uri: this.props.imgUrl }}
                            // source={{ uri: "https://lh3.googleusercontent.com/p/AF1QipPPJvO1EqwnEiQg3E_r4d2XBtlJpMr8K-bmUTk=s1600-w450" }}
                        />
                        <Text>{this.props.pStn.name}</Text>
                        <Text>{this.props.pStn.vicinity}</Text>
                    </Block>
                </View>
            </Modal>
        )
    }
}


const styles = StyleSheet.create({
    viewUnderModal: {
        // justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: 400,
        width: 330,
        backgroundColor: '#f1f1f1',
        marginTop: 0.23 * Dimensions.get('window').height,
        borderRadius: 3
    }
})