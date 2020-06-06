import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        return (
            <View style={styles.container}>
                <View style={styles.main_container}>
                    <View style={styles.circle_container}>
                        <Circle prop = {this.props} number="01 "/>
                        <Circle prop = {this.props} number="02" />
                        <Circle prop = {this.props} number="03" />
                        <Circle prop = {this.props} number="04" />
                    </View>
                    <View style={styles.circle_container}>
                        <Circle prop = {this.props} number="05" />
                        <Circle prop = {this.props} number="06" />
                        <Circle prop = {this.props} number="07" />
                        <Circle prop = {this.props} number="08" />
                    </View>
                    <View style={styles.circle_container}>
                        <Circle prop = {this.props} number="09" />
                        <Circle prop = {this.props} number="10" />
                        <Circle prop = {this.props} number="11" />
                        <Circle prop = {this.props} number="12" />
                    </View>
                    <View style={styles.circle_container}>
                        <Circle prop = {this.props} number="13" />
                        <Circle prop = {this.props} number="14" />
                        <Circle prop = {this.props} number="15" />
                        <Circle prop = {this.props} number="16" />
                    </View>
                </View>
                <View style={styles.sub_container}>

                    <Text style={styles.sub_text}>2020년 월 일</Text>
                    <Text style={styles.sub_text}>강의명 : 
                    {this.props.navigation.state.params.name}</Text>
                    <Text style={styles.sub_text}>강의실:</Text>
                    <Text style={styles.sub_text}>수강인원: </Text>
                </View>
            </View>
        )
    }
}

function Circle(props) {
    console.log(props);
    return (
        <TouchableOpacity onPress={ () => {
            props.prop.navigation.navigate( 'ProSubDetailWeek', {
                week : props.number
            })
        }}>
            <Text style={styles.main_text}>
                {props.number} 주차
            </Text>
        </TouchableOpacity>

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
        paddingTop : 33,
        paddingLeft : 22
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
        fontSize : 20,
        paddingTop : 20,
        paddingLeft : 20
    }
})