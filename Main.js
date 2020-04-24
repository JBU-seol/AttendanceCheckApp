import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Platform, Animated, LayoutAnimation, UIManager } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import menu from './assets/menubutton.png'

const {width, height} = Dimensions.get("window");

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

export default class Main extends React.Component {
    state = {
        isViewing : false,
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

    render() {
        return (
            <LinearGradient style={styles.container} colors={['#FEE1B3', '#ffffff']} >
                <View style={styles.topcard}>
                    <TouchableOpacity onPress={this._togglefunc}>
                        <Image style={{ width: 50, height: 50, marginTop: 30 }}
                            source={menu} />
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        Attendance Check
                    </Text>
                </View>
                <View style={styles.maincontainer}>
                    <View style={styles.maincard}>
                        <TouchableOpacity
                            onPress={() => alert('Hello, world!')} >
                            <Text style={styles.maintext}>
                                 출결 여부가 보여질 부분
                            </Text>
                        </TouchableOpacity>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FCBCBF"
    },
    title: {
        marginTop: 30,
        marginHorizontal: 36,
        fontSize: 30,
        fontWeight: "600",
        fontStyle: "italic",
        color: "#222",
        elevation: 1
    },
    maincontainer: {
        flex: 7,
        width: width,
        alignItems: "center"
    },
    maincard: {
        flex: 7,
        marginTop: 50,
        backgroundColor: "white",
        width: width - 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: "#bbb",
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
    topcard: {
        flex: 1,
        width : width,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 3,
        borderBottomColor: "#222"
    },
    fadingContainer: {
        width: width /4,
        height: height,
        position: "absolute",
        right: 310,
        paddingVertical: 3,
        paddingHorizontal: 8,
        backgroundColor: "#FEE1B3",
        borderRightColor: "black",
        borderWidth: 2,
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