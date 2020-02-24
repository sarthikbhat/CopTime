import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import { Switch } from 'react-native-gesture-handler';
import { OutlinedTextField } from 'react-native-material-textfield';
import Feather from 'react-native-vector-icons/Feather'
import { Button } from 'native-base';
import { Text } from 'galio-framework';
import { Images } from "../../Static/Constants";
import ImagePicker from 'react-native-image-picker';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

const { width, height } = Dimensions.get("screen");

const options = {
  title: 'Upload image',
  takePhotoButtonTitle: 'Take photo from your camera',
  chooseFromLibraryButtonTitle: 'Choose an image from library'
};

export default class ModalScreen extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
      source: null,
      switchValue: null,
      switchDisable: null
    };
  }

  componentDidMount = () => {
    this.setState({
      switchValue: this.props.navigation.getParam('value'),
      switchDisable: this.props.navigation.getParam('disabled')
    })
    // console.warn(this.state.switchValue)
  }

  imgFunction = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response.fileName);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        const source = response.fileName;
        this.setState({
          source
        });
      }
    });
  }

  render() {
    return (
      <View style={{marginTop:30}}>
        <ScrollView>
          <View style={styles.outer}>
            <View style={styles.heading}>
              <Text style={styles.text}>Emergency</Text>
              <View style={{ flex: 1 }}></View>
              <Switch
                value={this.state.switchValue}
                disabled={this.state.switchDisable}
                style={styles.switch}
                onValueChange={() => this.setState(prevState => { return { switchValue: !prevState.switchValue } })}
                thumbColor="#5e72e5"
              />
            </View>
            <View style={styles.head}>
              <OutlinedTextField
                label='Title'
                keyboardType='default'
                onChangeText=''
              />
              <OutlinedTextField
                label='Description'
                keyboardType='default'
                onChangeText=''
                multiline={true}
                inputContainerStyle={{ minHeight: 100 }}
              />
            </View>
            <View style={{ height: 50 }} ></View>
            <View style={styles.imgUploader}>
              <TouchableOpacity activeOpacity={1} onPress={() => this.imgFunction()}
                style={
                  {
                    // width: '70%',
                    flex:0.6,
                    marginTop: 6,
                    marginRight: 6,
                    color: "#5e72e5",
                    justifyContent: 'center', alignItems: 'center',
                    height: 50,
                    borderRadius: 4,
                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                    shadowOffset: { height: 1, width: 1 }, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius: 1,
                    padding: 5,
                    elevation: 4,
                    color: '#5e72e5',
                    backgroundColor: '#fff',
                    fontWeight: '600',
                    overflow: "hidden"
                  }}>
                <Text style={{ fontFamily: 'TitilliumWeb-Light', color: '#6a7ce6' }} size={17}>Upload Image</Text>
              </TouchableOpacity>
              <TextInput editable={false} style={{ fontSize: 20, borderColor: 'gray', borderBottomWidth: 1, flex: 1, marginTop: 10, paddingLeft: 10 }}>{this.state.source}</TextInput>
            </View>
          </View>
          {/* <Button iconRight rounded primary style={styles.submit} onPress={() => { this.props.navigation.navigate('Chat', { sos: false }) }}>
            <Text style={styles.btnText} >Next</Text>
          </Button> */}
          <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('Chat', { sos: false }) }}
                style={
                  {
                    width: '40%',
                    // flex:1,
                    marginTop: 6,
                    marginRight: 6,
                    color: "#5e72e5",
                    justifyContent: 'center', alignSelf: 'center', alignItems:'center',
                    height: 50,
                    borderRadius: 4,
                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                    shadowOffset: { height: 1, width: 1 }, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius: 1,
                    padding: 5,
                    elevation: 4,
                    color: '#5e72e5',
                    backgroundColor: '#fff',
                    fontWeight: '600',
                    overflow: "hidden"
                  }}>
                <Text style={{ fontFamily: 'TitilliumWeb-Light', color: '#6a7ce6' }} size={18} >Next</Text>
              </TouchableOpacity>
          <View style={styles.separator} >
            <View style={styles.separatorContent} >
              {/* <View style={{width:20}}></View> */}
              <View style={styles.separatorLine} ></View>
              <Text style={styles.separatorText} > OR </Text>
              <View style={styles.separatorLine} ></View>
              {/* <View style={{width:20}}></View> */}
            </View>
          </View>
          <View style={styles.callButtonBtn} elevation={2} onStartShouldSetResponder={() => { console.log('should have worked'), RNImmediatePhoneCall.immediatePhoneCall('+919702574733'); }} >
            <View style={styles.callButton} >
              <Feather name="phone-call" size={28} color="rgb(6, 120, 0)" />
            </View>
            <Text style={styles.callTheCops} size={15}> Call the cops</Text>
          </View>
          <View style={{ height: 20 }}  ></View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outer: {
    padding: '4%'
  },
  heading: {
    padding: 2,
    flexDirection: 'row',
  },
  switch: {
  },
  text: {
    paddingTop: '1%',
    fontSize: 18,
    color: "rgb(100,100,100)"
  },
  head: {
    paddingTop: '5%',
  },
  imgBut: {
    flex: 0.6,
    marginTop: '5%',
    justifyContent: "center",
    width: '40%',
    color: '#ffff',
    backgroundColor: "#2196f3"
  },
  imgUploader: {
    flexDirection: 'row',
  },
  submit: {
    marginTop: '5%',
    justifyContent: "center",
    alignSelf: 'center',
    width: '60%',
    backgroundColor: "#2196f3"
  },
  btnText: {
    color: 'white'
  },
  separator: {
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'center'
  },
  separatorContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  separatorLine: {
    borderTopColor: "rgb(150,150,150)",
    borderTopWidth: 1,
    width: "40%",
    marginLeft: 10,
    marginRight: 10
  },
  separatorText: {
    color: "rgb(130,130,130)"
  },
  callButton: {
    height: 56,
    width: 56,
    borderRadius: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    // borderWidth:0.1
  },
  callButtonBtn: {
    backgroundColor: '#fff',
    height: 70,
    width: 180,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 7,
    borderRadius: 35
  },
  callTheCops: {
    marginLeft: 5,
    color: "#5e72e5"
  }
})
