import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity,
Dimensions } from 'react-native';

const {width, height} = Dimensions.get("window");

export default class Login extends React.Component {
    state = {
        studentCode: "",
        macAddress: ""
    }

    render() {
        console.log(this.state.macAddress)
        return (
            <View style={styles.container}>
            <StatusBar barStyle="light-content" />
                <View style={styles.subcontainer12}>
                </View>
                <View style={styles.subcontainer12}>
                    <TextInput style={styles.inputcard} 
                    maxLength={10}
                    keyboardType={"number-pad"}
                    placeholder={" Your Student Code  ex ) 91512345"}
                    placeholderTextColor={"white"}
                    value={this.state.studentCode}
                    onChangeText={this._editInput}
                    returnKeyType={"done"}
                    />
                    <Text style={{fontSize:20}}> </Text>
                    <TextInput style={styles.inputcard} />
                </View>
                <View style={styles.subcontainer3}>
                    <TouchableOpacity style={styles.loginbox}>
                        <Text style={styles.logintext}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    _editInput = text => {
        this.setState({
            studentCode: text
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
    subcontainer12: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    subcontainer3: {
        flex: 1,
        alignItems: "center",
        marginTop: 50
        
    },
    inputcard: {
        backgroundColor: "gray",
        color: "white",
        fontSize: 20,
        fontStyle: "italic",
        width: width/1.3,
        height: height/20,
        borderRadius: 3
    },
    loginbox: {
        backgroundColor: "gray",
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    logintext: {
        color: "white",
        fontSize: 23,
    }
})