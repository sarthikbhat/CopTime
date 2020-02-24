import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import OTPInputView from '@twotalltotems/react-native-otp-input'


import { Button, Input } from "../../Static/components"
import { Images, argonTheme } from "../../Static/Constants";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {

  constructor() {
    super();
    this.state = {
      otp: '',
    };
  }

  setPassword = (e) => {
    const { otp } = this.state;

    //     if(!otp){
    //         Alert.alert(
    //             'Enter Credentials',
    //             'Invalid credentials , please enter your OtP',
    //             [
    //               {text: 'OK', onPress: () => console.log('OK Pressed')},
    //             ],
    //             {cancelable: false},
    //           );
    //     }
    //     else{
    //         this.props.navigation.navigate('Password')
    //     }
    this.props.navigation.navigate('Password')
  }



  render() {
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              <Block flex={0.40} middle style={styles.socialConnect}>
                <Text color="#8898AA" size={12}>
                  Entered wrong UIDAI number?
                </Text>
                <Block row style={{ marginTop: theme.SIZES.BASE }}>
                  <Button style={{ ...styles.socialButtons }} onPress={() => this.props.navigation.goBack()} >
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
                    Enter the OTP received on +91 XXXXXXXX94
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block middle width={width * 0.8} style={{ marginBottom: 15 }}>
                      <OTPInputView
                        style={{ width: '50%', height: 100 }}
                        pinCount={4}
                        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged = {code => { this.setState({code})}}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeFilled={(code => {
                          console.log(`Code is ${code}, you are good to go!`)
                        })}
                      />
                    </Block>

                    <Block middle style={{ marginTop: 15 }} >
                      <Button color="primary" style={styles.createButton} onPress={() => this.setPassword()} >
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
    height: height * 0.55,
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
    borderColor:"#c1c1c1"
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});

export default Register;
