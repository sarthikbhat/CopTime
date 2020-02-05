import React, { Component } from 'react'
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  PermissionsAndroid
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";
import Images from "../Static/Constants/Images";

const { height, width } = Dimensions.get("screen");

export default class AuthLoadingScreen extends Component {

    componentDidMount() {
        this._bootstrapAsync()
    }

    _bootstrapAsync = async () => {
        const userToken='undefined'
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
        )
    }
}
