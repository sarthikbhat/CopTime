import React from 'react';
import { Container, Content, Form, Text,Button,Icon} from 'native-base';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

export default class OTPScreen extends React.Component {
  constructor() {
    super();
    this.state = {
        otp:'',
    };
  }

  setPassword=(e)=>{
    const {otp} = this.state;

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

  //  focusPrevious(key, index) {
  //   if (key === 'Backspace' && index !== 0)
  //       this.otpTextInput[index - 1]._root.focus();
  // }

  // focusNext(index, value) {
  //     if (index < this.otpTextInput.length - 1 && value) {
  //         this.otpTextInput[index + 1]._root.focus();
  //     }
  //     if (index === this.otpTextInput.length - 1) {
  //         this.otpTextInput[index]._root.blur();
  //     }
  //     const otp = this.state.otp;
  //     otp[index] = value;
  //     this.setState({ otp });
  //     this.props.getOtp(otp.join(''));
  // }

  render() {
    return (
      <Container style={styles.container}>
         <Content contentContainerStyle={{flex:1,padding:'5%'}}>
          <Form styles={styles.form}>
          <View style={styles.list}>
          <Text style={styles.otpText}>
            Enter Your OTP
          </Text>
          <View style={styles.innerlist}>
          <TextInput
        style={styles.textField}
        keyboardType="number-pad"
        underlineColorAndroid ='transparent'
        maxLength={1}
        ref={ref=>{this.t1=ref}}
        onChangeText={(text)=>{}}
      />
          <TextInput
        style={styles.textField}
        keyboardType="number-pad"
        maxLength={1}
        ref={ref=>{this.t2=ref}}
        onChangeText={()=>{this.t3.focus()}}
      />
          <TextInput
        style={styles.textField}
        keyboardType="number-pad"
        maxLength={1}
        ref={ref=>{this.t3=ref}}
      />
          <TextInput
        style={styles.textField}
        keyboardType="number-pad"
        maxLength={1}
        ref={ref=>{this.t4=ref}}
      />
      </View>
      <View>
          <Button iconRight rounded primary style={styles.buttonText} onPress={()=>this.setPassword()}>
          <Text style={{width:'80%'}}>Next</Text>
            <Icon name='arrow-forward'/>
          </Button>
          </View>
          </View>
        </Form>
      </Content>
    </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: { 
  },
  buttonText:{
    marginTop:'5%',
    justifyContent:"center",
    width:'40%',
    alignSelf: "center",
    backgroundColor:"#2196f3"
  },
  createClick:{
    textAlign:"center",
    fontSize:15,
    fontWeight:'500'
  },
  list:{
    padding:'10%',
    backgroundColor:'#ffff',
    elevation:1,
  },
  innerlist:{
    flexDirection:"row",
    padding:10,
  },
  textField:{
    fontSize:25,
    padding:'5%', 
     flexDirection:"row",
     marginLeft:'5%',
     borderWidth:0,
     borderColor:'gray',
     borderBottomWidth:1,
  },
  otpText:{
    textAlign:"center",
    fontSize:25,
    padding:10
  }
})
