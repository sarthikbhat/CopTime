import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Dimensions, TouchableWithoutFeedback, ToastAndroid, StatusBar } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Torch from 'react-native-torch';
import Sound from 'react-native-sound'

var interval;
export default class SOSScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name', 'SOS'),
            headerStyle: {
                backgroundColor: '#ff0000',
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
            contact: [],
            torch: 1,
            close: false,
            render: true,
            colorIcon: '#ff0000',
            color: 1,
            sound: true,
            soundColor: true,
            loading:false
        }
    }

    componentDidMount = () => {
        ToastAndroid.showWithGravityAndOffset(
            'SOS has been successfully sent to the nearest police station',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
        this.hello = new Sound(require('./Emergency.mp3'), (error) => {
            if (error) {
                console.warn('failed to load the sound', error);
            }
            else {
                console.warn('Loaded Successfully')
            }
        });
        const temp = [
            {
                name: 'Sarthik Bhat',
                number: '7889776138'
            },

            {
                name: 'Sanjay Nayak',
                number: '7977468164'
            },
            {
                name: 'Romil Shah',
                number: '7977949377'
            }
        ]

        for (let i = 0; i < temp.length; i++) {
            setTimeout(() => {
                const contact = [...this.state.contact, temp[i]]
                this.setState({
                    contact
                })
            }, 100 + (i * 1000));
        }
    }

    componentWillUnmount = () => {
        this.setState({
            contact: []
        })
    }

    startFlash = () => {
        this.setState({ color: 0, torch: 1, close: true, colorIcon: '#fff' })
        Torch.switchState(true);
        setTimeout(() => { this.continueFlash() }, 500);
    }

    continueFlash = () => {
        Torch.switchState(false);
        this.setState({ color: 1, colorIcon: '#ff0000' })
        setTimeout(() => {
            if (this.state.torch == 1) {
                this.startFlash()
            }
        }, 300);
    }

    stopFlash = () => {
        this.setState({ color: 1, torch: 0, close: false, colorIcon: '#ff0000' })
        this.continueFlash()
    }

    soundEffect = () => {
        const { sound } = this.state;
        if (sound) {
            this.startSound()
        }
        else {
            this.stopSound()
        }
        this.setState({
            sound: !sound
        })
    }

    startSound = () => {
        this.hello.play((success) => {
            if (!success) {
                console.warn('Sound did not play')
            }
            else {
                console.warn("Success")
            }
        })
        this.hello.setNumberOfLoops(-1);

        interval = setInterval(() => {
            this.setState({
                soundColor: !this.state.soundColor
            })
        },300);
    }

    stopSound = () => {
        clearInterval(interval)
        this.hello.stop()
        this.setState({
            sound: 1,
            soundColor: true
        })
    }

    render() {
        const { color, soundColor } = this.state
        return (
            <ScrollView contentContainerStyle={styles.outer}>
                <StatusBar backgroundColor="#ff0000" barStyle="light-content" />
                <View style={styles.emergencyComponent}>
                    <TouchableWithoutFeedback onPress={() => this.state.close ? this.stopFlash() : this.startFlash()}>
                        <View style={color == 1 ? newColor1.SOScompenents : newColor2.SOScompenents}>
                            <Ionicons style={color == 1 ? newColor1.icon : newColor1.icon} name="md-flashlight" size={45} color={this.state.colorIcon} />
                            <Text style={color == 1 ? newColor1.textOther : newColor2.textOther}>Emergency Flashlight</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{ flex: 1 }}></View>
                    <TouchableWithoutFeedback onPress={() => this.soundEffect()}>
                        <View style={soundColor ? newColor1.SOScompenents : newColor2.SOScompenents}>
                            <AntDesign style={soundColor ? newColor1.icon2 : newColor2.icon2} name="sound" size={45} />
                            <Text style={soundColor ? newColor1.textOther : newColor2.textOther}>Emergency SOS Sound</Text>
                        </View>
                    </TouchableWithoutFeedback>


                </View>
                <View style={styles.emergencyTextComponent}>
                    <Text style={styles.emergencyText}>SOS has been successfully sent to:</Text>
                    {
                        this.state.contact.map(ct => (
                            <View style={{
                                padding: 10,
                                flexDirection: 'row'
                            }}>
                                <View style={styles.tick}>
                                    <Ionicons style={styles.tick} name="ios-checkmark-circle" size={33} color="#ff0000" />
                                </View>
                                <View style={styles.ct}>
                                    <Text style={{
                                        fontFamily: 'TitilliumWeb-Light', fontSize: 15
                                    }}>{ct.name}</Text>
                                    <Text style={{
                                        fontFamily: 'TitilliumWeb-Light', fontSize: 13, color: 'gray'
                                    }}>{ct.number}</Text>
                                </View>
                            </View>

                        ))

                    }
                </View>
            </ScrollView>
        )
    }
}

const newColor1 = StyleSheet.create({
    SOScompenents: {
        backgroundColor: '#ffff',
        padding: 10,
        borderRadius: 8,
        borderColor: "#ffff",
        elevation: 5,
        width: Dimensions.get('window').width / 2.5
    },
    icon: {
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
    },
    icon2: {
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        color: '#ff0000',
    },
    textOther: {
        fontSize: 14,
        fontFamily: 'TitilliumWeb-Light',
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold'
    },
})
const newColor2 = StyleSheet.create({
    SOScompenents: {
        backgroundColor: '#ff0000',
        padding: 10,
        borderRadius: 8,
        borderColor: "#ffff",
        elevation: 5,
        width: Dimensions.get('window').width / 2.5
    },
    icon: {
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        color: '#ffff',
    },
    icon2: {
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        color: '#ffff',
    },
    textOther: {
        fontSize: 14,
        fontFamily: 'TitilliumWeb-Light',
        textAlign: 'center',
        padding: 10,
        color: "#fff"
    },
})

const styles = StyleSheet.create({
    outer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        marginTop: -50
    },
    emergencyComponent: {
        flexDirection: 'row',
        padding: 20,
        marginBottom: Dimensions.get('window').height / 20

        // alignSelf:'center'
    },
    emergencyTextComponent: {
        backgroundColor: '#ffff',
        padding: 10,
        borderRadius: 8,
        borderColor: "#ffff",
        elevation: 5,
        // width:Dimensions.get('window').width/2.5
    },
    emergencyText: {
        fontSize: 19,
        paddingLeft: 10,
        paddingTop: 10
        // width:Dimensions.get('window').width/2.5
    },
    tick: {
        // padding:2
        justifyContent: 'center',
        marginRight: 5
    },
    textSOS: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Light',
        textAlign: 'justify',
        // color:'#fff'
    },
    imageAlert: {
        paddingBottom: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: Dimensions.get('screen').width - 175,
        marginBottom: 5,
        borderRadius: 1500,
        elevation: 5,
        marginTop: 20
    },
    infoSOS: {
        // marginTop:10,
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Light',
        textAlign: 'center',
    },
    otherAlerts: {
        marginTop: Dimensions.get('screen').height / 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    infoAlerts: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'center',

    },

})