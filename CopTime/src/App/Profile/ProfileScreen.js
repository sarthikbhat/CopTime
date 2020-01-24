import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableNativeFeedback, StatusBar, PixelRatio, Platform } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'
import { normalize } from '../../Static/Functions/NormalizeFont'

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.profile} >
            <StatusBar backgroundColor='#ff2e2e' barStyle='light-content' />
            <LinearGradient style={[styles.introProfile]} colors={['#ff2e2e', '#ff6347', '#ff8035']} elevation={15} >
                <View style={styles.profileCenter} >
                    <View style={{ flex: 1 }}>
                        <Text style={styles.copTime} >CopTime</Text>
                        <Text style={styles.copTimeInfo} >Vigilante at your service</Text>
                    </View>
                    <View style={styles.user} >
                        <View style={styles.userPlusGreet} >
                            <Text style={styles.userName} >Arun Sharma</Text>
                        </View>
                        <View style={styles.IconBorder} elevation={10} >
                            <Avatar
                                rounded
                                size="medium"
                                title="AT"
                                onPress={() => this.props.navigation.navigate('Profile')}
                                activeOpacity={0.7}
                            />
                        </View>
                    </View>
                </View>   
            </LinearGradient>
            <View style={styles.tabsOuter}>
                <View style={styles.tabs}>
                    <Text style={styles.tabText1}>Adhaar Number</Text>
                    <View style={{flex:1}}></View>
                    <Text style={styles.tabText2}>4545-4545-4545-4545</Text>
                </View>
                <View style={styles.tabs}>
                    <Text style={styles.tabText1}>Phone Number</Text>
                    <View style={{flex:1}}></View>
                    <Text style={styles.tabText2}>901-877-6565</Text>
                </View>
               
                    <TouchableNativeFeedback onPress={()=>console.warn('works')}>
                    <View style={styles.tabs}>
                    <Text style={styles.tabText1}>Change Password</Text>
                    </View>
                    </TouchableNativeFeedback>
                
                    <TouchableNativeFeedback onPress={()=>console.warn('Sign Out works')}>
                    <View style={styles.tabs}>
                    <Text style={[styles.tabText1,styles.signOut]}>Sign Out</Text>
                    <Icon name="sign-out" size={25} color="red" style={[styles.tabText1,styles.signOut,styles.icon]}/>
                    </View>
                    </TouchableNativeFeedback>
            </View>
        </View>
    )
}
}

const styles = StyleSheet.create({
profile: {
    flex: 1,
},
introProfile: {
    height: "25%",
    width: "120%",
    alignSelf: "center",
    borderBottomRightRadius: Dimensions.get('window').width,
    borderBottomLeftRadius: Dimensions.get('window').width,
    backgroundColor: "tomato",
    display: "flex",
    alignItems: 'center',
    marginTop: "-20%",
    paddingTop: "10%",
},
profileCenter: {
    width: Dimensions.get('window').width-80,
    // padding: 10,
    height: "100%",
    display: 'flex',
    flexDirection: 'column'
},
IconBorder: {
    padding: 5,
    borderRadius: 30,
    backgroundColor: "white"
},
copTime: {
    color: 'rgb(245,245,245)',
    fontSize: 20,
    fontWeight: '700',
    textAlign:'center'
},
copTimeInfo: {
    color: 'rgb(245,245,245)',
    fontSize: 10,
    // marginLeft: 10,
    textAlign:'center'
},
user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    marginTop: -10,
    padding: 50,
    // paddingRight: 5
},
userName: {
    fontSize: normalize(22),
    color: "white",
    padding:10
},
tabsOuter:{
    flex:1,
    padding:10,
    marginTop:30
},
tabs:{
    // padding:'2%',
    height:Dimensions.get('window').height/12,
    // paddingBottom:'1%',
    // paddingLeft:'1%',
    borderBottomWidth:0.5,
    borderBottomColor:'gray',
    flexDirection:'row',
    // elevation:1
},
tabText1:{
    // 
    fontSize:20,
    includeFontPadding:false,
    textAlignVertical:'bottom'
    // padding:'2%',
    // paddingBottom:'1%',
    // paddingLeft:'1%',
},
tabText2:{
    // flex:1,
    fontSize:20,
    includeFontPadding:false,
    textAlignVertical:'bottom',
    // padding:'2%',
    // paddingBottom:'1%',
    // paddingLeft:'1%',
    color:'#888b8f',
},
signOut:{
    color:'red'
},
icon:{
    marginLeft:10
}
})

