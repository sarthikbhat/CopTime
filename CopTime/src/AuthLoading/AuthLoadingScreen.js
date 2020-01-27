import React, { Component } from 'react'
import { View, Text, PermissionsAndroid, BackHandler } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";

export default class AuthLoadingScreen extends Component {

  componentDidMount=async()=>{
    this.requestLocationPermission().then(res=>{
      this._bootstrapAsync()
    })
  }

  requestLocationPermission = async () => {
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
        }).then(function (success) {
          console.log(success); // success => {alreadyEnabled: false, enabled: true, status: "enabled"}
          Geolocation.getCurrentPosition(pos => {
              console.log(pos)
              console.log('aao')
            console.warn(pos.coords.latitude)
            console.warn(pos.coords.latitude)
          },err=>{
              console.log(err)
          },{
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 10000
          })
          return null

        }).catch((error) => {
          console.log(error.message); // error.message => "disabled"
          return null;
        });

      } else {
        this.handleBackButtonClick()
      }
    } catch (err) {
      console.warn(err);
      return null
    }
  }
  
  _bootstrapAsync = async () => {
    const userToken = undefined
    // const userToken = await AsyncStorage.getItem('userToken');
    // const wait= await this.waiter(3)
    function wait(ms) {
      var start = new Date().getTime();
      var end = start;
      while (end < start + ms) {
        end = new Date().getTime();
      }
    }
    wait(1300)
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };


  render() {
    return (
      <View style={{ width: "100%", height: "100%", backgroundColor: 'tomato' }} >
        <Text>Helo ALS</Text>
      </View>
    )
  }
}
