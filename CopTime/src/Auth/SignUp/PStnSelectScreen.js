// import React, { Component } from 'react'
// import { View, Text, StyleSheet, Modal, TouchableOpacity, Dimensions, Button, Alert, BackHandler, DeviceEventEmitter } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
// // import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";

// import { locatePlace } from '../../store/actions';

// class Modallar extends Component {
//     state = {
//         focussedLocation: {
//             latitude: 19.311342,
//             longitude: 72.853192,
//             latitudeDelta: 0.0122,
//             longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
//         },
//         locationChosen: false
//     }
//     mapLocationHandler = (loc) => {
//         this.map.animateToRegion({
//             ...this.state.focussedLocation,
//             latitude: loc.nativeEvent.coordinate.latitude,
//             longitude: loc.nativeEvent.coordinate.longitude
//         })
//         this.setState({
//             focussedLocation: {
//                 ...this.state.focussedLocation,
//                 latitude: loc.nativeEvent.coordinate.latitude,
//                 longitude: loc.nativeEvent.coordinate.longitude
//             },
//             locationChosen: true
//             // }, this.props.mapSetter(this.state.focussedLocation, this.state.locationChosen))
//         })
//     }
//     locateMeHandler = () => {
//         LocationServicesDialogBox.checkLocationServicesIsEnabled({
//             message: "<h2 style='color: #0af13e'>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
//             ok: "YES",
//             cancel: "NO",
//             enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
//             showDialog: true, // false => Opens the Location access page directly
//             openLocationServices: true, // false => Directly catch method is called if location services are turned off
//             preventOutSideTouch: false, // true => To prevent the location services window from closing when it is clicked outside
//             preventBackClick: false, // true => To prevent the location services popup from closing when it is clicked back button
//             providerListener: false // true ==> Trigger locationProviderStatusChange listener when the location state changes
//         }).then(function (success) {
//             console.log(success); // success => {alreadyEnabled: false, enabled: true, status: "enabled"}
//         }).catch((error) => {
//             console.log(error.message); // error.message => "disabled"
//         });

//         BackHandler.addEventListener('hardwareBackPress', () => { //(optional) you can use it if you need it
//             //do not use this method if you are using navigation."preventBackClick: false" is already doing the same thing.
//             LocationServicesDialogBox.forceCloseDialog();
//         });

//         DeviceEventEmitter.addListener('locationProviderStatusChange', function (status) { // only trigger when "providerListener" is enabled
//             console.log(status); //  status => {enabled: false, status: "disabled"} or {enabled: true, status: "enabled"}
//         });

//         navigator.geolocation.getCurrentPosition(pos => {
//             var obj = {
//                 nativeEvent: {
//                     coordinate: {
//                         latitude: pos.coords.latitude,
//                         longitude: pos.coords.longitude
//                     }
//                 }
//             }
//             this.mapLocationHandler(obj)
//         },
//             err => {
//                 console.log(err)
//             })
//     }
//     doneHandler = () => {
//         if (this.state.locationChosen == true) {
//             this.props.onLocationSelect(this.state.focussedLocation.latitude, this.state.focussedLocation.longitude)
//             this.props.setModalVisible(false)
//         }
//         else {
//             Alert.alert(
//                 'No Input',
//                 'Please Select any location first',
//                 [
//                     { text: 'Back To Home Page', onPress: () => this.props.setModalVisible(false) },
//                     {
//                         text: 'Cancel',
//                         onPress: () => console.log('Cancel Pressed'),
//                         style: 'cancel',
//                     },
//                     { text: 'OK', onPress: () => console.log('OK Pressed') },
//                 ],
//                 { cancelable: true },
//             );
//         }
//     }

//     componentWillUnmount() {
//         LocationServicesDialogBox.stopListener();
//     }


//     render() {
//         var marker = null
//         if (this.state.locationChosen != false) {
//             marker = <MapView.Marker coordinate={this.state.focussedLocation} />
//         }
//         return (
//             <Modal
//                 animationType="slide"
//                 transparent={false}
//                 visible={this.props.modalVisible}
//                 onRequestClose={() => {
//                     this.props.setModalVisible(false);
//                 }}>
//                 <View style={{ flex: 1, display: "flex", alignItems: "center" }}>
//                     <View style={styles.header} >
//                         <Icon style={styles.backIcon} name="md-arrow-round-back" size={23} color="#454545" onPress={() => this.props.setModalVisible(false)} />
//                         <Text style={styles.helper}>Choose on Map</Text>
//                     </View>
//                     <View style={{flex:1,display:"flex",width:"100%"}}>
//                     <MapView
//                         provider={PROVIDER_GOOGLE}
//                         style={styles.mapViewer}
//                         initialRegion={this.state.focussedLocation}
//                         // region={this.state.focussedLocation}
//                         zoomEnabled
//                         loadingEnabled
//                         onPress={this.mapLocationHandler}
//                         ref={ref => this.map = ref}
//                     >
//                         {marker}
//                     </MapView>
//                     </View>
//                     <View style={{ height:100 }} >
//                         <Text style={styles.helper}>OR </Text>
//                         <View style={styles.button}>
//                             <Button onPress={this.locateMeHandler} title="Locate Me" />
//                         </View>
//                     </View>
//                 </View>
//                 <TouchableOpacity onPress={this.doneHandler} >
//                     <View elevation={5} style={styles.done}>
//                         <Text style={{ fontSize: 20, color: "white" }}>Done</Text>
//                     </View>
//                 </TouchableOpacity>
//             </Modal>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     // container: {
//     //     width: "100%",
//     //     alignItems: "center"
//     // },
//     header: {
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         elevation: 10,
//         height:50
//     },
//     mapViewer: {
//         width: "100%",
//         // height: 400
//         flex: 1
//     },
//     button: {
//         margin: 8,
//         marginTop:0,
//         marginBottom:15
//     },
//     helper: {
//         fontSize: 20,
//         margin: 10,
//         flex: 1,
//         textAlign: "center"
//     },
//     done: {
//         // flex:1,
//         backgroundColor: "#1194f6",
//         width: "100%",
//         padding: 11,
//         alignItems: "center",
//     },
//     backIcon: {
//         marginLeft: 10
//     }
// })


// export default Modallar