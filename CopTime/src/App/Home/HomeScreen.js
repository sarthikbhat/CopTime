import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableNativeFeedback, StatusBar, PixelRatio, Platform } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Avatar } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import { normalize } from '../../Static/Functions/NormalizeFont'

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.homepage} >
                <StatusBar backgroundColor='#ff2e2e' barStyle='light-content' />
                <LinearGradient style={[styles.introHome]} colors={['#ff2e2e', '#ff6347', '#ff8035']} elevation={15} >
                    <View style={styles.homeCentralize} >
                        <View>
                            <Text style={styles.copTime} >CopTime</Text>
                            <Text style={styles.copTimeInfo} >Vigilante at your service</Text>
                        </View>
                        <View style={{ flex: 2 }} ></View>
                        <View style={styles.user} >
                            <View style={styles.userPlusGreet} >
                                <Text style={styles.userName} >Arun</Text>
                                <Text style={styles.userName} >Good Morning!</Text>
                            </View>
                            <View style={{ flex: 1 }} ></View>
                            <View style={styles.IconBorder} elevation={10} >
                                <Avatar
                                    rounded
                                    size="large"
                                    title="AT"
                                    onPress={() => console.log("Works!")}
                                    activeOpacity={0.7}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 4 }} ></View>
                        <View style={styles.locView} >
                            <MaterialIcons name="location-on" size={20} color={"rgb(235,235,235)"} />
                            <Text style={styles.setCurrHome} >Set current location as your home location</Text>
                        </View>
                        <View style={{ flex: 5 }} ></View>
                    </View>
                </LinearGradient>
                <View style={styles.lowerHome} >
                    <ScrollView >
                        <View style={styles.Help} elevation={1} >
                            <TouchableNativeFeedback onPress={() => { this.props.navigation.navigate('Chat') }} style={styles.touchableHelp}>
                                <View style={styles.HelpInner} >
                                    <Text>SOS</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.Help} elevation={1} >
                            <TouchableNativeFeedback onPress={() => { this.props.navigation.navigate('Modal',{disabled:true,value:true} )}} style={styles.touchableHelp}>
                                <View style={styles.HelpInner} >
                                    <Text>Urgent Help</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.Help} elevation={1} >
                            <TouchableNativeFeedback onPress={() => { this.props.navigation.navigate('Modal',{disabled:false,value:false}) }} style={styles.touchableHelp}>
                                <View style={styles.HelpInner} >
                                    <Text>Lodge a complaint</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homepage: {
        flex: 1,
    },
    introHome: {
        height: "53%",
        width: "170%",
        alignSelf: "center",
        borderBottomRightRadius: Dimensions.get('window').width * 12,
        borderBottomLeftRadius: Dimensions.get('window').width * 12,
        backgroundColor: "tomato",
        display: "flex",
        alignItems: 'center',
        marginTop: "-10%",
        paddingTop: "10%",
    },
    homeCentralize: {
        width: Dimensions.get('window').width,
        padding: 10,
        height: "100%",
        display: 'flex',
        flexDirection: 'column'
    },
    copTime: {
        color: 'rgb(245,245,245)',
        fontSize: 30,
        fontWeight: '700'
    },
    copTimeInfo: {
        color: 'rgb(245,245,245)',
        fontSize: 10,
        marginLeft: 30,
    },
    user: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        paddingLeft: 5,
        paddingRight: 5
    },
    userPlusGreet: {
        display: "flex",
        flexDirection: "column"
    },
    userName: {
        fontSize: normalize(23),
        color: "white"
    },
    IconBorder: {
        padding: 5,
        borderRadius: 30,
        backgroundColor: "white"
    },
    setCurrHome: {
        fontSize: normalize(10),
        color: "rgb(235,235,235)",
    },
    locView: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 25,
    },
    touchableHelp: {
        borderRadius: 10
    },
    Help: {
        alignSelf: "center",
        width: 0.85 * Dimensions.get('window').width,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 20,
        marginBottom: 10,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    HelpInner: {
        padding: 30,
        flex: 1,
        alignItems: 'center'
    },
    lowerHome: {
        flex: 1
    }
})
