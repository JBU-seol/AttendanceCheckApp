import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import logo from '../../assets/jbu_logo-removebg-preview.png'

const { width, height } = Dimensions.get("window");

export default function Load() {
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.container} colors={['#FFEFBA', '#FFFFFF', '#FFEFBA']} >
                <Image style={styles.logo} source={logo} />
                <Text style={styles.title}>
                    출첵해조
                </Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: width,
        height: 250,
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#a73737",
        marginBottom: 50
    }
})