import React, { Component} from 'react';
import {
  View
} from 'react-native';

import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class  App extends Component {
  ComponentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCwQ3tIXwsgHhxxNoGI1JhSkV9icvCas30',
    authDomain: 'autentication-7b79a.firebaseapp.com',
    databaseURL: 'https://autentication-7b79a.firebaseio.com',
    projectId: 'autentication-7b79a',
    storageBucket: 'autentication-7b79a.appspot.com',
    messagingSenderId: '487581341173'
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
