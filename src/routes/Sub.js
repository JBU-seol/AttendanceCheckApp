import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get("window");


export default class Sub extends React.Component {
    static navigationOptions = {
        title: "출결조회",
        headerTitleAlign: "center",
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    state = {
        isMon: true,
        isTue: true,
        isWen: true,
        isThu: true,
        isFri: true,
    }

    toggleMon =() => {
        this.setState(prevState =>{
            return {
            isMon: !prevState.isMon
            }
        });
    }
    toggleTue =() => {
        this.setState(prevState =>{
            return {
            isTue: !prevState.isTue
            }
        });
    }
    toggleWen =() => {
        this.setState(prevState =>{
            return {
            isWen: !prevState.isWen
            }
        });
    }
    toggleThu =() => {
        this.setState(prevState =>{
            return {
            isThu: !prevState.isThu
            }
        });
    }
    toggleFri =() => {
        this.setState(prevState =>{
            return {
            isFri: !prevState.isFri
            }
        });
    }

    
    render() {
        //this.props.navigation.state.params == 강의명&시간 정보
        const { LectureName, LectureTime } = this.props.navigation.state.params;
        let lecture_stime, lecture_etime;
        console.log(this.props.navigation.state.params)
      return (
          <ScrollView>
              <View style={styles.container}>
                  <View style={styles.daycard}>
                      <Text style={styles.daytext} onPress={this.toggleMon}>
                          월요일
                        </Text>
                        {this.state.isMon && (
                          <View style={styles.fadingContainer}>
                              {
                                  LectureTime.map( (value,i) => {
                                      let lecture_list;
                                      if( value.which_day === "월요일"){
                                        LectureName.map( obj => {
                                            if( obj.id === value.id ){
                                                lecture_list = obj.lecture_name;
                                                lecture_stime = value.start_time;
                                                lecture_etime = value.finish_time;
                                            }
                                        })
                                        return (
                                            <View key={i}>
                                                <Text style={styles.fadingText}
                                                    onPress={() => this.props.navigation.navigate('SubDetail',{
                                                        lecture_name : lecture_list,
                                                        LectureTime : value
                                                    })}>
                                                    {lecture_list}
                                                </Text>
                                                <Text style={{marginLeft:10}}>
                                                    {lecture_stime}~{lecture_etime}
                                                </Text>
                                            </View>
                                        )
                                      }
                                  })
                              }
                          </View>
                      )
                      }
                  </View>
                  <View style={styles.daycard}>
                      <Text style={styles.daytext} onPress={this.toggleTue}>
                          화요일
                  </Text>
                  {this.state.isTue && (
                          <View style={styles.fadingContainer}>
                              {
                                  LectureTime.map( (value,i) => {
                                    let lecture_list;
                                      if( value.which_day === "화요일"){
                                        LectureName.map( obj => {
                                            if( obj.id === value.id ){
                                                lecture_list = obj.lecture_name;
                                                lecture_stime = value.start_time;
                                                lecture_etime = value.finish_time;
                                            }
                                        })
                                        return (
                                            <View key={i}>
                                                <Text style={styles.fadingText}
                                                    onPress={() => this.props.navigation.navigate('SubDetail',{
                                                        lecture_name : lecture_list,
                                                        LectureTime : value
                                                    }
                                                    )}>
                                                    {lecture_list}
                                                </Text>
                                                <Text style={{marginLeft:10}}>
                                                    {lecture_stime}~{lecture_etime}
                                                </Text>
                                            </View>
                                        )
                                      }
                                  })
                              }
                          </View>
                      )
                      }
                  </View>
                  <View style={styles.daycard}>
                      <Text style={styles.daytext} onPress={this.toggleWen}>
                          수요일
                  </Text>
                  {this.state.isWen && (
                          <View style={styles.fadingContainer}>
                              {
                                  LectureTime.map( (value,i) => {
                                    let lecture_list;
                                      if( value.which_day === "수요일"){
                                        LectureName.map( obj => {
                                            if( obj.id === value.id ){
                                                lecture_list = obj.lecture_name;
                                                lecture_stime = value.start_time;
                                                lecture_etime = value.finish_time;
                                            }
                                        })
                                        return (
                                            <View key={i}>
                                                <Text style={styles.fadingText}
                                                    onPress={() => this.props.navigation.navigate('SubDetail',{
                                                        lecture_name : lecture_list,
                                                        LectureTime : value
                                                    }
                                                    )}>
                                                    {lecture_list}
                                                </Text>
                                                <Text style={{marginLeft:10}}>
                                                    {lecture_stime}~{lecture_etime}
                                                </Text>
                                            </View>
                                        )
                                      }
                                  })
                              }
                          </View>
                      )
                      }
                  </View>
                  <View style={styles.daycard}>
                      <Text style={styles.daytext} onPress={this.toggleThu}>
                          목요일
                  </Text>
                  {this.state.isThu && (
                          <View style={styles.fadingContainer}>
                              {
                                  LectureTime.map( (value,i) => {
                                    let lecture_list;
                                      if( value.which_day === "목요일"){
                                        LectureName.map( obj => {
                                            if( obj.id === value.id ){
                                                lecture_list = obj.lecture_name;
                                                lecture_stime = value.start_time;
                                                lecture_etime = value.finish_time;
                                            }
                                        })
                                        return (
                                            <View key={i}>
                                                <Text style={styles.fadingText}
                                                    onPress={() => this.props.navigation.navigate('SubDetail',{
                                                        lecture_name : lecture_list,
                                                        LectureTime : value
                                                    }
                                                    )}>
                                                    {lecture_list}
                                                </Text>
                                                <Text style={{marginLeft:10}}>
                                                    {lecture_stime}~{lecture_etime}
                                                </Text>
                                            </View>
                                        )
                                      }
                                  })
                              }
                          </View>
                      )
                      }
                  </View>
                  <View style={styles.daycard}>
                      <Text style={styles.daytext} onPress={this.toggleFri}>
                          금요일
                  </Text>
                  {this.state.isFri && (
                          <View style={styles.fadingContainer}>
                              {
                                  LectureTime.map( (value,i) => {
                                    let lecture_list;
                                      if( value.which_day === "금요일"){
                                        LectureName.map( obj => {
                                            if( obj.id === value.id ){
                                                lecture_list = obj.lecture_name;
                                                lecture_stime = value.start_time;
                                                lecture_etime = value.finish_time;
                                            }
                                        })
                                        return (
                                            <View key={i}>
                                                <Text style={styles.fadingText}
                                                    onPress={() => this.props.navigation.navigate('SubDetail',{
                                                        lecture_name : lecture_list,
                                                        LectureTime : value
                                                    }
                                                    )}>
                                                    {lecture_list}
                                                </Text>
                                                <Text style={{marginLeft:10}}>
                                                    {lecture_stime}~{lecture_etime}
                                                </Text>
                                            </View>
                                        )
                                      }
                                  })
                              }
                          </View>
                      )
                      }
                  </View>
              </View>
          </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center"
    },
    daycard:{
        backgroundColor: "#ff9999",
        width: width,
        borderBottomColor: "#fff",
        borderBottomWidth:1,
        alignItems: "center"
    },
    daytext:{
        color: "#fff",
        paddingVertical: 5,
        paddingHorizontal: width/2.6,
        fontSize: 18,
    },
    fadingContainer:{
        backgroundColor: "#fff",
        width: width,
        
    },
    fadingText:{
        fontSize: 20,
        padding: 10
    }
  })