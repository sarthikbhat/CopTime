import React, { Component } from 'react'
import {View, Text} from 'react-native'

export default class AuthLoadingScreen extends Component {

    componentDidMount() {
        this._bootstrapAsync()
    }

    _bootstrapAsync = async () => {
        const userToken=undefined
        // const userToken = await AsyncStorage.getItem('userToken');
        // const wait= await this.waiter(3)
        function wait(ms) {
          var start = new Date().getTime();
          var end = start;
          while (end < start + ms) {
            end = new Date().getTime();
          }
        }
        wait(300)
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
      };
    

    render() {
        return (
            <View>
              <Text>Helo ALS</Text>  
            </View>
        )
    }
}
