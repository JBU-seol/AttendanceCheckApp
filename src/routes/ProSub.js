import React from 'react';
import { StyleSheet, View, Text, Dimensions, Platform } from 'react-native';
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");

export default class ProSub extends React.Component {
    static navigationOptions = {
        title: "담당과목",
        headerTitleAlign: "center",
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerStyle: {
            backgroundColor: "#dcdcdc"
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.main_container}>
                    <ScrollView>
                        <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate( 'ProSubDetail',{
                            name : "캡스톤"
                        })}>
                            <View style={styles.block_container}>
                                <View style={styles.block_left_container}>
                                    <Text style={styles.bold_text}>
                                        캡스톤
                                </Text>
                                    <Text style={styles.light_text}>
                                        14:00 ~ 15:00
                                </Text>
                                </View>
                                <View style={styles.block_right_container}>
                                    <Text style={styles.light_text}>
                                        월
                                </Text>
                                    <Text style={styles.image_text}>
                                        >
                                </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#ff9999"
    },
    main_container : {
        backgroundColor : "#fffafa",
        width: width-60,
        height: height-130,
        borderRadius : 10,
        ...Platform.select({
            ios: {
              shadowColor: "black",
              shadowOpacity: 0.5,
              shadowRadius: 5,
              shadowOffset: {
                height: 5,
                width: 5
              }
            },
            android: {
              elevation: 10,
            }
          })
    },
    block_container: {
        flexDirection: "row",
        width : width-60,
        height : 65,
        borderBottomColor: "#a9a9a9",
        borderBottomWidth : 3
    },
    block_left_container: {
        flex : 3,
        justifyContent : "center",
        alignItems: "center",
    },
    block_right_container : {
        flex : 1,
        flexDirection : "row",
        justifyContent : "center",
        alignItems: "center"
    },
    bold_text : {
        fontWeight : "bold",
        fontStyle : "italic",
        fontSize : 26

    },
    light_text : {
        fontSize : 16,
        fontWeight : "100",
        color : "#808080"
    },
    image_text : {
        padding : 10,
        fontSize : 40
    }
})