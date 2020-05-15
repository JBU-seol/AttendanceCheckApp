import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image, TouchableOpacity, Alert} from 'react-native';

import picturelogo from '../../assets/jbu_logo-removebg-preview.png';
import textlogo from '../../assets/jbu_kr-removebg-preview.png';
import schedule from '../../assets/schedule.png';
import lecturechoice from '../../assets/lecturechoice.png';
import qrcode from '../../assets/qrcode.png';
import notice from '../../assets/notice.png';
import question from '../../assets/question2.png';
import qna from '../../assets/qna.png';

const {width, height} = Dimensions.get("window");
const getIdAPI = "http://ec2-13-125-176-205.ap-northeast-2.compute.amazonaws.com:1234/members/course_id";
const getNameAPI = "http://ec2-13-125-176-205.ap-northeast-2.compute.amazonaws.com:1234/members/course_name";
const getTimeAPI = "http://ec2-13-125-176-205.ap-northeast-2.compute.amazonaws.com:1234/members/course_time";

const Monlec = []
const Tuelec = []
const Wenlec = []
const Thulec = []
//const Frilec = []
export default class Home extends React.Component{
    static navigationOptions={
        headerShown : false
    };

    state = {
        LectureName : [],
        LectureTime : [],
        Frilec : []
    }

    _getLectureTime = async(id) => {
        try {
            let response = await fetch(getTimeAPI, {
                method: 'POST',
                body: JSON.stringify({
                    id: id,
                }),
            })
            let responseJson = await response.json();
            //console.log(responseJson[id]);
            this.setState({ 
                LectureTime : this.state.LectureTime.concat(responseJson[id])
            })
        } catch(error){
            Alert.alert(error)
        }
    }

    _getLectureName = async(lecture_id) => {
        try {
            let response = await fetch(getNameAPI, {
                method: 'POST',
                body: JSON.stringify({
                    lecture_id: lecture_id,
                }),
            })
            let responseJson = await response.json();
            //console.log(responseJson);
            this.setState( {
                LectureName : this.state.LectureName.concat(responseJson)
            })
            this._getLectureTime(responseJson.id);
        } catch(error){
            Alert.alert(error)
        }
    }

    _getLectureID = async() => {
        try{
            let response = await fetch(getIdAPI, {
                method: 'POST',
                body: JSON.stringify({
                    grade_number: this.props.screenProps.code,
                }),
            })
            let responseJson = await response.json();
            //console.log(responseJson.lecture_id);
            for( var i=0 ; i < responseJson.lecture_id.length ; i++ ){
                this._getLectureName(responseJson.lecture_id[i]);
            }
            
        } catch(error){
            Alert.alert("error")
        }
    }

    _settingLectureDay = ( lecture_id ) => {
        //const lecture_obj = this.props.navigation.state.params;
        const lecture_time = this.state.LectureTime;

        for( var j=0 ; j < lecture_time.length ; j++ ){
            if( lecture_id.id === lecture_time[j].id ){
                switch( lecture_time[j].which_day ){
                    case '월요일':
                        Monlec.push(lecture_id.lecture_name)
                        // this.setState({
                        //     Monlec : this.state.Monlec.concat(lecture_id.lecture_name)
                        // })
                        //console.log("월요일");
                        break;
                    case '화요일':
                        Tuelec.push(lecture_id.lecture_name)
                        // this.setState({
                        //     Tuelec : this.state.Tuelec.concat(lecture_id.lecture_name)
                        // })
                        //console.log("화요일");
                        break;
                    case '수요일':
                        Wenlec.push(lecture_id.lecture_name)
                        // this.setState({
                        //     Wenlec : this.state.Wenlec.concat(lecture_id.lecture_name)
                        // })
                        //console.log("수요일");
                        break;
                    case '목요일':
                        Thulec.push(lecture_id.lecture_name)
                        // this.setState({
                        //     Thulec : this.state.Thulec.concat(lecture_id.lecture_name)
                        // })
                        //console.log("목요일");
                        break;
                    case '금요일':
                        //Frilec.push(lecture_id.lecture_name)
                        this.setState( {
                            Frilec : [ ...this.state.Frilec, lecture_id.lecture_name ]
                        })
                        // console.log(lecture_id.lecture_name);
                        break;
                }
            }
        }
    }

    _settingLecture = () => {
        // const lecture_obj = this.props.navigation.state.params;
        // console.log(lecture_obj);
        const lecture_id = this.state.LectureName;
        console.log(lecture_id)
        for( var i=0 ; i < lecture_id.length ; i++ ){
            this._settingLectureDay( lecture_id[i] )
        }
    }

    componentDidMount() {
        this._getLectureID();
        //this._settingLecture();
    }

    render() {
        //console.log(this.props.screenProps.code)
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
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate( 'Sub', {
                                LectureName : this.state.LectureName,
                                LectureTime : this.state.LectureTime,
                            } )}>
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
        width: width/4,
        height: height/4,
    },
    textlogo:{
        width: width/2.2,
        height: height/10
    }
})