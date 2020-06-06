import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image, TouchableOpacity, Alert} from 'react-native';


import picturelogo from '../../assets/jbu_logo-removebg-preview.png';
import textlogo from '../../assets/jbu_kr-removebg-preview.png';
import personal from '../../assets/personal.png';
import week from '../../assets/week.png';
import settings from '../../assets/settings.png';
import letter from '../../assets/letter.png';

const {width, height} = Dimensions.get("window");

export default class ProHome extends React.Component{
    static navigationOptions={
        headerShown : false,
        headerStyle: {
            backgroundColor: "#dcdcdc"
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logocontainer}>
                    <Image style={styles.picturelogo} source={picturelogo} />
                    <Image style={styles.textlogo} source={textlogo} />
                </View>
                <View style={styles.maincontainer}>
                    <View style={styles.mainleftcontainer}>
                        <View style={styles.personal}>
                            <TouchableOpacity>
                                <Image style={styles.imagesetting} source={personal} />
                            </TouchableOpacity>
                            <Text style={styles.textsettings}>
                                출석체크
                            </Text>
                        </View>
                        <View style={styles.settings}>
                            <TouchableOpacity>
                                <Image style={styles.imagesetting} source={settings} />
                            </TouchableOpacity>
                            <Text style={styles.textsettings}>
                                환경설정
                            </Text>
                        </View>
                    </View>
                    <View style={styles.mainrightcontainer}>
                        <View style={styles.week}>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate( 'ProSub')}>
                                <Image style={styles.imagesetting} source={week} />
                            </TouchableOpacity >
                            <Text style={styles.textsettings}>
                                주차별 출석현황
                            </Text>
                        </View>
                        <View style={styles.letter}>
                            <TouchableOpacity>
                                <Image style={styles.imagesetting} source={letter} />
                            </TouchableOpacity>
                            <Text style={styles.textsettings}>
                                쪽지보관함
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.copyrightcontainer}>
                    <Text>copyrightⓒ 출첵해조</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff9999"
    },
    logocontainer:{
        flex: 5,
        alignItems: "center",
        flexDirection: "row",
    },
    maincontainer:{
        flex: 15,
        flexDirection: "row",
        width: width-25,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#666666",
        marginBottom: 5,
        backgroundColor: "white"
    },
    mainleftcontainer:{
        flex: 1,
        borderRightColor: "#666666",
        borderRightWidth: 1
    },
    mainrightcontainer:{
        flex: 1,
        borderLeftColor: "#666666",
        borderLeftWidth: 1
    },
    copyrightcontainer:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#993333",
        borderTopWidth:1,
        width: width
    },
    personal:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "#999999",
        borderBottomWidth: 1
    },
    settings:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    week:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "#999999",
        borderBottomWidth: 1
    },
    letter: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    imagesetting:{
        width: width/3.7,
        height: height/7
    },
    textsettings:{
        fontSize: 25,
        marginTop: 5
    },
    picturelogo:{
        width: width/4,
        height: height/4,
    },
    textlogo:{
        width: width/2.2,
        height: height/10
    }
})