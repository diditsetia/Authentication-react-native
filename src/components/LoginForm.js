import React, { Component } from 'react';
import {Text} from 'react-native';
import  firebase from 'firebase';
import { Button, Card, CardSection, Input} from './common';

class LoginForm extends Component {
  state = { email : '', password: '', error: ''};

  onButtonPress () {
    const {email, password} = this.state;
    this.setState({error: ''});

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(user => {
      console.log('login success');
      console.log('this is my userdata');
      console.log(user);
    })
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .catch((err) => {
        if (err) {
          console.log(email);
          console.log(password);
          const errorCode = err.code;
          const errorMessage = err.message;
          console.log('create user failed');
          console.log('this is my error');
          console.log(errorCode);
          console.log(errorMessage);
        }
        this.setState({error: 'Authentication Failed.'});
      });
    });
  }

  render() {
      return (
        <Card>
          <CardSection>
            <Input
              placeholder="user@gmail.com"
              label ="Email"
              value= {this.state.email}
              onChangeText= {email => this.setState({ email })}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState({password})}

            />
          </CardSection>

            <Text style={styles.errorTextStyle}>
              {this.state.error}
            </Text>

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Log in
            </Button>
          </CardSection>
        </Card>
    );
  }
}

const styles = {
  errorTextStyle : {
    fontSize: 20,
    alignSelf : 'center',
    color : 'red'
  }
};

export default LoginForm;
