import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';

import picturelogo from './assets/jbu_logo-removebg-preview.png';
import textlogo from './assets/jbu_kr-removebg-preview.png';
import schedule from './assets/schedule.png';
import lecturechoice from './assets/lecturechoice.png';
import qrcode from './assets/qrcode.png';
import notice from './assets/notice.png';
import question from './assets/question2.png';
import qna from './assets/qna.png';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

const {width, height} = Dimensions.get("window");

class Home extends React.Component{
    static navigationOptions={
        header: null
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
                        <View style={styles.schedulecard}>
                            <TouchableOpacity>
                                <Image style={styles.imagesetting} source={schedule} />
                            </TouchableOpacity>
                            <Text style={styles.textsettings}>
                                시 간 표
                            </Text>
                        </View>
                        <View style={styles.qrcodecard}>
                            <TouchableOpacity>
                                <Image style={styles.imagesetting} source={qrcode} />
                            </TouchableOpacity>
                            <Text style={styles.textsettings}>
                                학 생 증
                            </Text>
                        </View>
                        <View style={styles.questioncard}>
                            <TouchableOpacity>
                                <Image style={styles.imagesetting} source={question} />
                            </TouchableOpacity>
                            <Text style={styles.textsettings}>
                                설문조사
                            </Text>
                        </View>
                    </View>
                    <View style={styles.mainrightcontainer}>
                        <View style={styles.lecturechoicecard}>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate( 'Sub')}>
                                <Image style={styles.imagesetting} source={lecturechoice} />
                            </TouchableOpacity>
                            <Text style={styles.textsettings}>
                                출결조회
                            </Text>
                        </View>
                        <View style={styles.noticecard}>
                            <TouchableOpacity>
                                <Image style={styles.imagesetting} source={notice} />
                            </TouchableOpacity>
                            <Text style={styles.textsettings}>
                                공지사항
                            </Text>
                        </View>
                        <View style={styles.qnacard}>
                            <TouchableOpacity>
                                <Image style={styles.imagesetting} source={qna} />
                            </TouchableOpacity>
                            <Text style={styles.textsettings}>
                                출결문의
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

class Sub extends React.Component {
    static navigationOptions = {
        title: "출결조회"
    }
    render() {
      return (
          <View style={{flex:1}}>
              <Text>
                  Hello Test
              </Text>
          </View>
      );
    }
  }

const MainNavigator = createStackNavigator({
    Home: Home,
    Sub: Sub
});

export default createAppContainer(MainNavigator);

class Main extends React.Component{
    render(){
        return <MainNavigator />;
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
    schedulecard:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "#999999",
        borderBottomWidth: 1
    },
    qrcodecard:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "#999999",
        borderBottomWidth: 1
    },
    questioncard:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    lecturechoicecard:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "#999999",
        borderBottomWidth: 1
    },
    noticecard: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "#999999",
        borderBottomWidth: 1
    },
    qnacard: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    imagesetting:{
        width: width/4,
        height: height/8
    },
    textsettings:{
        fontSize: 25,
        marginTop: 5
    },
    picturelogo:{
        width: width/4.7,
        height: height/5,
    },
    textlogo:{
        width: width/2.2,
        height: height/10
    }
})