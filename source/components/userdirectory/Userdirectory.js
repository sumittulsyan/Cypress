import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './Styles';
export class Userdirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: true,
    };
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.screenlayout}>
          <View style={styles.header}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.pop()}
                  style={{paddingBottom: 15}}>
                  <Icon
                    name="arrow-left"
                    size={20}
                    color="#000"
                    style={{paddingHorizontal: 5}}
                  />
                </TouchableOpacity>
              </View>
              <View style={{paddingBottom: 0}}>
                <Text style={styles.headertxt}>Directory</Text>
              </View>
            </View>
          </View>
          <View style={styles.userrow}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.imagecontainer}>
                <Image
                  style={styles.container}
                  resizeMode="stretch"
                  source={require('../../assets/back.jpeg')}
                />
              </View>
              <View style={styles.usertext}>
                <Text>User Name</Text>
                <Text>Strength Trainer</Text>

                <Text>Experience: 10years</Text>
              </View>
            </View>
            <View style={styles.followcontainer}>
              <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={0.5}>
                <Text style={styles.TextStyle}> follow </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={styles.followsuggestionheader}>
              <TouchableOpacity onPress={() => this.setState({method: true})}>
                <Text style={styles.followsuggestiontxt}>FEED</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({method: false})}>
                <Text style={styles.followsuggestiontxt}>WORKOUTS</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {this.state.method == true ? (
              <View
                style={{
                  marginTop:10,
                  backgroundColor: '#FFF',
                  borderColor: '#FFF',
                  borderWidth: 2,
                  paddingLeft: 10,
                  flex: 1,
                  // height:300
                }}>
                <View style={{flexDirection: 'row', height: 40}}>
                  <TouchableOpacity
                    style={styles.circularcontainer}></TouchableOpacity>

                  <View style={{paddingLeft: 10, paddingTop: 15}}>
                    <Text>User Name</Text>
                  </View>
                </View>
                <View style={{height: 30}}>
                  <Text
                    style={{
                      marginVertical: 10,
                      paddingBottom: 5,
                      fontWeight: '400',
                      borderBottomWidth: 0.5,
                      borderBottomColor: '#000',
                    }}>
                    Just completed my first workout with ever fit
                  </Text>
                </View>

                <Image
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: 'center',
                    // height:Dimensions.get('screen').height
                  }}
                  source={require('../../assets/back.jpeg')}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#000',
                    paddingBottom: 10,
                    paddingTop: 10,
                    height: 40,
                  }}>
                  <View style={{flexDirection: 'row', height: 40}}>
                    <Icon
                      name="heart"
                      size={12}
                      color="#000"
                      style={{paddingTop: 2, paddingRight: 5}}
                    />
                    <Text>Like</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Icon
                      name="comment-dots"
                      size={12}
                      color="#000"
                      style={{paddingTop: 2, paddingRight: 5}}
                    />
                    <Text>Comment</Text>
                  </View>
                </View>
              </View>
            ) : (
              <View>
                <View style={{marginVertical: 10}}>
                  <View style={styles.workoutcard}>
                    <Text>MY Workout 1</Text>
                    <Text>SUSCRIBE</Text>
                  </View>
                  <View style={styles.imagerow}>
                    <Image
                      style={styles.eachimagerow}
                      source={require('../../assets/cardio.jpeg')}
                    />
                    <Image
                      style={styles.eachimagerow}
                      source={require('../../assets/cardio4.jpeg')}
                    />
                    <Image
                      style={styles.eachimagerow}
                      source={require('../../assets/cardio2.jpeg')}
                    />
                  </View>
                </View>
                <View style={{marginVertical: 10}}>
                  <View style={styles.workoutcard1}>
                    <Text>MY Workout 2</Text>
                    <Text>SUSCRIBE</Text>
                  </View>
                  <View style={styles.imagerow}>
                    <Image
                      style={styles.eachimagerow}
                      source={require('../../assets/cardio.jpeg')}
                    />
                    <Image
                      style={styles.eachimagerow}
                      source={require('../../assets/cardio4.jpeg')}
                    />
                    <Image
                      style={styles.eachimagerow}
                      source={require('../../assets/cardio2.jpeg')}
                    />
                  </View>
                </View>
                <View style={{marginVertical: 10}}>
                  <View style={styles.workoutcard1}>
                    <Text>MY Workout 3</Text>
                    <Text>SUSCRIBE</Text>
                  </View>
                  <View style={styles.imagerow}>
                    <Image
                      style={styles.eachimagerow}
                      source={require('../../assets/cardio.jpeg')}
                    />
                    <Image
                      style={styles.eachimagerow}
                      source={require('../../assets/cardio4.jpeg')}
                    />
                    <Image
                      style={styles.eachimagerow}
                      source={require('../../assets/cardio2.jpeg')}
                    />
                  </View>
                </View>
              </View>
            )}
          </View>
          <View>
            <View style={styles.postcontainer}></View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Userdirectory;
