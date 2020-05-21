import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity,
Dimensions, Alert, Image } from 'react-native';
import * as Network from 'expo-network';

const {width, height} = Dimensions.get("window");
const API = "http://ec2-13-125-176-205.ap-northeast-2.compute.amazonaws.com:1234/login/";
import logo from '../../assets/jbu_logo-removebg-preview.png';
import MainNavigator from "./Main"

export default class Login extends React.Component {
    state = {
        studentCode: "",
        studentName: "",
        macAddress: "",
        isLogin: false
    }

    _getMac = async() => {
        try{
            const mac = await Network.getMacAddressAsync("wlan0");
            this.setState({
                macAddress: mac
            })
        } catch(error){
            Alert.alert("Error","Can't find your interface")
        }
    };

    _getAuthAsync = async() => {
        const {studentCode, macAddress} = this.state; 
        try {
            let response = await fetch(API, {
                method: 'POST',
                body: JSON.stringify({
                    grade_number: studentCode,
                    mac_address: macAddress
                }),
            })
            let responseJson = await response.json()
            if (response.status === 200){  
                this.setState({
                    studentName: responseJson.name,
                    isLogin: true
                })
            }
            else if( response.status == 400){
                Alert.alert("등록되지 않은 사용자입니다.");
            }
        } catch (error){
            Alert.alert(error)
        }
    }

      _gotoMain = () => {
          const { studentCode, macAddress } = this.state;
          if( studentCode !== "" && macAddress !== ""){
              this._getAuthAsync();
          }
          else{
              Alert.alert("학번을 입력해주세요")
          }
      }


    componentDidMount() {
        this._getMac();
    };

    render() {
        const isLogin = this.state.isLogin; 
        if( isLogin === false){
            return (
                <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                    <View style={styles.subcontainer1}>
                        <Image style={styles.logo} source={logo} />
                    </View>
                    <View style={styles.subcontainer2}>
                        <Text style={{color: "#bbb", fontSize:17, marginBottom:5}}>
                            LOGIN 
                        </Text>
                        <TextInput style={styles.inputcard} 
                        maxLength={10}
                        keyboardType={"number-pad"}
                        placeholder={"Your Student Code  ex ) 91512345"}
                        placeholderTextColor={"#eff"}
                        value={this.state.studentCode}
                        onChangeText={this._editInput}
                        returnKeyType={"done"}
                        />
                        <Text style={{fontSize:20}}> </Text>
                        <TextInput style={styles.inputcard}
                        placeholder={this.state.macAddress}
                        onChangeText={this._editMac}
                        value={this.state.macAddress}
                        />
                        <Text style={{fontSize:20}}> </Text>
                        <TouchableOpacity style={styles.loginbox}
                        onPress={this._gotoMain} >
                            <Text style={styles.logintext}>
                                L O G I N
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else {
            return <MainNavigator screenProps={{code:this.state.studentCode, name:this.state.studentName}}/>
        }
        
    }

    _editInput = text => {
        this.setState({
            studentCode: text
        })
    }
    _editMac = text => {
        this.setState({
            macAddress: text
        })
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    subcontainer1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    subcontainer2: {
        flex: 1,
        alignItems: "flex-start",
        
    },
    logo: {
        marginTop: 50
    },
    inputcard: {
        backgroundColor: "gray",
        color: "#111111",
        fontSize: 18,
        fontStyle: "italic",
        width: width/1.3,
        height: height/20,
        borderRadius: 3,
    },
    loginbox: {
        backgroundColor: "#3333cc",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: width/1.3,
        height: height/20,
    },
    logintext: {
        color: "white",
        fontSize: 23,
    }
})