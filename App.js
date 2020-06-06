import React from 'react';
//import * as SQLite from 'expo-sqlite';
import Load from './src/components/Load';
import Login from './src/components/Login'

export default class App extends React.Component {
  state = {
    isLoading : true
  }

  componentDidMount() {
    setTimeout( ()=>{this.setState({isLoading: false})}, 1000)
  }

  render() {
    const {isLoading} = this.state;
    return (
      isLoading ? <Load /> : <Login />
    );
  }
}
