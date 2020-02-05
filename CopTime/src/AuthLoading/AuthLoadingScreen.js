import Geolocation from 'react-native-geolocation-service'
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  PermissionsAndroid
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../Static/constants/Theme";
import Images from "../Static/constants/Images";

class Onboarding extends React.Component {
  componentDidMount = async () => {
    this.requestLocationPermission().then(res => {
      this._bootstrapAsync()
    })
  }

  requestLocationPermission = async () => {
    try {
      const grantedP = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CALL_PHONE,
        {
          title: 'Phone Access',
          message:
            'CopTime needs to access your calls',
          // buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
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
          }, err => {
            console.log(err)
          }, {
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
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
          <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            <Block style={styles.title}>
              <Block>
                <Text color="white" size={55}>
                  Cop
                  </Text>
              </Block>
              <Block>
                <Text color="white" size={55}>
                  Time
                  </Text>
              </Block>
              <Block style={styles.subTitle}>
                <Text color="white" size={16}>
                  Cops and volunteers at your service.
                  </Text>
              </Block>
            </Block>
            <Block center>              
                <Text color="white" size={16} >Loading...</Text>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
  title: {
    marginTop: '-5%'
  },
  subTitle: {
    marginTop: 20
  }
});

export default Onboarding;
