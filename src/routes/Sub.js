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
        isMon: true
    }

    togglefunc =() => {
        this.setState(prevState =>{
            return {
            isMon: !prevState.isMon
            }
        });
    }

    render() {
    console.log(this.props.navigation.state.params)
      return (
          <ScrollView>
              <View style={styles.container}>
                  <View style={styles.daycard}>
                      <Text style={styles.daytext} onPress={this.togglefunc}>
                          월요일
                  </Text>
                      {this.state.isMon && (
                          <View style={styles.fadingContainer}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('SubDetail')}>
                                  <Text style={styles.fadingText}>
                                      정보보호프로젝트설계실습1
                                </Text>
                                  <Text style={{ marginLeft: 10, marginBottom: 5 }}>
                                      13:10~14:00
                                </Text>
                              </TouchableOpacity>
                          </View>
                      )}
                  </View>
                  <View style={styles.daycard}>
                      <Text style={styles.daytext}>
                          화요일
                  </Text>
                  </View>
                  <View style={styles.daycard}>
                      <Text style={styles.daytext}>
                          수요일
                  </Text>
                  </View>
                  <View style={styles.daycard}>
                      <Text style={styles.daytext}>
                          목요일
                  </Text>
                  </View>
                  <View style={styles.daycard}>
                      <Text style={styles.daytext}>
                          금요일
                  </Text>
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
        paddingHorizontal: width/2.28,
        fontSize: 17,
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