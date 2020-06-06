import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const { width, heigth } = Dimensions.get("window");

export default class ProSubDetail extends React.Component {
    static navigationOptions = {
        title: "과목 상세정보",
        headerTitleAlign: "center",
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerStyle: {
            backgroundColor: "#dcdcdc"
        }
    }

    render(){
        console.log(this.props);
        return (
            <View style={styles.container}>
                <View style={styles.main_container}>
                    <View style={styles.circle_container}>
                        <Circle number="1" />
                        <Circle number="2" />
                        <Circle number="3" />
                        <Circle number="4" />
                    </View>
                    <View style={styles.circle_container}>
                        <Circle number="5" />
                        <Circle number="6" />
                        <Circle number="7" />
                        <Circle number="8" />
                    </View>
                    <View style={styles.circle_container}>
                        <Circle number="9" />
                        <Circle number="10" />
                        <Circle number="11" />
                        <Circle number="12" />
                    </View>
                    <View style={styles.circle_container}>
                        <Circle number="13" />
                        <Circle number="14" />
                        <Circle number="15" />
                        <Circle number="16" />
                    </View>
                </View>
                <View style={styles.sub_container}>
                    <Text style={styles.sub_text}>2020년 월 일</Text>
                    <Text style={styles.sub_text}>강의실:</Text>
                    <Text style={styles.sub_text}>수강인원: </Text>
                </View>
            </View>
        )
    }
}

function Circle(props) {
    return (
        <Text style={styles.main_text}>
            {props.number}주차
        </Text>
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#ff9999"
    },
    main_container : {
        flex:7,
        alignItems : "center",
        justifyContent : "space-around",
    },
    circle_container : {
        flexDirection : "row",
    },
    main_text: {
        fontSize: 14,
        color : "#1e90ff",
        width: width/5,
        height : width/5,
        borderRadius : 50,
        backgroundColor : "#dcdcdc",
        borderWidth : 3,
        borderColor : "#f8f8ff",
        margin : 8,
        paddingTop : 32,
        paddingLeft : 23
    },  
    sub_container : {
        flex : 3,
        width : width,
        backgroundColor : "#fffafa",
        borderTopLeftRadius : 10,
        borderTopRightRadius: 10,
        borderTopColor : "#b0c4de",
        borderTopWidth : 0.7
    },
    sub_text : {
        color: "#2f4f4f",
        fontSize : 23,
        padding : 20
    }
})