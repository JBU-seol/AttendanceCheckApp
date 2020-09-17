import React from 'react';
import { StyleSheet, View, Text, Dimensions, Alert } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");
const getAttAPI = "http://ec2-3-35-28-254.ap-northeast-2.compute.amazonaws.com:1234/members/attendance_list";
const changeAttAPI = "http://ec2-3-35-28-254.ap-northeast-2.compute.amazonaws.com:1234/members/change_attendance_list";

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
    state={
        isChange: false,
        lecture_name: "",
        student : "",
        check: []
    }


_getAttendanceInfo = async() => {
    try{
        //console.log(this.props.navigation.state.params.students);
        let students_list = this.props.navigation.state.params.students;
        let code_list = [];
        for(let i=0;i<students_list.length;i++){
            code_list.push(students_list[i].grade_number)
        }
        let response = await fetch(getAttAPI, {
            method: 'POST',
            body: JSON.stringify({
                students_numbers : code_list,
                lecture_name: this.props.navigation.state.params.lecture_name,
                week : this.props.navigation.state.params.week
            })
        });
        let responseJson = await response.json();
        //console.log(responseJson);
        this.setState({
            check : responseJson.check
        })
    } 
    catch(error){
        Alert.alert(error+"  something error");
    }
}

_changeOk = async() => {
    try{
        let response = await fetch(changeAttAPI, {
            method: 'POST',
            body: JSON.stringify({
                student_number : this.state.student,
                lecture_name: this.state.lecture_name,
                week: this.props.navigation.state.params.week,
                code: 3
            })
        });
        this.setState({
            isChange: false,
            student: "",
            lecture_name: ""
        })
        this._getAttendanceInfo();
    }
    catch(error){
        Alert.alert(error+"change Data Error");
    }
    
}

_changeLater = async() => {
    try{
        let response = await fetch(changeAttAPI, {
            method: 'POST',
            body: JSON.stringify({
                student_number : this.state.student,
                lecture_name: this.state.lecture_name,
                week: this.props.navigation.state.params.week,
                code: 2
            })
        });
        this.setState({
            isChange: false,
            student: "",
            lecture_name: ""
        })
        this._getAttendanceInfo();
    }
    catch(error){
        Alert.alert(error+"change Data Error");
    }
}

_changeNo = async() => {
    try{
        let response = await fetch(changeAttAPI, {
            method: 'POST',
            body: JSON.stringify({
                student_number : this.state.student,
                lecture_name: this.state.lecture_name,
                week: this.props.navigation.state.params.week,
                code: 1
            })
        });
        this.setState({
            isChange: false,
            student: "",
            lecture_name: ""
        })
        this._getAttendanceInfo();
    }
    catch(error){
        Alert.alert(error+"change Data Error");
    }
}


componentDidMount() {
    this._getAttendanceInfo();
}

    render() {
        //console.log(this.props.navigation.state.params);
        let studentList = this.props.navigation.state.params.students;
        const check = this.state.check;
        let isChange = this.state.isChange;
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
                        {studentList.map( (obj, i, j) => {
                            return (
                                <View key={i} style={styles.detailBox}>
                                    <Text style={styles.topText}>{obj.name}</Text>
                                    <Text style={styles.topText}>{obj.grade_number}</Text>
                                    <Text style={styles.topTextBorder}>{check[i]}</Text>
                                    <Text style={styles.topTextBorderNotyet}>상세(준비중)</Text>
                                    <TouchableOpacity onPress={ () => {
                                        this.setState({
                                            isChange : !isChange,
                                            lecture_name : this.props.navigation.state.params.lecture_name,
                                            student : obj.grade_number
                                        })
                                    }}>
                                        <Text style={styles.topTextBorder}>변경</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                        
                    </ScrollView>
                    {isChange && <View style={styles.changeContainer}>
                        <TouchableOpacity onPress={this._changeOk}><Text style={styles.bottomText}>출석</Text></TouchableOpacity>
                        <TouchableOpacity onPress={this._changeLater}><Text style={styles.bottomText}>지각</Text></TouchableOpacity>
                        <TouchableOpacity onPress={this._changeNo}><Text style={styles.bottomText}>결석</Text></TouchableOpacity>
                        </View>}
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
    changeContainer : {
        flex : 0.2,
        justifyContent : "space-between",
        flexDirection: "row",
        alignItems : "center",
        backgroundColor : "#f5f5dc",
        margin : 14
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
    bottomText:{
        fontSize: 20,
        margin: 10,
        padding: 10,
        borderRadius: 12,
        borderWidth: 2,
    },
    topTextBorder:{
        fontSize: 17,
        padding: 5,
        borderRadius: 12,
        borderWidth: 1,
        color: "#3333cc",
    },
    topTextBorderNotyet:{
        fontSize: 15,
        padding: 5,
        borderRadius: 12,
        borderWidth: 1,
        color: "black",
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