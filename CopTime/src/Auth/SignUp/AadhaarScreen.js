import React from 'react';
import { Container, Header, Content, Form, Text,Button,Icon} from 'native-base';
import {
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import {
  OutlinedTextField,
} from 'react-native-material-textfield';

export default class AdhaarScreen extends React.Component {
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
      <Container style={styles.container}>
         <Content contentContainerStyle={{flex:1,padding:'5%'}}>
          <Form styles={styles.form}>
          <View style={styles.l}>
          <OutlinedTextField
            label='Adhaar Number'
            keyboardType='phone-pad'
            onChangeText={adhaar =>this.setState({adhaarNumber:adhaar})}
          />
          <Button iconRight rounded primary style={styles.buttonText} onPress={()=>this.setOTP()}>
            <Text>Next</Text>
            <Icon name='arrow-forward'/>
          </Button>
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
  l:{
    backgroundColor:'#ffff',
    padding:'7%',
    elevation:1
  }
})
