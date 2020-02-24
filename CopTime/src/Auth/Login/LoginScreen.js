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
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Button, Input } from "../../Static/components"
import { Images, argonTheme } from "../../Static/Constants";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {

  /*onChangeText={phone =>this.setState({phoneNumber:phone})}*/

  constructor() {
    super();
    this.state = {
      phoneNumber: '',
      password: ''
    };
  }

  setLogin = (e) => {
    const { phone, password } = this.state;

    if (!phone && !password) {
      Alert.alert(
        'Enter Credentials',
        'Invalid login credentials , please enter your login details',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
    else {
      this.props.navigation.navigate('App')
    }
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
              <Block flex={0.30} middle style={styles.socialConnect}>
                <Text color="#8898AA" size={12}>
                  New to this app?
                </Text>
                <Block row style={{ marginTop: theme.SIZES.BASE }}>
                  <Button style={{ ...styles.socialButtons}} onPress={()=>this.props.navigation.navigate('SignUp')} >
                    <Block row>
                      <MaterialCommunityIcons
                        name="login"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>Sign Up here</Text>
                    </Block>
                  </Button>
                </Block>
              </Block>
              <Block flex  >
                <Block flex={0.17} middle style={{marginTop:5,marginBottom:5}} >
                  <Text color="#8898AA" size={12}>
                    Already registered? Login
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Email or phone number"
                        iconContent={
                          <MaterialCommunityIcons
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="email"
                            style={styles.inputIcons}
                          />
                        }
                        onChangeText={phone =>this.setState({phoneNumber:phone})}
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Password"
                        iconContent={
                          <MaterialCommunityIcons
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="lock-open"
                            style={styles.inputIcons}
                          />
                        }
                        onChangeText={password =>this.setState({password})}
                      />
                    </Block>
                    <Block row width={width * 0.75} style={{marginTop:20}} >
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.PRIMARY}
                        label="Remember Me"
                      />
                    </Block>
                    <Block middle style={{marginTop:15}} >
                      <Button color="primary" style={styles.createButton} onPress={()=>this.setLogin()} >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          LOG IN
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
    height: height * 0.60,
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
  }
});

export default Register;
