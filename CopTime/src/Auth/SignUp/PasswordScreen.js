import React from "react";
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import Geolocation from 'react-native-geolocation-service'

import PStnSelectScreen from './PStnSelectScreen.js'
import Axios from 'axios';
import { StyleSheet, ImageBackground, Dimensions, StatusBar, KeyboardAvoidingView, Alert, View, Modal, ActivityIndicator, TouchableOpacity } from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import { Button, Input } from "../../Static/components"
import { Images, argonTheme } from "../../Static/constants";
import Modallar from "./Modallar.js";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {

  constructor() {
    super();
    this.state = {
      password: '',
      confPassword: '',
      volunteer: false,
      modalVisible: false,
      modalVisibleShort: false,
      loading: true,
      imgLoading: true,
      pStn: "",
      imgUrl: 'https://img.favpng.com/25/0/20/badge-police-officer-special-police-indian-police-service-png-favpng-bmZPUBHvZtTpXQzhgVTNJ94t6.jpg'
    };
  }



  redirectLogin = (e) => {
    const { password, confPassword } = this.state;

    if (!adhaarNumber) {
      Alert.alert(
        'Enter Credentials',
        'Invalid adhaar credentials , please enter your adhaar number',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
    else {
      this.props.navigation.navigate('Login')
    }
  }

  onLocationSelect = (lat, long) => {
    if (lat != this.state.lat || long != this.state.long)
      this.setState({
        loading: true,
        imgLoading: true
      }, () => {
        this.pStnMapper(lat, long)
      })
  }

  pStnMapper = (lat, long) => {
    var best_result
    console.warn(lat)
    console.warn(long)
    Axios.get(`https://maps.googleapis.com/maps/api/place/search/json?location=${lat},${long}&rankby=distance&types=police&sensor=false&key=AIzaSyDRG1QPqTaoF3M-6mm7A4A6b__WzC7Bhws`)
      .then(res => {
        best_result = res.data.results[0]
        // console.warn('lol')
        this.setState({
          loading: false,
          pStn: best_result,
        })
        if (best_result.photos) {
          Axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=${best_result.photos[0].photo_reference}&key=AIzaSyDRG1QPqTaoF3M-6mm7A4A6b__WzC7Bhws`)
            .then(res => {
              // console.warn(res.request.responseURL)
              this.setState({
                imgLoading: false,
                imgUrl: res.request.responseURL
              })
            })
            .catch(res => {
              this.setState({
                imgLoading: false,
                imgUrl: 'https://img.favpng.com/25/0/20/badge-police-officer-special-police-indian-police-service-png-favpng-bmZPUBHvZtTpXQzhgVTNJ94t6.jpg'
              })
            })
        } else {
          this.setState({
            imgLoading: false,
            imgUrl: 'https://img.favpng.com/25/0/20/badge-police-officer-special-police-indian-police-service-png-favpng-bmZPUBHvZtTpXQzhgVTNJ94t6.jpg'
          })
        }
      })
  }


  componentDidMount() {
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
    }).catch((error) => {
      console.log(error.message); // error.message => "disabled"
    });


    Geolocation.getCurrentPosition(pos => {
      // console.warn(pos.coords.latitude)
      // console.warn(pos.coords.longitude)
      this.setState({
        lat: pos.coords.latitude,
        long: pos.coords.longitude
      })
      this.pStnMapper(pos.coords.latitude, pos.coords.longitude)
    },
      err => {
        console.log(err)
      })
  }



  setModalVisible = (modalVisible) => {
    this.setState({
      modalVisible
    })
  }


  setModalVisibleShort = (modalVisibleShort) => {
    this.setState({
      modalVisibleShort
    })
  }


  render() {
    return (
      <Block flex middle>
        <Modallar modalVisibleShort={this.state.modalVisibleShort} setModalVisibleShort={this.setModalVisibleShort} pStn={this.state.pStn} imgUrl={this.state.imgUrl} />
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              <Block flex={0.25} middle style={styles.socialConnect}>
                <Text color="#8898AA" size={12}>
                  Uh-oh, missed something?
                </Text>
                <Block row style={{ marginTop: theme.SIZES.BASE }}>
                  <Button style={{ ...styles.socialButtons }} onPress={() => this.props.navigation.goBack(null)} >
                    <Block row>
                      <MaterialCommunityIcons
                        name="keyboard-backspace"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>Go Back</Text>
                    </Block>
                  </Button>
                </Block>
              </Block>
              <Block flex  >
                <Block flex={0.17} middle style={{ marginTop: 5, marginBottom: 5 }} >
                  <Text color="#8898AA" size={12}>
                    Set your password
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.85} style={{ marginBottom: 15 }} >
                      <Input
                        borderless
                        password
                        placeholder="Enter password"
                        iconContent={
                          <MaterialCommunityIcons
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="account-card-details"
                            style={styles.inputIcons}
                          />
                        }
                        onChangeText={password => this.setState({ password })}
                      />
                    </Block>
                    <Block width={width * 0.85} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        password
                        placeholder="Re-enter password"
                        iconContent={
                          <MaterialCommunityIcons
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="account-card-details"
                            style={styles.inputIcons}
                          />
                        }
                        onChangeText={confPassword => this.setState({ confPassword })}
                      />
                    </Block>
                    <Block row width={width * 0.70} style={{ marginLeft: 10, marginTop: 10 }} >
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        onPress={() => this.setState(prevState => { return { volunteer: !prevState.volunteer } })}
                        color={argonTheme.COLORS.PRIMARY}
                        label="Act as a volunteer "
                      />
                    </Block>
                    <Block row width={width * 0.80} style={{ margin: 10, marginTop: 20 }} >
                      <View style={{ borderTopColor: "#d1d1d1", borderTopWidth: 1, width: "100%" }} ></View>
                    </Block>
                    <Block middle style={{ marginTop: 15, display: "flex", flexDirection: "row" }} >
                      {
                        this.state.loading ?
                          <ActivityIndicator size="small" color="#00ff00" />
                          :
                          <React.Fragment>
                            <View style={{ marginLeft: 10 }} >
                              <Text>{this.state.pStn.name}</Text>
                            </View>
                            <View style={{ flex: 1 }}></View>
                            <Button
                              color="secondary"
                              onPress={() => { this.setModalVisibleShort(true) }}
                              style={{ width: 70, marginRight: 10 }}
                            >
                              <Text>View</Text>
                            </Button>
                          </React.Fragment>
                      }
                      {
                        this.state.modalVisible ?
                          <PStnSelectScreen modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible} pStnLat={this.state.pStn.geometry.location.lat} pStnLng={this.state.pStn.geometry.location.lng} onLocationSelect={this.onLocationSelect} /> : console.log(this.state.pStn)
                      }
                    </Block>
                    <Block middle style={{ marginTop: 10 }} >
                      <TouchableOpacity onPress={() => { this.setModalVisible(true) }} >
                        <Text color="#8898AA" size={12}>Not your nearest Police station? Click to change</Text>
                      </TouchableOpacity>
                    </Block>
                    <Block middle style={{ marginTop: 10 }} >
                      <Button color="primary" style={styles.createButton} onPress={() => { this.props.navigation.goBack(null) }} >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          Continue
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#c1c1c1"
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});

export default Register;
