import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity,
Dimensions, Alert, Image } from 'react-native';
import * as Network from 'expo-network';
import * as SQLite from 'expo-sqlite';
//import {SQLite} from 'expo';
const {width, height} = Dimensions.get("window");
const API = "http://ec2-13-125-176-205.ap-northeast-2.compute.amazonaws.com:1234/login/";
import logo from '../../assets/jbu_logo-removebg-preview.png';
import MainNavigator from "./Main"

const db = SQLite.openDatabase("www.db");
let dbLength, dbarr, dbNumber, dbMac;

export default class Login extends React.Component {
    state = {
        studentCode: "",
        studentName: "",
        macAddress: "",
        isLogin: false
    }

    _getData = async() => {
        try{
            const mac = await Network.getMacAddressAsync("wlan0");
            this.setState({
                macAddress: mac
            })
            db.transaction( tx => {
                tx.executeSql(
                    "select * from info",
                    [],
                    (_, { rows}) => { 
                        dbLength = rows["length"];
                        if( dbLength === 1) {
                            dbarr = rows["_array"];
                            dbNumber = dbarr[0].grade_number;
                            dbMac = dbarr[0].mac_address;
                            this.setState({
                                studentCode: dbNumber,
                                macAddress : dbMac
                            })
                        }
                    }
                );
            });
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
                db.transaction( tx => {
                    tx.executeSql(
                        "insert into info values ( 1, ?, ? )",
                        [studentCode, macAddress],
                        () => {
                            console.log("insert success");
                        },
                        () => {
                            console.log("insert fail");
                        }
                    );
                    // tx.executeSql(
                    //     "select * from info",
                    //     [],
                    //     (_, { rows}) => console.log(JSON.stringify(rows))
                    // );
                });
                this.setState({
                    studentName: responseJson.name,
                    isLogin: true
                })
            }
            else if (response.status === 400) {
                Alert.alert('Error:','등록되지않은 사용자입니다.');
            }
        } catch (error){
            Alert.alert('Error:','등록되지않은 사용자입니다.');
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
        this._getData();
        db.transaction( tx => {
            tx.executeSql(
                "create table if not exists info (id integer primary key not null, grade_number int, mac_address text);",
                null,
                () => {
                    console.log('create success')
                },
                () => {
                    console.log('create fail')
                }
            );
        });    
}   


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