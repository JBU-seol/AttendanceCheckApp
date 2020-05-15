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
        const { LectureName, LectureTime } = this.props.navigation.state.params;
        let fri_list;
        console.log(this.props.navigation.state.params)
      return (
          <ScrollView>
              <View style={styles.container}>
                  <View style={styles.daycard}>
                      <Text style={styles.daytext} onPress={this.toggleMon}>
                          월요일(
                        </Text>
                      {/* {this.state.isMon && (
                          <View style={styles.fadingContainer}>
                              {
                                  Monlec.map( (values, i) => {
                                      return (
                                          <TouchableOpacity key={i} onPress={() => this.props.navigation.navigate('SubDetail')}>
                                              <Text style={styles.fadingText}>
                                                  {values}
                                              </Text>
                                          </TouchableOpacity>
                                      )
                                  })
                              }
                          </View>
                      )
                      } */}
                  </View>
                  <View style={styles.daycard}>
                      <Text style={styles.daytext} onPress={this.toggleTue}>
                          화요일
                  </Text>
                  {/* {this.state.isTue && (
                          <View style={styles.fadingContainer}>
                              {
                                  Tuelec.map( (values,i) => {
                                      return (
                                          <TouchableOpacity key={i} onPress={() => this.props.navigation.navigate('SubDetail')}>
                                              <Text style={styles.fadingText}>
                                                  {values}
                                              </Text>
                                          </TouchableOpacity>
                                      )
                                  })
                              }
                          </View>
                      )
                      } */}
                  </View>
                  <View style={styles.daycard}>
                      <Text style={styles.daytext} onPress={this.toggleWen}>
                          수요일
                  </Text>
                  {/* {this.state.isWen && (
                          <View style={styles.fadingContainer}>
                              {
                                  Wenlec.map((values,i) => {
                                      return (
                                          <TouchableOpacity key={i} onPress={() => this.props.navigation.navigate('SubDetail')}>
                                              <Text style={styles.fadingText}>
                                                  {values}
                                              </Text>
                                          </TouchableOpacity>
                                      )
                                  })
                              }
                          </View>
                      )
                      } */}
                  </View>
                  <View style={styles.daycard}>
                      <Text style={styles.daytext} onPress={this.toggleThu}>
                          목요일
                  </Text>
                  {/* {this.state.isThu && (
                          <View style={styles.fadingContainer}>
                              {
                                  Thulec.map((values,i) => {
                                      return (
                                          <TouchableOpacity key={i} onPress={() => this.props.navigation.navigate('SubDetail')}>
                                              <Text style={styles.fadingText}>
                                                  {values}
                                              </Text>
                                          </TouchableOpacity>
                                      )
                                  })
                              }
                          </View>
                      )
                      } */}
                  </View>
                  <View style={styles.daycard}>
                      <Text style={styles.daytext} onPress={this.toggleFri}>
                          금요일
                  </Text>
                  {this.state.isFri && (
                          <View style={styles.fadingContainer}>
                              {
                                  LectureTime.map( (value,i) => {
                                      if( value.which_day === "금요일"){
                                        // fri_id_list.push(value.id)
                                        // console.log(fri_id_list)
                                        LectureName.map( obj => {
                                            if( obj.id === value.id ){
                                                fri_list = obj.lecture_name
                                            }
                                        })
                                        return (
                                            <Text>
                                                {fri_list}
                                            </Text>
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