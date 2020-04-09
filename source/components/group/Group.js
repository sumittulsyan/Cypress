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
import styles from './Styles';
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
                source={require('../../assets/arms3.jpeg')}
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
                source={require('../../assets/arms3.png')}
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
                source={require('../../assets/chest1.jpeg')}
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
            width: "100%",
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

export default Group;
