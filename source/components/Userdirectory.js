import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export class Userdirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: true,
    };
  }
  render() {
    return (
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
                source={require('../assets/back.jpeg')}
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
                backgroundColor: '#000',
                borderColor: '#FFF',
                borderWidth: 2,
                paddingLeft: 10,
                paddingRight: 10,
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
                source={require('../assets/back.jpeg')}
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
          ) : <View>
            <View style={{marginVertical:10}}>
              <View style={styles.workoutcard}>
                <Text>MY Workout 1</Text>
                <Text>SUSCRIBE</Text>
              </View>
              <View style={styles.imagerow}>
              <Image
                style={styles.eachimagerow}
                source={require('../assets/cardio.jpeg')}
              />
              <Image
                style={styles.eachimagerow}
                source={require('../assets/cardio1.jpeg')}
              />
              <Image
                style={styles.eachimagerow}
                source={require('../assets/cardio2.jpeg')}
              />
              </View>
            </View>
            <View style={{marginVertical:10}}>
            <View style={styles.workoutcard1}>
              <Text>MY Workout 1</Text>
              <Text>SUSCRIBE</Text>
            </View>
            <View style={styles.imagerow}>
            <Image
              style={styles.eachimagerow}
              source={require('../assets/cardio.jpeg')}
            />
            <Image
              style={styles.eachimagerow}
              source={require('../assets/cardio1.jpeg')}
            />
            <Image
              style={styles.eachimagerow}
              source={require('../assets/cardio2.jpeg')}
            />
            </View>
          </View>
          <View style={{marginVertical:10}}>
          <View style={styles.workoutcard1}>
            <Text>MY Workout 1</Text>
            <Text>SUSCRIBE</Text>
          </View>
          <View style={styles.imagerow}>
          <Image
            style={styles.eachimagerow}
            source={require('../assets/cardio.jpeg')}
          />
          <Image
            style={styles.eachimagerow}
            source={require('../assets/cardio1.jpeg')}
          />
          <Image
            style={styles.eachimagerow}
            source={require('../assets/cardio2.jpeg')}
          />
          </View>
        </View>
        </View>
          }
        </View>
        <View>
          <View style={styles.postcontainer}>
         
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  screenlayout: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40,
  },
  userrow: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagecontainer: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'white',
  },
  usertext: {
    marginTop: 0,
    marginLeft: 5,
  },
  SubmitButtonStyle: {
    flexDirection: 'row',
    // marginTop:10,
    paddingTop: 5,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 40,
    // marginRight: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFF',
    elevation: 8,
  },
  TextStyle: {
    textAlign: 'center',
    color: '#000',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  headertxt: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingLeft: 5,
    // paddingBottom:5
    marginBottom: 5,
  },
  followsuggestionheader: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  followsuggestiontxt: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  circularcontainer: {
    height: 50,
    width: 50,
    backgroundColor: '#000',
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    borderRadius: 25,
  },
  workoutcard: {flexDirection: 'row', 
  justifyContent: 'space-between'
  ,marginTop:10,
  marginBottom:10
},
workoutcard1: {flexDirection: 'row', 
  justifyContent: 'space-between'
  ,marginTop:100,
  marginBottom:10
},
imagerow:{
    flex:1,
    flexDirection:"row"
},
eachimagerow:{
    height: 150,
    width: '100%',
    justifyContent: 'center',
    flex:1,
    marginRight:10
    // height:Dimensions.get('screen').height
  }

,
  postcontainer: {},
});
export default Userdirectory;
