import React from 'react';
import { Container, Content, Form, Text, Button, Icon, ListItem, CheckBox, Body } from 'native-base';
import {
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import {
  OutlinedTextField,
} from 'react-native-material-textfield';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export default class PasswordScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      confPassword: '',
      volunteer: false
    };
  }

  redirectLogin = (e) => {
    const { password, confPassword } = this.state;

    if (!adhaarNumber) {
      Alert.alert(
        'Enter Credentials',
        'Invalid adhaar credentials , please enter your adhaar number',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
    else {
      this.props.navigation.navigate('Login')
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={{ flex: 1, padding: '5%' }}>
          <Form styles={styles.form}>
            <View style={styles.l}>
              <OutlinedTextField
                label='Password'
                keyboardType='default'
                onChangeText={password => this.setState({ password })}
              />
              <OutlinedTextField
                label='Confirm Password'
                keyboardType='default'
                onChangeText={confPassword => this.setState({ confPassword })}
              />
              <Button iconRight rounded primary style={styles.buttonText} onPress={() => this.redirectLogin()}>
                <Text>Next</Text>
                <Icon name='arrow-forward' />
              </Button>
            </View>
            <ListItem style={styles.checkBox}>
              <CheckBox
                onPress={() => this.setState(prevState => { return { volunteer: !prevState.volunteer } })}
                checked={this.state.volunteer} />
              <Body>
                <Text>Do you want to act as a volunteer?</Text>
              </Body>
            </ListItem>
            <Text>your nearest police station is (Loading)</Text>
            <Text>JVPD P STN</Text>
            <TouchableNativeFeedback onPress={() => { this.props.navigation.navigate('PStnSelect') }}>
              <Text>Click to change</Text>
            </TouchableNativeFeedback>
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
  buttonText: {
    marginTop: '5%',
    justifyContent: "center",
    width: '50%',
    alignSelf: "center",
    backgroundColor: "#2196f3"
  },
  createClick: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: '500'
  },
  l: {
    backgroundColor: '#ffff',
    padding: '7%',
    elevation: 1
  },
  checkBox: {
    marginLeft: '10%',
  }
})
