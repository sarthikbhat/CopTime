import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, TouchableNativeFeedback, StatusBar, PermissionsAndroid, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Avatar } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import { normalize } from '../../Static/Functions/NormalizeFont'
// import Geolocation from '@react-native-community/geolocation';
import Geolocation from 'react-native-geolocation-service'
import { Text,Icon } from 'galio-framework';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";

import { Images, argonTheme } from "../../Static/Constants";


const { width, height } = Dimensions.get("screen");

const solved = [
    {
        title: 'Theft at Dadar station',
        status: 'Solved',
        time: '12:53 pm',
        caseNo: 'S1244',
        associate: 'Associated To: Ram Mathur'
    },
    {
        title: 'Murder in rahul colony',
        status: 'Solved',
        time: '11:00 am',
        caseNo: 'S2763',
        associate: 'Associated To: Mangal Pandey'
    },
    {
        title: 'Murder in rahul colony',
        status: 'Solved',
        time: '11:00 am',
        caseNo: 'S2763',
        associate: 'Associated To: Mangal Pandey'
    },
]

const thumbMeasure = (width - 48 - 32) / 3;

export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null
        }
    }

    // componentWillMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    //   }
    //   componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    //   }
    //   handleBackButtonClick() {
    //     // BackHandler.exitApp();
    //     return true;
    //   }
    componentDidMount() {
        let currentComponent = this;
        this.requestLocationPermission(currentComponent)
    }

    requestLocationPermission = async (currentComponent) => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Access',
                    message:
                        'CopTime needs to access your location' +
                        'so you can take awesome pictures.',
                    // buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                LocationServicesDialogBox.checkLocationServicesIsEnabled({
                    message: "<h2 style='color: #0af13e'>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
                    ok: "YES",
                    cancel: "NO",
                    enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
                    showDialog: true, // false => Opens the Location access page directly
                    openLocationServices: true, // false => Directly catch method is called if location services are turned off
                    preventOutSideTouch: true, // true => To prevent the location services window from closing when it is clicked outside
                    preventBackClick: true, // true => To prevent the location services popup from closing when it is clicked back button
                    providerListener: false // true ==> Trigger locationProviderStatusChange listener when the location state changes
                }).then((success) => {
                    console.log(success); // success => {alreadyEnabled: false, enabled: true, status: "enabled"}
                    Geolocation.getCurrentPosition(pos => {
                        // console.warn(pos.coords.latitude)
                        // console.warn(pos.coords.latitude)
                        this.setState({
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude
                        })
                    }, err => {
                        console.log(err)
                    }, {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 10000
                    })

                }).catch((error) => {
                    console.log(error.message); // error.message => "disabled"
                });

            } else {
                this.handleBackButtonClick()
            }
        } catch (err) {
            // console.warn(err);
        }
    }

    render() {
        console.log(this.state)
        var { latitude } = this.state
        var { longitude } = this.state
        return (
            <View style={styles.homepage} >
                <StatusBar backgroundColor='#381f93' barStyle='light-content'/>
                {/* <LinearGradient style={[styles.introHome]} colors={['#ff2e2e', '#ff6347', '#ff8035']} elevation={15} > */}
                {/* <View style={[styles.introHome,{width:"100%",backgroundColor:"yellow",marginTop:0}]}> */}
                <View style={styles.introHome}>
                    <ImageBackground
                        source={Images.ProfileBackground}
                        style={{ width: "100%" }}
                        imageStyle={styles.profileBackground}
                    >
                        <View style={styles.homeCentralize} >
                            <View style={styles.title}>
                            <View>
                                <Text style={styles.copTime} >CopTime</Text>
                                <Text style={styles.copTimeInfo} >Administrative App</Text>
                            </View>
                            <View style={{flex:0.9}}></View>
                            <Icon style={styles.icon} name="poweroff" family="AntDesign" color="#fff"  size={20} />
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
                                        onPress={() => { this.props.navigation.navigate('Profile') }}
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
                    </ImageBackground>
                </View>
                {/* </View> */}
                {/* </LinearGradient> */}
                <View style={styles.lowerHome} >

                    <ScrollView >
                        {/* <View style={styles.Help} elevation={1} > */}
                        {solved.map((cases, index) => (
                            <View style={styles.outerNotify} key={index} >
                                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Chat')} style={styles.outerNotifyTouch} >
                                    <View style={styles.innerNotify} >
                                        <View style={styles.rowFlexer}>
                                            <View style={{ flex: 1 }} >
                                            </View>
                                            <View style={styles.complaintNumber}>
                                                <Text color="#0f0f0f">{cases.caseNo}</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text color="rgb(130,130,130)" size={15}>{cases.title}</Text>
                                        </View>
                                        <View>
                                            <Text color="#9e9a9a" style={{ marginTop: 5 }} size={13}>{cases.associate}</Text>
                                        </View>
                                        <View style={{ flex: 1 }}></View>
                                        <View style={styles.dateTimeFlexer}>
                                            <View style={{ marginLeft: 10 }} >
                                                <Text color="#c1c1c1" size={12} style={{ marginLeft: -9 }}>{cases.status}</Text>
                                            </View>
                                            <View style={{ flex: 1 }}></View>
                                            <View style={{ marginRight: 10 }} >
                                                <Text color="#c1c1c1" size={12} style={{ marginLeft: -9 }}>{cases.time}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        ))}
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
        width: "100%",
        alignSelf: "center",
        borderBottomRightRadius: 0.5 * Dimensions.get('window').width,
        borderBottomLeftRadius: 0.5 * Dimensions.get('window').width,
        // backgroundColor: "tomato",
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
        marginTop: 20,
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
        // flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
        // margin: 20,
        marginBottom: 10,
        backgroundColor: 'white',
        // overflow: 'hidden'
    },
    HelpInner: {
        padding: 30,
        flex: 1,
        alignItems: 'center'
    },
    lowerHome: {
        flex: 1,
        // backgroundColor:"#eee"
    },
    profileBackground: {
        width: width,
        height: height / 2
    },
    outerNotify: {
        display: 'flex',
        justifyContent: 'center',
        width: 0.85 * Dimensions.get('window').width,
        backgroundColor: '#ffffff',
        elevation: 3,
        marginLeft: 24,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 4,
        //   overflow: 'hidden'
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
    },
    outerNavUpper: {
        flexDirection: 'row',
    },
    complaintNumber: {
        borderRadius: 2,
        width: 100,
        height: 30,
        marginTop: -21,
        backgroundColor: '#fff',
        alignItems: 'center',
        elevation: 2,
        borderWidth: 0,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    title:{
        flexDirection:'row',
        marginTop:-5
    },
    icon:{
        marginTop:35
    }
})

