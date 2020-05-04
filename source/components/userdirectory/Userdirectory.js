import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './Styles';
export class Userdirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: false,
      pressStatus:true
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:"#E3EEF7"}}>
      <ScrollView>
        <View style={styles.screenlayout}>
          
            <View style={{flexDirection: 'row',alignItems:"center"}}>
              
                <TouchableOpacity
                  onPress={() => this.props.navigation.pop()}
                  style={{}}>
                  <Icon
                    name="arrow-left"
                    size={20}
                    color="#000"
                    style={{paddingHorizontal: 5}}
                  />
                </TouchableOpacity>
              
              <View style={{paddingBottom: 0}}>
                <Text style={styles.headertxt}>Directory</Text>
              </View>
            
          </View>
          <View style={styles.userrow}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.imagecontainer}>
                <Image
                  style={styles.container}
                  resizeMode="stretch"
                  source={require('../../assets/profile3/profile2x.png')}
                />
              </View>
              <View style={styles.usertext}>
                <Text style={{fontSize:20,fontWeight:"normal",color:"#22304A"}}>User Name</Text>
                <Text style={{fontSize:16,fontWeight:"normal",color:"#6F7C8F"}}>Strength Trainer</Text>

                <Text style={{fontSize:16,fontWeight:"normal",color:"#6F7C8F"}}>Experience: 10years</Text>
              </View>
            </View>
            <View style={styles.followcontainer}>
              <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={0.5}>
                <Text style={styles.TextStyle}> Follow </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={styles.followsuggestionheader}>
            <TouchableOpacity
              style={this.state.pressStatus ?styles.toggletxtinactive: styles.toggletxtactive}
              onPress={() =>
                this.setState({method: true, pressStatus: false})
              }>
              <Text
                style={
                  this.state.pressStatus ? styles.textt : styles.textPress
                }>
                FEED
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={ this.state.pressStatus ? styles.toggletxtactive:styles.toggletxtinactive}
              onPress={() => this.setState({method: false, pressStatus: true})}>
              <Text
                style={
                  this.state.pressStatus ? styles.textPress: styles.textt
                }>
                WORKOUTS
              </Text>

              {/* <TouchableHighlight>
            </TouchableHighlight> */}
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
                  paddingHorizontal:10,
                  flex: 1,
                  height:420
                  // height:300
                }}>
                <View style={{flexDirection: 'row', height: 40,alignItems:"center"}}>
                  <TouchableOpacity
                    style={styles.circularcontainer}></TouchableOpacity>

                  <View style={{ paddingLeft:12}}>
                    <Text style={{fontSize:16,fontWeight:"normal",color:"#22304A"}} >User Name</Text>
                  </View>
                </View>
                <View style={{height: 40}}>
                  <Text
                    style={{
                      marginVertical: 10,
                      paddingBottom: 5,
                      
                      borderBottomWidth: 0.5,
                      borderBottomColor: '#000',
                    fontSize:16,fontWeight:"normal",color:"#22304A"
                    }}>
                    Just completed my first workout with ever fit.
                  </Text>
                </View>

                <Image
                  style={{
                    height: 300,
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
                    paddingBottom: 10,
                    paddingTop: 10,
                    height: 40,
                  }}>
                  <View style={{flexDirection: 'row', height: 40}}>
                  <Image style={{height:16,width:16,}} source={require('../../assets/Icons/Heart.png')} />

                    <Text  style={{fontSize:16,fontWeight:"normal",color:"#22304A",paddingLeft:5}}>Like</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image style={{height:16,width:16}} source={require('../../assets/Icons/Comment.png')} />
                    <Text  style={{fontSize:16,fontWeight:"normal",color:"#22304A",paddingLeft:5}}>Comment</Text>
                  </View>
                </View>
              </View>
            ) : (
              <View>
                <View style={{marginVertical: 10}}>
                  <View style={styles.workoutcard}>
                    <Text style={{fontSize:16,color:"#22304A",fontWeight:"600"}}>My Workout 1</Text>
                    <View style={{borderBottomWidth:1,borderBottomColor:"000",}}>
                    <Text style={{fontSize:14,color:"#22304A",fontWeight:"bold",marginBottom:0}}>SUBSCRIBE</Text></View>
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
                    <Text style={{fontSize:16,color:"#22304A",fontWeight:"600"}}>My Workout 2</Text>
                    <View style={{borderBottomWidth:1,borderBottomColor:"000",}}>
                    <Text style={{fontSize:14,color:"#22304A",fontWeight:"bold",marginBottom:0}}>SUBSCRIBE</Text></View>
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
                    <Text style={{fontSize:16,color:"#22304A",fontWeight:"600"}}>My Workout 3</Text>
                    <View style={{borderBottomWidth:1,borderBottomColor:"000",}}>
                    <Text style={{fontSize:14,color:"#22304A",fontWeight:"bold",marginBottom:0}}>SUBSCRIBE</Text></View>
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
      </SafeAreaView>
    );
  }
}

export default Userdirectory;
