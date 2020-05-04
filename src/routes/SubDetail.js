import React from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions} from 'react-native'

const {width, height} = Dimensions.get("window");

export default class SubDetail extends React.Component{
    static navigationOptions = {
        title: "출결현황 상세",
        headerTitleAlign: "center",
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.infocard}>
                    <Text style={styles.infotext}>
                        정보보호프로젝트설계실습1
                    </Text>
                    <Text style={styles.infotext}>
                        이슬기 출석상세
                    </Text>
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
                                    1 주차 (09월 7일)
                                </Text>
                            </View>
                            <View style={styles.firstweekbottom}>
                                <Text style={styles.weekbottomtext}>09월07일</Text>
                                <Text style={styles.weekbottomtext}>13:10 ~ 14:00</Text>
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
                                    2 주차 (09월 13일)
                                </Text>
                            </View>
                            <View style={styles.firstweekbottom}>
                                <Text style={styles.weekbottomtext}>09월13일</Text>
                                <Text style={styles.weekbottomtext}>13:10 ~ 14:00</Text>
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