import React from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions, Alert} from 'react-native'

const API = "http://ec2-3-35-28-254.ap-northeast-2.compute.amazonaws.com:1234/members/week_list";
const API_check = "http://ec2-3-35-28-254.ap-northeast-2.compute.amazonaws.com:1234/members/check";
const {width} = Dimensions.get("window");
const DATA = [
    {
        id : '1',
        day : ["9월7일", "9월14일", "9월21일", "9월28일", "10월5일", "10월12일", "10월19일", "10월26일", "11월2일", "11월9일", "11월16일", "11월23일", "11월30일", "12월7일", "12월14일"]
    },
    {
        id : '2',
        day : ["9월8일", "9월15일", "9월22일", "9월29일", "10월6일", "10월13일", "10월20일", "10월27일", "11월3일", "11월10일", "11월17일", "11월24일", "12월1일", "12월8일", "12월15일"]
    },
    {
        id : '3',
        day : ["9월9일", "9월16일", "9월23일", "9월30일", "10월7일", "10월14일", "10월21일", "10월28일", "11월4일", "11월11일", "11월18일", "11월25일", "12월2일", "12월9일", "12월16일"]
    },
    {
        id : '4',
        day : ["9월10일", "9월17일", "9월24일", "10월1일", "10월8일", "10월15일", "10월22일", "10월29일", "11월5일", "11월12일", "11월19일", "11월26일", "12월3일", "12월10일", "12월17일"]
    },
    {
        id : '5',
        day : ["9월11일", "9월18일", "9월25일", "10월2일", "10월9일", "10월16일", "10월23일", "10월30일", "11월6일", "11월13일", "11월20일", "11월27일", "12월4일", "12월11일", "12월18일"]
    }

]

export default class SubDetail extends React.Component{
    static navigationOptions = {
        title: "출결현황 상세",
        headerTitleAlign: "center",
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    state = {
        week : [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    }

    checkAttendanceInfo = async() => {
        try {
            const lecture_name = this.props.navigation.state.params.lecture_name;
            const grade_number = this.props.screenProps.code;
            let response = await fetch(API_check, {
                method: 'POST',
                body: JSON.stringify({
                    grade_number: grade_number,
                    lecture_name: lecture_name
                })
            })
            response.status;
        }
        catch (error) {
            Alert.alert("error");
        }
        
    }

    getAttendanceInfo = async() => {
        try {
            const lecture_name = this.props.navigation.state.params.lecture_name;
            const grade_number = this.props.screenProps.code;
            let response = await fetch(API, {
                method: 'POST',
                body: JSON.stringify({
                    lecture_name: lecture_name,
                    grade_number: grade_number
                })
            })
            let responseJson = await response.json();
            this.setState({
                week: responseJson.week
            })
        }
        catch (error) {
            Alert.alert("error");
        }
        
    }

    componentDidMount() {
        this.checkAttendanceInfo();
        this.getAttendanceInfo();
    }

    render() {
        //console.log(this.props.navigation.state.params);
        //console.log(this.props.screenProps.code);
        const lectureObj = this.props.navigation.state.params;
        let week = this.state.week;
        let daylist = [];
        let attOK = 0, attnotOK = 0;
        for( let i =0 ; i< week.length; i++){
            if( week[i] === 1) attnotOK++;
            else attOK++;
        }
        if ( lectureObj.LectureTime.day === "09-07"){
            daylist = DATA[0].day
        }
        else if( lectureObj.LectureTime.day === "09-08"){
            daylist = DATA[1].day
        }
        else if( lectureObj.LectureTime.day === "09-09"){
            daylist = DATA[2].day
        }
        else if( lectureObj.LectureTime.day === "09-10"){
            daylist = DATA[3].day
        }
        else if( lectureObj.LectureTime.day === "09-11"){
            daylist = DATA[4].day
        }
        return (
            <View style={styles.container}>
                <View style={styles.infocard}>
                    <Text style={styles.infotext}>
                        {lectureObj.lecture_name}
                    </Text>
                    <View style={{ flexDirection: "row"}} >
                    <Text style={styles.infotext_dark}>
                        {this.props.screenProps.name} 
                    </Text>
                    <Text style={styles.infotext}>
                        출석상세
                    </Text>
                    </View>
                    <Text style={styles.infotext}>
                        출석: {attOK} 결석: {attnotOK}
                    </Text>
                </View>
                <View style={styles.detailcard}>
                <ScrollView style={styles.detailscroll}>
                    <View style={styles.firstweek}>
                            <View style={styles.firstweektop}>
                                <Text style={{fontSize: 20, fontWeight:"bold",
                            padding: 25}}>
                                    1
                                </Text>
                                <Text style={{fontSize: 17, padding: 30}}>
                                    1 주차 ({daylist[0]})
                                </Text>
                            </View>
                            <View style={styles.firstweekbottom}>
                                <Text style={styles.weekbottomtext}>
                                    {daylist[0]}
                                </Text>
                                <Text style={styles.weekbottomtext}>{lectureObj.LectureTime.start_time} ~
                                {lectureObj.LectureTime.finish_time}</Text>
                                {
                                    (this.state.week[0]===3) && (
                                        <Text style={styles.weekbottomtextborderOK}>
                                            출 석
                                        </Text>
                                    )
                                }{
                                    (this.state.week[0]===2) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            지 각
                                        </Text>
                                    )
                                }{
                                    (this.state.week[0]===1) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            결 석
                                        </Text>
                                    )
                                }
                            </View>
                        </View>
                        <View style={styles.secondweek}>
                            <View style={styles.firstweektop}>
                                <Text style={{
                                    fontSize: 20, fontWeight: "bold",
                                    padding: 25
                                }}>
                                    2
                                </Text>
                                <Text style={{ fontSize: 17, padding: 30 }}>
                                    2 주차 ({daylist[1]})
                                </Text>
                            </View>
                            <View style={styles.firstweekbottom}>
                                <Text style={styles.weekbottomtext}>{daylist[1]}</Text>
                                <Text style={styles.weekbottomtext}>{lectureObj.LectureTime.start_time} ~
                                {lectureObj.LectureTime.finish_time}</Text>
                                
                                {
                                    (this.state.week[1]===3) && (
                                        <Text style={styles.weekbottomtextborderOK}>
                                            출 석
                                        </Text>
                                    )
                                }{
                                    (this.state.week[1]===2) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            지 각
                                        </Text>
                                    )
                                }{
                                    (this.state.week[1]===1) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            결 석
                                        </Text>
                                    )
                                }
                            </View>
                        </View>
                        <View style={styles.secondweek}>
                            <View style={styles.firstweektop}>
                                <Text style={{
                                    fontSize: 20, fontWeight: "bold",
                                    padding: 25
                                }}>
                                    3
                                </Text>
                                <Text style={{ fontSize: 17, padding: 30 }}>
                                    3 주차 ({daylist[2]})
                                </Text>
                            </View>
                            <View style={styles.firstweekbottom}>
                            <Text style={styles.weekbottomtext}>{daylist[2]}</Text>
                                <Text style={styles.weekbottomtext}>{lectureObj.LectureTime.start_time} ~
                                {lectureObj.LectureTime.finish_time}</Text>
                                {
                                    (this.state.week[2]===3) && (
                                        <Text style={styles.weekbottomtextborderOK}>
                                            출 석
                                        </Text>
                                    )
                                }{
                                    (this.state.week[2]===2) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            지 각
                                        </Text>
                                    )
                                }{
                                    (this.state.week[2]===1) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            결 석
                                        </Text>
                                    )
                                }
                            </View>
                        </View>
                        <View style={styles.secondweek}>
                            <View style={styles.firstweektop}>
                                <Text style={{
                                    fontSize: 20, fontWeight: "bold",
                                    padding: 25
                                }}>
                                    4
                                </Text>
                                <Text style={{ fontSize: 17, padding: 30 }}>
                                    4 주차 ({daylist[3]})
                                </Text>
                            </View>
                            <View style={styles.firstweekbottom}>
                            <Text style={styles.weekbottomtext}>{daylist[3]}</Text>
                                <Text style={styles.weekbottomtext}>{lectureObj.LectureTime.start_time} ~
                                {lectureObj.LectureTime.finish_time}</Text>
                                {
                                    (this.state.week[3]===3) && (
                                        <Text style={styles.weekbottomtextborderOK}>
                                            출 석
                                        </Text>
                                    )
                                }{
                                    (this.state.week[3]===2) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            지 각
                                        </Text>
                                    )
                                }{
                                    (this.state.week[3]===1) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            결 석
                                        </Text>
                                    )
                                }
                            </View>
                        </View>
                        <View style={styles.secondweek}>
                            <View style={styles.firstweektop}>
                                <Text style={{
                                    fontSize: 20, fontWeight: "bold",
                                    padding: 25
                                }}>
                                    5
                                </Text>
                                <Text style={{ fontSize: 17, padding: 30 }}>
                                    5 주차 ({daylist[4]})
                                </Text>
                            </View>
                            <View style={styles.firstweekbottom}>
                            <Text style={styles.weekbottomtext}>{daylist[4]}</Text>
                                <Text style={styles.weekbottomtext}>{lectureObj.LectureTime.start_time} ~
                                {lectureObj.LectureTime.finish_time}</Text>
                                {
                                    (this.state.week[4]===3) && (
                                        <Text style={styles.weekbottomtextborderOK}>
                                            출 석
                                        </Text>
                                    )
                                }{
                                    (this.state.week[4]===2) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            지 각
                                        </Text>
                                    )
                                }{
                                    (this.state.week[4]===1) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            결 석
                                        </Text>
                                    )
                                }
                            </View>
                        </View>
                        <View style={styles.secondweek}>
                            <View style={styles.firstweektop}>
                                <Text style={{
                                    fontSize: 20, fontWeight: "bold",
                                    padding: 25
                                }}>
                                    6
                                </Text>
                                <Text style={{ fontSize: 17, padding: 30 }}>
                                    6 주차 ({daylist[5]})
                                </Text>
                            </View>
                            <View style={styles.firstweekbottom}>
                            <Text style={styles.weekbottomtext}>{daylist[5]}</Text>
                                <Text style={styles.weekbottomtext}>{lectureObj.LectureTime.start_time} ~
                                {lectureObj.LectureTime.finish_time}</Text>
                                {
                                    (this.state.week[5]===3) && (
                                        <Text style={styles.weekbottomtextborderOK}>
                                            출 석
                                        </Text>
                                    )
                                }{
                                    (this.state.week[5]===1) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            결 석
                                        </Text>
                                    )
                                }
                            </View>
                        </View>
                        <View style={styles.secondweek}>
                            <View style={styles.firstweektop}>
                                <Text style={{
                                    fontSize: 20, fontWeight: "bold",
                                    padding: 25
                                }}>
                                    7
                                </Text>
                                <Text style={{ fontSize: 17, padding: 30 }}>
                                    7 주차 ({daylist[6]})
                                </Text>
                            </View>
                            <View style={styles.firstweekbottom}>
                            <Text style={styles.weekbottomtext}>{daylist[6]}</Text>
                                <Text style={styles.weekbottomtext}>{lectureObj.LectureTime.start_time} ~
                                {lectureObj.LectureTime.finish_time}</Text>
                                {
                                    (this.state.week[6]===3) && (
                                        <Text style={styles.weekbottomtextborderOK}>
                                            출 석
                                        </Text>
                                    )
                                }{
                                    (this.state.week[6]===2) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            지 각
                                        </Text>
                                    )
                                }{
                                    (this.state.week[6]===1) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            결 석
                                        </Text>
                                    )
                                }
                            </View>
                        </View>
                        <View style={styles.secondweek}>
                            <View style={styles.firstweektop}>
                                <Text style={{
                                    fontSize: 20, fontWeight: "bold",
                                    padding: 25
                                }}>
                                    8
                                </Text>
                                <Text style={{ fontSize: 17, padding: 30 }}>
                                    8 주차 ({daylist[7]})
                                </Text>
                            </View>
                            <View style={styles.firstweekbottom}>
                            <Text style={styles.weekbottomtext}>{daylist[7]}</Text>
                                <Text style={styles.weekbottomtext}>{lectureObj.LectureTime.start_time} ~
                                {lectureObj.LectureTime.finish_time}</Text>
                                {
                                    (this.state.week[7]===3) && (
                                        <Text style={styles.weekbottomtextborderOK}>
                                            출 석
                                        </Text>
                                    )
                                }{
                                    (this.state.week[7]===2) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            지 각
                                        </Text>
                                    )
                                }{
                                    (this.state.week[7]===1) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            결 석
                                        </Text>
                                    )
                                }
                            </View>
                        </View>
                        <View style={styles.secondweek}>
                            <View style={styles.firstweektop}>
                                <Text style={{
                                    fontSize: 20, fontWeight: "bold",
                                    padding: 25
                                }}>
                                    9
                                </Text>
                                <Text style={{ fontSize: 17, padding: 30 }}>
                                    9 주차 ({daylist[8]})
                                </Text>
                            </View>
                            <View style={styles.firstweekbottom}>
                            <Text style={styles.weekbottomtext}>{daylist[8]}</Text>
                                <Text style={styles.weekbottomtext}>{lectureObj.LectureTime.start_time} ~
                                {lectureObj.LectureTime.finish_time}</Text>
                                {
                                    (this.state.week[8]===3) && (
                                        <Text style={styles.weekbottomtextborderOK}>
                                            출 석
                                        </Text>
                                    )
                                }{
                                    (this.state.week[8]===2) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            지 각
                                        </Text>
                                    )
                                }{
                                    (this.state.week[8]===1) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            결 석
                                        </Text>
                                    )
                                }
                            </View>
                        </View>
                        <View style={styles.secondweek}>
                            <View style={styles.firstweektop}>
                                <Text style={{
                                    fontSize: 20, fontWeight: "bold",
                                    padding: 25
                                }}>
                                    10
                                </Text>
                                <Text style={{ fontSize: 17, paddingVertical: 30, paddingHorizontal: 13 }}>
                                    10 주차 ({daylist[9]})
                                </Text>
                            </View>
                            <View style={styles.firstweekbottom}>
                            <Text style={styles.weekbottomtext}>{daylist[9]}</Text>
                                <Text style={styles.weekbottomtext}>{lectureObj.LectureTime.start_time} ~
                                {lectureObj.LectureTime.finish_time}</Text>
                                {
                                    (this.state.week[9]===3) && (
                                        <Text style={styles.weekbottomtextborderOK}>
                                            출 석
                                        </Text>
                                    )
                                }{
                                    (this.state.week[9]===2) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            지 각
                                        </Text>
                                    )
                                }{
                                    (this.state.week[9]===1) && (
                                        <Text style={styles.weekbottomtextborder}>
                                            결 석
                                        </Text>
                                    )
                                }
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ff9999",
    },
    infocard:{
        flex: 1,
    },
    infotext: {
        color: "#fff",
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    infotext_dark: {
        color: "black",
        fontSize: 22,
        fontWeight : "normal",
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    detailcard:{
        flex: 4,
        backgroundColor: "#fff",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    detailscroll:{
        marginTop: 20
    },
    firstweek:{
        width: width,
        backgroundColor: "#cccccc"
    },
    firstweektop:{
        flexDirection: "row"
    },
    firstweekbottom:{
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "center"
    },
    secondweek:{
        width:width,
        backgroundColor: "#cccccc"
    },
    weekbottomtext:{
        fontSize: 20,
        margin: 10,
        padding: 5
    },
    weekbottomtextborderOK:{
        fontSize: 22,
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        margin: 10,
        color: "#3333cc",
        fontWeight: "bold"
    },
    weekbottomtextborder:{
        fontSize: 22,
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        margin: 10,
        color: "red",
        fontWeight: "bold"
    }
})