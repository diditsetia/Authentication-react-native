import React, { Component} from 'react';
import {View} from 'react-native';
import  firebase from 'firebase';
import {Header} from './components/common';
import {Button,CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class  App extends Component {
  state = { loggedIn: null};
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCHCmxldpJRmuw1n1pXJZu_28jzpIzjids',
    authDomain: 'authentication-43687.firebaseapp.com',
    databaseURL: 'https://authentication-43687.firebaseio.com',
    projectId: 'authentication-43687',
    storageBucket: 'authentication-43687.appspot.com',
    messagingSenderId: '942207882874'
  });

  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch ( this.state.loggedIn) {
      case true:
        return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
            </Button>
        </CardSection> );
      case false:
        return <LoginForm />;
      default:
       return (
       <CardSection>
        <Spinner size= "large"/>
       </CardSection>
     );
    }
  }

  render () {
      return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
