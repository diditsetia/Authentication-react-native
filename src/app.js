import React, { Component} from 'react';
import {View} from 'react-native';
import  firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class  App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCHCmxldpJRmuw1n1pXJZu_28jzpIzjids',
    authDomain: 'authentication-43687.firebaseapp.com',
    databaseURL: 'https://authentication-43687.firebaseio.com',
    projectId: 'authentication-43687',
    storageBucket: 'authentication-43687.appspot.com',
    messagingSenderId: '942207882874'
  });

  }
  render () {
      return (
      <View>
        <Header headerText="Autentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
