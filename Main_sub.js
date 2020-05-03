import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Platform, Animated, LayoutAnimation, UIManager } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import menu from './assets/menubutton.png'

const {width, height} = Dimensions.get("window");
const API = "http://13.125.176.205:1234/api/v1/members/?format=json";


if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

export default class Main extends React.Component {
    state = {
        isViewing : false,
        checkingNumber: 0,
        fadeAnim: new Animated.Value(0)
    }

    _togglefunc = () => {
        const { isViewing } = this.state;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState(prevState => {
            return {
            isViewing: !prevState.isViewing
            };
        })
    }
    //Django 웹서버에서 json 정보 가져오는 함수
    getMoviesFromApiAsync = async () => {
        try {
            let response = await fetch(API);
            let responseJson = await response.json();
            this.setState({
                jsonData: responseJson
            })
        } catch (error) {
            console.error(error);
        }
    }
    
    _topLeftButton = () => {
        this.setState({
            checkingNumber: 1
        })
    }

    componentDidMount() {
        //this.getMoviesFromApiAsync();
    }

    render() {
        //console.log(this.state.jsonData); json파일정보
        const checkingNumber = this.state.checkingNumber;
        return (
            <LinearGradient style={styles.container} colors={['#FEE1B3', '#ffffff']} >
                <View style={styles.Titlecontainer}>
                    <TouchableOpacity onPress={this._togglefunc}>
                        <Image style={{ width: 50, height: 50, marginTop: 10, marginLeft:5}}
                            source={menu} />
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        Attendance Check
                    </Text>
                </View>
                <View style={styles.maincontainer}>
                    <View style={styles.infocontainer} >
                        <Text style={styles.infotext}>
                            학번: {this.props.code}
                        </Text>
                        <Text style={styles.infotext}>
                            맥주소: {this.props.addr}
                        </Text>
                    </View>
                    <View style={styles.maincard}>
                <View style={styles.topmaincard}>

                    <View style={styles.topleftmaincard}>
                        <TouchableOpacity style={{
                            paddingVertical: 100,
                            paddingHorizontal: 60
                        }} onPress={this._topLeftButton}>
                            <Text style={{ fontSize: 20, marginLeft: 15 }}>
                                출결 정보 확인
                                    </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.toprightmaincard}>
                        <Text style={{ fontSize: 25 }}>
                            준비중..
                                </Text>
                    </View>
                </View>
                <View style={styles.bottommaincard}>
                    <View style={styles.bottomleftmaincard}>
                        <Text style={{ fontSize: 25 }}>
                            준비중..
                                </Text>
                    </View>
                    <View style={styles.bottomrightmaincard}>
                        <Text style={{ fontSize: 25 }}>
                            준비중..
                                </Text>
                    </View>
                </View>
            </View>
                        
                    {this.state.isViewing && (
                        <View style={styles.fadingContainer}>
                            <TouchableOpacity onPress={ ()=>{
                                alert("Hawoon");
                            }}>
                                <Text style={styles.fadingText}>
                                    MENU
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </LinearGradient>
        )
    }
    
}


class MainScreen extends React.Component {

    render(){
        return (
            <View style={styles.maincard}>
                <View style={styles.topmaincard}>

                    <View style={styles.topleftmaincard}>
                        <TouchableOpacity style={{
                            paddingVertical: 100,
                            paddingHorizontal: 60
                        }} onPress={this._topLeftButton}>
                            <Text style={{ fontSize: 20, marginLeft: 15 }}>
                                출결 정보 확인
                                    </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.toprightmaincard}>
                        <Text style={{ fontSize: 25 }}>
                            준비중..
                                </Text>
                    </View>
                </View>
                <View style={styles.bottommaincard}>
                    <View style={styles.bottomleftmaincard}>
                        <Text style={{ fontSize: 25 }}>
                            준비중..
                                </Text>
                    </View>
                    <View style={styles.bottomrightmaincard}>
                        <Text style={{ fontSize: 25 }}>
                            준비중..
                                </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FCBCBF"
    },
    title: {
        marginTop: 5,
        marginHorizontal: 36,
        fontSize: 30,
        fontWeight: "600",
        fontStyle: "italic",
        color: "#222",
        elevation: 1
    },
    maincontainer: {
        flex: 12,
        width: width,
        alignItems: "center"
    },
    infocontainer:{
        flex:1,
        width: width -40,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        padding: 20,
    },
    infotext:{
        color: "#333",
        padding: 10,
        fontSize: 16,
        borderRadius: 10,
        borderColor: "#111",
        borderWidth: 1,
        marginLeft: 15,
        backgroundColor: "#eee"

    },
    maincard: {
        flex: 20,
        marginTop: 10,
        backgroundColor: "white",
        width: width - 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: "#999",
        borderWidth: 1,
        ...Platform.select({
            ios: {
              shadowColor: "rgb(50, 50, 50)",
              shadowOpacity: 0.5,
              shadowRadius: 5,
              shadowOffset: {
                height: -1,
                width: 0
              }
            },
            android: {
              elevation: 3
            }
          })
    },
    topmaincard:{
        flex:1,
        flexDirection: "row"
    },
    bottommaincard:{
        flex:1,
        flexDirection: "row"
    },
    topleftmaincard:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 20,
        borderColor: "#999",
        borderWidth: 1,
    },
    toprightmaincard:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 20,
        borderColor: "#999",
        borderWidth: 1,
    },
    bottomleftmaincard:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderTopColor: "#999",
        borderLeftColor: "#999",
        borderRightColor: "#999",
        borderBottomColor: "white",
        borderWidth: 1,
    },
    bottomrightmaincard:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderTopColor: "#999",
        borderLeftColor: "#999",
        borderRightColor: "#999",
        borderBottomColor: "white",
        borderWidth: 1,
    },
    Titlecontainer: {
        flex: 1,
        width : width,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 3,
        borderBottomColor: "#222"
    },
    fadingContainer: {
        width: width /3,
        height: height,
        position: "absolute",
        right: 275,
        paddingVertical: 3,
        paddingHorizontal: 8,
        backgroundColor: "#FEE1B3",
        borderRightColor: "black",
        borderWidth: 1,
        borderRightWidth: 3,
        elevation: 3,
    },
    fadingText: {
        fontSize: 25,
        textAlign: "center",
        borderWidth: 2,
        padding: 4,
        marginTop: 5,
        borderBottomColor: "black",
    },
    maintext: {
        fontSize: 30,
        marginLeft: 20,
    }
})