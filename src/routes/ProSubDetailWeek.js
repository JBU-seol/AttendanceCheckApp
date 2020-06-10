import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");

export default class ProSubDetailWeek extends React.Component {
    static navigationOptions = {
        title: "주차별 출석현황",
        headerTitleAlign: "center",
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerStyle: {
            backgroundColor: "#dcdcdc"
        }
    }

    render() {
        //console.log(this.props.navigation.state.params.students);
        let studentList = this.props.navigation.state.params.students;
        return (
            <View style={styles.container}>
                <View style={styles.sub_container}>
                    <Text style={styles.sub_text}>
                        {this.props.navigation.state.params.week}주차 출석 현황
                    </Text>
                </View>
                <View style={styles.main_container}>
                    <View style={styles.topBlock}>
                        <Text style={styles.topText}>이름</Text>
                        <Text style={styles.topText}>학번</Text>
                        <Text style={styles.topText}>출석 여부</Text>
                        <Text style={styles.topText}>기타</Text>
                    </View>
                    <ScrollView >
                        {studentList.map( (obj, i) => {
                            return (
                                <View key={i} style={styles.detailBox}>
                                    <Text style={styles.topText}>{obj.name}</Text>
                                    <Text style={styles.topText}>{obj.grade_number}</Text>
                                    <Text style={styles.topTextBorder}>출석 여부</Text>
                                    <Text style={styles.topTextBorder}>상세</Text>
                                    <Text style={styles.topTextBorder}>변경</Text>
                                </View>
                            )
                        })}
                        
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#ff9999"
    },
    sub_container : {
        flex:1,
        alignItems : "center",
        justifyContent : "space-around",
    },
    sub_text : {
        fontSize: 25,
    },
    main_container : {
        flex : 7,
        width : width,
        backgroundColor : "#fffafa",
        borderTopLeftRadius : 10,
        borderTopRightRadius: 10,
        borderTopColor : "#b0c4de",
        borderTopWidth : 0.7
    },
    topBlock:{
        backgroundColor: "#f5f5dc",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems : "center",
        marginTop : 5,
        borderBottomColor : "#b0c4de",
        borderBottomWidth : 0.7
    },
    topText:{
        fontSize: 20,
        margin: 10,
    },
    topTextBorder:{
        fontSize: 17,
        padding: 5,
        borderRadius: 12,
        borderWidth: 1,
        color: "#3333cc",
    },
    detailBox : {
        borderColor : "black",
        borderWidth : 1,
        width : width,
        height : height/12,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop : 3,
        alignItems : "center"
    }
})