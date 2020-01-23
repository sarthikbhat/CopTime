import React, { Component } from 'react'
import {View, Text,StyleSheet,TouchableOpacity,TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Notification = [
    {
        notify:'Hello, it is first dummy notification !! kjdhkj',
        date:'12/1/2020',
        time:'8:00 am',
    },
    {
        notify:'Hello, it is second dummy notifi !! kjhk',
        date:'12/1/2020',
        time:'8:00 am',
    },
    {
        notify:'Hello, it is third dummy notification !! kgjh jjkdafkj',
        date:'12/1/2020',
        time:'8:00 am',
    },
]

export default class NotificationScreen extends Component {
    constructor() {
        super();
        this.state = {
            notify:Notification
        };
      }

      removeNotification=(index)=>{
        Notification.splice(index,1)
        this.setState({
            notify:Notification
        })
      }
    render() {
        const {notify} = this.state
        return (
            <View style={styles.container}>
                {notify.map((notification, index) => (
                    <View style={styles.outerNotify} key={index}>
                        <View style={styles.innerNotify}>
                            <Text style={styles.notifyText}>{notification.notify}</Text>
                            <TouchableNativeFeedback onPress={()=>this.removeNotification(index)}>
                                <Icon name="close" size={20} color="gray" style={styles.icon}/>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.notifyWhen}>
                            <Text style={styles.time}>{notification.time}</Text>
                            <Text style={styles.date}>{notification.date}</Text>
                        </View>
                    </View>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({

container:{
    flex:1,
    padding:'2%'
},
outerNotify:{
    backgroundColor:'#ffffff',
    padding:'2%',
    elevation:7,
    marginBottom:'2%'
},
innerNotify:{
 flexDirection:'row'   
},
notifyText:{
    flex:1.8,
    fontSize:19
},
icon:{
    paddingLeft:'0.4%'
},
notifyWhen:{
    flexDirection:'row'
},
time:{
    marginTop:'1%',
   flex:1,
   color:'#b5b3ac'
},
date:{
    marginTop:'1%',
    color:'#b5b3ac'  
}
});