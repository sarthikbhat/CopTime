import React from 'react';
import { Container, Content, Form, Text,Button,Icon} from 'native-base';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import {
  OutlinedTextField,
} from 'react-native-material-textfield';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
        phoneNumber:'',
        password:''
    };
  }

  setLogin=(e)=>{
    const {phone , password} = this.state;

    if(!phone && !password){
        Alert.alert(
            'Enter Credentials',
            'Invalid login credentials , please enter your login details',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }
    else{
        this.props.navigation.navigate('App')
    }
  }


  render() {
    return (
      <Container style={styles.container}>
         <Content contentContainerStyle={{flex:1, justifyContent: 'center', padding:'10%',}}>
          <Form styles={styles.form}>
          <View style={styles.l}>
          <OutlinedTextField
            label='Phone number'
            keyboardType='phone-pad'
            onChangeText={phone =>this.setState({phoneNumber:phone})}
          />
          <OutlinedTextField
            label='Password'
            keyboardType='default'
            style={styles.textField}
            secureTextEntry={true}
            onChangeText={password =>this.setState({password})}
          />
          <Button iconRight rounded primary style={styles.buttonText} onPress={()=>this.setLogin()}>
            <Text style={{width:'80%'}}>Login</Text>
            <Icon name='arrow-forward'/>
          </Button>
          <TouchableOpacity >
          <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          </View>
        </Form>
      </Content>
      <Text style={styles.createClick}>Create a new account</Text>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
      <Text style={styles.registerClick}>Register</Text>
      </TouchableOpacity>
    </Container>
    );
  }
}



const styles = StyleSheet.create({
  container: { 
  },
  header:{
    backgroundColor:"#2196f3"
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    backgroundColor:'#0000',
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
  forgot:{
    marginTop:'2%',
    textAlign:'center',
    color:'#549ad2',
    fontSize:15
  },
  registerClick:{
    textAlign:"center",
    paddingBottom:'3%',
    fontSize:15,
    textDecorationLine: 'underline',
    color:'#549ad2'
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
