import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
export class Group extends Component {
  render() {
    return (
      <View style={styles.screenlayout}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headertxt}>Groups</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Icon
                name="bars"
                size={20}
                color="#000"
                style={{paddingHorizontal: 5}}
              />
            </View>
          </View>
        </View>
        <View style={styles.phoneno}>
          <Icon style={styles.searchIcon} name="search" size={16} />
          <TextInput style={styles.textinput} placeholder="Search"></TextInput>
        </View>
        <View>
          <Text>Join a Group</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.template}>
              <Image
                style={styles.templateimg}
                source={require('../assets/arms3.jpeg')}
              />
              <View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> Fit for life </Text>
                  <Icon
                    name="plus"
                    size={8}
                    color="#000"
                    style={{paddingTop: 2, paddingRight: 5}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.template}>
              <Image
                style={styles.templateimg}
                source={require('../assets/arms3.png')}
              />
              <View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> Roar Club </Text>
                  <Icon
                    name="plus"
                    size={8}
                    color="#000"
                    style={{paddingTop: 2, paddingRight: 5}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.template}>
              <Image
                style={styles.templateimg}
                source={require('../assets/chest1.jpeg')}
              />
              <View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> New Zela... </Text>
                  <Icon
                    name="plus"
                    size={8}
                    color="#000"
                    style={{paddingTop: 2, paddingRight: 5}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.globaltxt}>Global Network</Text>
        </View>
        <View
          style={{
            height: 300,
            width: 370,
            backgroundColor: '#FFFFFF',
            borderColor: '#FFF',
            borderWidth: 2,
            paddingLeft: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity
                style={styles.circularcontainer}></TouchableOpacity>
            </View>
            <View>
              <View style={{paddingLeft: 10, paddingTop: 15}}>
                <Text>User Name</Text>
              </View>
            </View>
          </View>
          <View>
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              borderBottomWidth: 0.5,
              borderBottomColor: '#000',
              paddingBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
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
          <View style={{flexDirection: 'row', marginTop: 8}}>
            <View>
              <TouchableOpacity
                style={styles.circularcontainer1}></TouchableOpacity>
            </View>
            <View>
              <View style={{paddingLeft: 10, paddingTop: 5}}>
                <Text>User Name</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 8}}>
            <View>
              <TouchableOpacity
                style={styles.circularcontainer1}></TouchableOpacity>
            </View>
            <View>
              <View style={{paddingLeft: 10, paddingTop: 5}}>
                <Text>User Name</Text>
                <Text style={{fontSize: 12}}>Great going boy</Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: 8}}>
            <View>
              <TouchableOpacity
                style={styles.circularcontainer1}></TouchableOpacity>
            </View>
            <View>
              <View style={{paddingLeft: 10, paddingTop: 5}}>
                <Text>User Name</Text>
                <Text style={{fontSize: 12}}>
                  oh.That sound like a challenge now.
                </Text>
              </View>
            </View>
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
  header: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  circularcontainer: {
    height: 50,
    width: 50,
    backgroundColor: '#000',
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    borderRadius: 25,
  },
  circularcontainer1: {
    height: 30,
    width: 30,
    backgroundColor: '#000',
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    borderRadius: 25,
  },
  headertxt: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  secondheadertxt: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 30,
  },
  headericon: {},
  SubmitButtonStyle: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  phoneno: {
    //flex:1,
    borderColor: '#000000',
    borderWidth: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 50,
    marginVertical: 10,
    borderRadius: 10,
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textinput: {
    flex: 1,
    alignSelf: 'stretch',
    paddingBottom: 10,
    color: '#00FFFF',
  },
  container: {
    marginRight: 20,
    marginTop: 10,
    justifyContent: 'center',
    // width:320,
    borderRadius: 2,
    width: 320,
    height: 140,
    // marginHorizontal:100
  },
  globaltxt: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },

  template: {
    flexDirection: 'column',
    width: 120,
    justifyContent: 'center',
    marginRight: 8,
  },
  templateimg: {
    marginTop: 10,
    height: 80,
    width: 110,
    borderRadius: 5,
  },
  templatetxt: {
    textAlign: 'center',
  },
  TextStyle: {
    textAlign: 'center',
    color: '#000',
    paddingHorizontal: 4,
    fontSize: 10,
  },
});
export default Group;
