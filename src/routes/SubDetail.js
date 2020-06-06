import React from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions} from 'react-native'

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

    render() {
        console.log(this.props.navigation.state.params);
        const lectureObj = this.props.navigation.state.params;
        let daylist = [];
        if ( lectureObj.LectureTime.day === "9월7일"){
            daylist = DATA[0].day
        }
        else if( lectureObj.LectureTime.day === "9월8일"){
            daylist = DATA[1].day
        }
        else if( lectureObj.LectureTime.day === "9월9일"){
            daylist = DATA[2].day
        }
        else if( lectureObj.LectureTime.day === "9월10일"){
            daylist = DATA[3].day
        }
        else if( lectureObj.LectureTime.day === "9월11일"){
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
                        출석: 지각: 조퇴: 결석:
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
                                <Text style={styles.weekbottomtextborder}>출석or결석</Text>
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
                                <Text style={styles.weekbottomtextborder}>출석or결석</Text>
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
                                <Text style={styles.weekbottomtextborder}>출석or결석</Text>
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
                                <Text style={styles.weekbottomtextborder}>출석or결석</Text>
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
                                <Text style={styles.weekbottomtextborder}>출석or결석</Text>
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
                                <Text style={styles.weekbottomtextborder}>출석or결석</Text>
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
                                <Text style={styles.weekbottomtextborder}>출석or결석</Text>
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
                                <Text style={styles.weekbottomtextborder}>출석or결석</Text>
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
                                <Text style={styles.weekbottomtextborder}>출석or결석</Text>
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
                                <Text style={styles.weekbottomtextborder}>출석or결석</Text>
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
    weekbottomtextborder:{
        fontSize: 20,
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        margin: 10,
        color: "#3333cc",
        fontWeight: "bold"
    }
})