import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Dimensions, ScrollView, TouchableNativeFeedback } from 'react-native'
import { Overlay } from 'react-native-elements';
import { Switch } from 'react-native-gesture-handler';
import {
  OutlinedTextField,
} from 'react-native-material-textfield';
import { Button ,Text} from 'native-base';
import ImagePicker from 'react-native-image-picker';

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
      <View>
        <View style={styles.outer}>
          <View style={styles.heading}>
            <Text style={styles.text}>Emergency</Text>
            <View style={{ flex: 1 }}></View>
            <Switch
              value={this.state.switchValue}
              disabled={this.state.switchDisable}
              style={styles.switch}
              onValueChange={() => this.setState(prevState => { return { switchValue: !prevState.switchValue } })}
              thumbColor="#2196f3"
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
              inputContainerStyle={{minHeight:100}}
            />
          </View>
          <View style={{height:50}} ></View>
          <View style={styles.imgUploader}>
            <TouchableNativeFeedback
            >
              <Button rounded primary style={styles.imgBut} onPress={() => this.imgFunction()}>
                <Text style={styles.btnText} >Upload Image</Text>
              </Button>
            </TouchableNativeFeedback>
            <TextInput editable={false} style={{ fontSize: 20, borderColor: 'gray', borderBottomWidth: 1, flex: 1, marginTop: 10, paddingLeft: 10 }}>{this.state.source}</TextInput>
          </View>
        </View>
        <Button rounded primary style={styles.submit} onPress={()=>{this.props.navigation.navigate('Chat')}}>
          <Text style={styles.btnText} >Next</Text>
        </Button>
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
    fontSize: 18
  },
  head: {
    paddingTop: '5%',
  },
  imgBut: {
    // flex: 0.6,
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
  btnText:{
    color:'white',
    width:'100%',
    textAlign:'center'
  }
})
