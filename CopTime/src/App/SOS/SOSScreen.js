import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback, TouchableHighlight } from 'react-native'
import Torch from 'react-native-torch';

export default class SOSScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            torch: 1,
            close:false
        }
    }

    startFlash = () => {
        this.setState({torch:1,close:true})
        Torch.switchState(true);
        setTimeout(() => {this.continueFlash() },500);
    }
    
    continueFlash = () => {
        Torch.switchState(false);
        setTimeout(()=> {if(this.state.torch==1){
            this.startFlash()
        }},500);
    }

    stopFlash = () => {
        this.setState({torch:0,close:false})
        this.continueFlash()
    }

    render() {
        return (
            <View style={styles.outer}>
                 <View style={{
                        padding: 20
                    }}>
                        <Text style={styles.infoSOS}>Tap on the alert button to create sound and flash alert</Text>
                    </View>
                <TouchableWithoutFeedback onPress={()=>this.state.close?this.stopFlash():this.startFlash()}>
                    <View style={styles.imageAlert}>
                        <Image
                            source={this.state.close?require('../../Static/assets/imgs/alert.png'):require('../../Static/assets/imgs/stop-alert.png')}
                            style={{
                                // width:Dimensions.get('screen').width-150,
                                alignSelf: 'center'
                            }}
                        />
                    </View>
                </TouchableWithoutFeedback>
                    <View style={{
                        padding: 15, marginBottom: 5, borderRadius: 5,
                        elevation: 1,marginTop:40,borderColor:'#ffffff',borderWidth:0.01
                    }}>
                        <Text style={styles.textSOS}>SOS has been successfully created and sent to your emergency contacts as well as the
                            nearest police station. </Text>
                    </View>
                    <View style={styles.otherAlerts}> 
                    <Image
                            source={require('../../Static/assets/imgs/ambulance.png')}
                            style={{
                                // width:Dimensions.get('screen').width-150,
                                alignSelf: 'center',height:110,width:110,elevation: 5,
                            }}
                        />
                        <View style={{flex:0.5}}></View>
                         <Image
                            source={require('../../Static/assets/imgs/fire.png')}
                            style={{
                                // width:Dimensions.get('screen').width-150,
                                alignSelf: 'center',height:110,width:110,elevation: 5,
                            }}
                        />
                    </View>
                    <View style={styles.infoAlerts}> 
                    <Text style={styles.textOther}>Health Emergency</Text>
                        <View style={{flex:0.5}}></View>
                         <Text style={styles.textOther}>Fire Emergency</Text>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    outer: {
        flex: 1,
        padding:10
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
        marginTop:20
    },
    infoSOS:{
        // marginTop:10,
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Light',
        textAlign: 'center',
    },
    otherAlerts:{
        marginTop:Dimensions.get('screen').height/10,
        flexDirection:'row',
        justifyContent:'center'
    },
    infoAlerts:{
        marginTop:5,
        marginBottom:5,
        flexDirection:'row',
        justifyContent:'center',
        
    },
    textOther:{
        fontSize: 15,
        fontFamily: 'TitilliumWeb-Light',
        textAlign: 'center',
    }
})

