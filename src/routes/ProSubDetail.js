import React from 'react';
import { StyleSheet, View, Text, Dimensions, Platform, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const getAPI = "http://ec2-13-125-176-205.ap-northeast-2.compute.amazonaws.com:1234/members/student_list";
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

    state = {
        date : "",
        students : []
    }

    getStudentList = async() => {
        try {
            let response = await fetch( getAPI , {
                method : 'POST',
                body: JSON.stringify({
                    lecture_name : this.props.navigation.state.params.name
                }),
            });
            let responseJson = await response.json();
            //console.log(responseJson);
            this.setState({
                students : responseJson.students
            })
        }
        catch(error) {
            Alert.alert("error");
        }
    }

    componentDidMount() {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        this.setState({
            //Setting the value of the date time
            date: year + '년 ' + month + '월 ' + date + '일    ' + hours + '시 ' + min + "분",
        });
        this.getStudentList();
    }

    render(){
        //console.log(this.state.students)
        return (
            <View style={styles.container}>
                <View style={styles.main_container}>
                    <View style={styles.circle_container}>
                        <Circle prop = {this.props} number="01" students={this.state.students}/>
                        <Circle prop = {this.props} number="02" students={this.state.students}/>
                        <Circle prop = {this.props} number="03" students={this.state.students}/>
                        <Circle prop = {this.props} number="04" students={this.state.students}/>
                    </View>
                    <View style={styles.circle_container}>
                        <Circle prop = {this.props} number="05" students={this.state.students}/>
                        <Circle prop = {this.props} number="06" students={this.state.students}/>
                        <Circle prop = {this.props} number="07" students={this.state.students}/>
                        <Circle prop = {this.props} number="08" students={this.state.students}/>
                    </View>
                    <View style={styles.circle_container}>
                        <Circle prop = {this.props} number="09" students={this.state.students}/>
                        <Circle prop = {this.props} number="10" students={this.state.students}/>
                        <Circle prop = {this.props} number="11" students={this.state.students}/>
                        <Circle prop = {this.props} number="12" students={this.state.students}/>
                    </View>
                    <View style={styles.circle_container}>
                        <Circle prop = {this.props} number="13" students={this.state.students}/>
                        <Circle prop = {this.props} number="14" students={this.state.students}/>
                        <Circle prop = {this.props} number="15" students={this.state.students}/>
                        <Circle prop = {this.props} number="16" students={this.state.students}/>
                    </View>
                </View>
                <View style={styles.sub_container}>

                    <Text style={styles.sub_text}>
                        {this.state.date}
                    </Text>
                    <Text style={styles.sub_text}>강의명 : 
                    {this.props.navigation.state.params.name}</Text>
                    <Text style={styles.sub_text}>강의실 : 
                    {this.props.navigation.state.params.room}
                    </Text>
                    <Text style={styles.sub_text}>수강인원:
                    {this.state.students.length}명</Text>
                </View>
            </View>
        )
    }
}

function Circle(props) {
    //console.log(props);
    return (
        <TouchableOpacity onPress={ () => {
            props.prop.navigation.navigate( 'ProSubDetailWeek', {
                week : props.number,
                students : props.students
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