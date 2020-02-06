import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, StatusBar } from 'react-native';
import { Input, Text, Block, theme, Button, Icon } from 'galio-framework';
import { Images, argonTheme } from "../../Static/Constants";

const { width, height } = Dimensions.get("screen");

export default class PSSelector extends Component {
    render() {
        return (
            // <View>
            //     {/* <Button title="Lodge at nearest police station" onPress={() => { this.props.navigation.navigate('ChatBot'), { nearest: true, sos:false } }} />
            //     <TouchableOpacity activeOpacity={1} onPress={() => this.caseView('unsolved')}
            //         style={
            //         {
            //             width: '80%',
            //             margin: 6,
            //             color: "#5e72e5",
            //             justifyContent: 'center', alignItems: 'center',
            //             height: 40,
            //             borderRadius: 2,
            //             shadowColor: 'rgba(0,0,0, .4)', // IOS
            //             shadowOffset: { height: 1, width: 1 }, // IOS
            //             shadowOpacity: 1, // IOS
            //             shadowRadius: 1,
            //             padding: 5,
            //             elevation: 2,
            //             color:'#5e72e5',
            //             backgroundColor:'#fff'
            //         }}>
            //         <Text style={{ fontFamily: 'TitilliumWeb-Light', letterSpacing: 2 ,color:'#5e72e5'}} >Unsolved</Text>
            //     </TouchableOpacity>
            //     <View style={styles.separator} >
            //         <View style={styles.separatorContent} >
            //             <View style={styles.separatorLine} ></View>
            //             <Text style={styles.separatorText} > OR </Text>
            //             <View style={styles.separatorLine} ></View>
            //         </View>
            //     </View>
            //     <Button title="Lodge at registered police station" onPress={() => { this.props.navigation.navigate('ChatBot'), { nearest: false, sos: false } }} />
            // </View> */}
            <Block flex middle>
                <StatusBar hidden />
                <ImageBackground
                    source={Images.Onboarding}
                    style={{ width, height, zIndex: 1 }}
                >
                    <Block flex middle>
                        <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('ChatBot'), { nearest: true, sos: false } }}
                            style={
                                {
                                    width: '70%',
                                    // margin: 6,
                                    color: "#5e72e5",
                                    justifyContent: 'center', alignItems: 'center',
                                    height: 50,
                                    borderRadius: 4,
                                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                                    shadowOffset: { height: 1, width: 1 }, // IOS
                                    shadowOpacity: 1, // IOS
                                    shadowRadius: 1,
                                    padding: 5,
                                    elevation: 4,
                                    color: '#5e72e5',
                                    backgroundColor: '#fff',
                                    fontWeight: '600',
                                    overflow: "hidden"
                                }}>
                            <Text style={{ fontFamily: 'TitilliumWeb-Light', color: '#6a7ce6' }} size={16} bold>Lodge At Nearest Police Station</Text>
                        </TouchableOpacity>
                        <View style={styles.separator} >
                            <View style={styles.separatorContent} >
                                <View style={[styles.separatorLine, {
                                    width: '30%'
                                }]} ></View>
                                <Text style={styles.separatorText} > OR </Text>
                                <View style={[styles.separatorLine, {
                                    width: '30%'
                                }]} ></View>
                            </View>
                        </View>
                        <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('ChatBot'), { nearest: false, sos: false } }}
                            style={
                                {
                                    width: '70%',
                                    // margin: 6,
                                    color: "#5e72e5",
                                    justifyContent: 'center', alignItems: 'center',
                                    height: 50,
                                    borderRadius: 4,
                                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                                    shadowOffset: { height: 1, width: 1 }, // IOS
                                    shadowOpacity: 1, // IOS
                                    shadowRadius: 1,
                                    padding: 5,
                                    elevation: 4,
                                    color: '#5e72e5',
                                    backgroundColor: '#fff',
                                    fontWeight: '600',
                                    overflow: "hidden"
                                }}>
                            <Text style={{ fontFamily: 'TitilliumWeb-Light', color: '#6a7ce6' }} size={16} bold>Lodge At Registered Police Station</Text>
                        </TouchableOpacity>
                    </Block>
                </ImageBackground>
            </Block>
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
        borderTopColor: "#ada3a3",
        borderTopWidth: 1,
        width: "40%",
        marginLeft: 10,
        marginRight: 10
    },
    separatorText: {
        color: "#fff"
    },
})