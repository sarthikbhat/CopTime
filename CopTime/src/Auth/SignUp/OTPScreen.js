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
      />
          <TextInput
        style={styles.textField}
        keyboardType="number-pad"
      />
          <TextInput
        style={styles.textField}
        keyboardType="number-pad"
      />
          <TextInput
        style={styles.textField}
        keyboardType="number-pad"
      />
      </View>
      <View>
          <Button iconRight rounded primary style={styles.buttonText} onPress={()=>this.setPassword()}>
            <Text>Next</Text>
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
  textField: {
  },
  buttonText:{
    marginTop:'5%',
    justifyContent:"center",
    width:'50%',
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
     borderColor: 'gray', 
     borderWidth: 1.5,
     flexDirection:"row",
     marginLeft:'5%'
  },
  otpText:{
    textAlign:"center",
    fontSize:25,
    padding:10
  }
})
