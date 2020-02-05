import React from 'react';
import { Container, Content, Form, Text, Button, Icon, ListItem, CheckBox, Body } from 'native-base';
import { StyleSheet, View, Alert, TouchableNativeFeedback, ActivityIndicator, Image } from 'react-native';
import { Button as RNButton } from 'react-native'
import { OutlinedTextField } from 'react-native-material-textfield';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import Geolocation from 'react-native-geolocation-service'

import PStnSelectScreen from './PStnSelectScreen.js'
import Axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

export default class PasswordScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      confPassword: '',
      volunteer: false,
      modalVisible: false,
      loading: true,
      imgLoading: true
    };
  }

  setModalVisible = (modalVisible) => {
    this.setState({
      modalVisible
    })
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
    // Axios.get(`https://maps.googleapis.com/maps/api/place/search/json?location=${lat},${long}&rankby=distance&types=police&sensor=false&key=AIzaSyCgBROiBnx1Ql59mEdqcJl0RiWj2KEyec8`)
    //   .then(res => {
    //     best_result = res.data.results[0]
    //     console.warn('lol')
    //     this.setState({
    //       loading: false,
    //       pStn: best_result,
    //     })
    //     if (best_result.photos) {
    //       Axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=${best_result.photos[0].photo_reference}&key=AIzaSyCgBROiBnx1Ql59mEdqcJl0RiWj2KEyec8`)
    //         .then(res => {
    //           console.warn(res.request.responseURL)
    //           this.setState({
    //             imgLoading: false,
    //             imgUrl: res.request.responseURL
    //           })
    //         })
    //         .catch(res => {
    //           this.setState({
    //             imgLoading: false,
    //             imgUrl: 'https://img.favpng.com/25/0/20/badge-police-officer-special-police-indian-police-service-png-favpng-bmZPUBHvZtTpXQzhgVTNJ94t6.jpg'
    //           })
    //         })
    //     } else {
    //       this.setState({
    //         imgLoading: false,
    //         imgUrl: 'https://img.favpng.com/25/0/20/badge-police-officer-special-police-indian-police-service-png-favpng-bmZPUBHvZtTpXQzhgVTNJ94t6.jpg'
    //       })
    //     }
    //   })
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
      console.warn(pos.coords.latitude)
      console.warn(pos.coords.longitude)
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



  render() {
    return (
      <ScrollView>
        <Container style={styles.container}>
          <Content contentContainerStyle={{ flex: 1, padding: '5%' }}>
            <Form styles={styles.form}>
              <View style={styles.l}>
                <OutlinedTextField
                  label='Password'
                  keyboardType='default'
                  onChangeText={password => this.setState({ password })}
                />
                <OutlinedTextField
                  label='Confirm Password'
                  keyboardType='default'
                  onChangeText={confPassword => this.setState({ confPassword })}
                />
                <Button iconRight rounded primary style={styles.buttonText} onPress={() => this.redirectLogin()}>
                  <Text>Next</Text>
                  <Icon name='arrow-forward' />
                </Button>
              </View>
              <ListItem style={styles.checkBox}>
                <CheckBox
                  onPress={() => this.setState(prevState => { return { volunteer: !prevState.volunteer } })}
                  checked={this.state.volunteer} />
                <Body>
                  <Text>Do you want to act as a volunteer?</Text>
                </Body>
              </ListItem>
              <Text>your nearest police station is </Text>
              {this.state.loading ?
                <ActivityIndicator size="small" color="#00ff00" />
                :
                <React.Fragment>
                  <Text>{this.state.pStn.name}</Text>
                  <Text>{this.state.pStn.vicinity}</Text>
                  {this.state.imgLoading ?
                    <ActivityIndicator size="small" color="#00ff00" />
                    :
                    <Image
                      style={{ width: 300, alignSelf: "center", height: 300, alignSelf: "center" }}
                      // source={{ uri: this.state.imgUrl }}
                    source={{ uri: "https://lh3.googleusercontent.com/p/AF1QipPPJvO1EqwnEiQg3E_r4d2XBtlJpMr8K-bmUTk=s1600-w450" }}
                    />
                  }
                  {/* <TouchableNativeFeedback onPress={() => { this.setModalVisible(true) }}> */}
                  {/* <View> */}
                  <RNButton onPress={() => { this.setModalVisible(true) }} title="Click to Change" />
                  {/* </View> */}
                  {/* </TouchableNativeFeedback> */}
                </React.Fragment>
              }
              {
                this.state.modalVisible ?
                  <PStnSelectScreen modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible} pStnLat={this.state.pStn.geometry.location.lat} pStnLng={this.state.pStn.geometry.location.lng} onLocationSelect={this.onLocationSelect} /> : console.log(this.state.pStn)
              }
            </Form>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
  },
  textField: {
  },
  buttonText: {
    marginTop: '5%',
    justifyContent: "center",
    width: '50%',
    alignSelf: "center",
    backgroundColor: "#2196f3"
  },
  createClick: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: '500'
  },
  l: {
    backgroundColor: '#ffff',
    padding: '7%',
    elevation: 1
  },
  checkBox: {
    marginLeft: '10%',
  }
})
