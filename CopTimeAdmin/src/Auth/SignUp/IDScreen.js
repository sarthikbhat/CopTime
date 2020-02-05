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

import { Button, Input } from "../../Static/components"
import { Images, argonTheme } from "../../Static/Constants";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {

  constructor() {
    super();
    this.state = {
        adhaarNumber:'',
    };
  }

  setOTP=(e)=>{
    const {adhaarNumber} = this.state;

    if(!adhaarNumber){
        Alert.alert(
            'Enter Credentials',
            'Invalid adhaar credentials , please enter your adhaar number',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }
    else{
        this.props.navigation.navigate('OTP')
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
              <Block flex={0.40} middle style={styles.socialConnect}>
                <Text color="#8898AA" size={12}>
                  Already Registered?
                </Text>
                <Block row style={{ marginTop: theme.SIZES.BASE }}>
                  <Button style={{ ...styles.socialButtons}} onPress={()=>this.props.navigation.navigate('LogIn')} >
                    <Block row>
                      <MaterialCommunityIcons
                        name="login"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>Go To Login</Text>
                    </Block>
                  </Button>
                </Block>
              </Block>
              <Block flex  >
                <Block flex={0.17} middle style={{marginTop:5,marginBottom:5}} >
                  <Text color="#8898AA" size={12}>
                    Enter your UIDAI number below to continue
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
                        placeholder="XXXX XXXX XXXX"
                        keyboardType='phone-pad'
                        iconContent={
                          <MaterialCommunityIcons
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="account-card-details"
                            style={styles.inputIcons}
                          />
                        }
                        onChangeText={adhaarNumber =>this.setState({adhaarNumber})}
                      />
                    </Block>
                    
                    <Block middle style={{marginTop:15}} >
                      <Button color="primary" style={styles.createButton} onPress={()=>this.setOTP()} >
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
  }
});

export default Register;
