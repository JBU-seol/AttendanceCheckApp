import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import * as SQLite from 'expo-sqlite';
import Load from './Load';
import Main from './Main';
import Login from './Login'

const db = SQLite.openDatabase("www.db");


export default class App extends React.Component {
  state = {
    isLoading : true,
    text: null
  }

  componentDidMount() {
    setTimeout( ()=>{this.setState({isLoading: false})}, 1000)
  }


  render() {
    const {isLoading} = this.state;
    return (
      // isLoading ? <Load /> : <Main />
      isLoading ? <Load /> : <Login />
    );
  }

  
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
