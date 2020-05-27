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
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from './Styles';
export class Group extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#E3EEF7'}}>
        <ScrollView>
          <View style={styles.screenlayout}>
            <View style={styles.header}>
              <View>
                <Text style={styles.headertxt}>Groups</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    style={{height: 16, width: 16}}
                    source={require('../../assets/Icons/Alert.png')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.phoneno}>
              <Icon style={styles.searchIcon} name="search" size={16} />
              <TextInput style={styles.textinput} placeholder="Search" />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: '#22304A',
                  fontWeight: 'bold',
                  color: '#22304A',
                }}>
                Join a group
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.template}>
                  <Image
                    style={styles.templateimg}
                    source={require('../../assets/group-promo/group-gym-promo_0.png')}
                  />
                  <View>
                    <TouchableOpacity
                      style={styles.SubmitButtonStyle}
                      activeOpacity={0.5}>
                      <Text style={styles.TextStyle}> Fit for life </Text>
                      <Icon
                        name="plus"
                        size={14}
                        color="#A4A9B2"
                        style={{paddingTop: 2, paddingRight: 5}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.template}>
                  <Image
                    style={styles.templateimg}
                    source={require('../../assets/group-promo-selfie/selfie1.png')}
                  />
                  <View>
                    <TouchableOpacity
                      style={styles.SubmitButtonStyle}
                      activeOpacity={0.5}>
                      <Text style={styles.TextStyle}> Roar Club </Text>
                      <Icon
                        name="plus"
                        size={14}
                        color="#A4A9B2"
                        style={{paddingTop: 2, paddingRight: 5}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.templatelast}>
                  <Image
                    style={styles.templateimg}
                    source={require('../../assets/group-promo-1/group_promo-1.png')}
                  />
                  <View>
                    <TouchableOpacity
                      style={styles.SubmitButtonStyle}
                      activeOpacity={0.5}>
                      <Text style={styles.TextStyle}> New Zela... </Text>
                      <Icon
                        name="plus"
                        size={14}
                        color="#A4A9B2"
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
                height: 360,
                width: '100%',
                backgroundColor: '#FFFFFF',
                borderColor: '#FFF',
                borderWidth: 2,
                paddingLeft: 10,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.5,
                shadowRadius: 2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  alignContent: 'center',
                }}>
                <TouchableOpacity style={styles.circularcontainer} />

                <View style={{paddingLeft: 10, justifyContent: 'center'}}>
                  <Text style={{fontSize: 16, color: '#09152D'}}>
                    User Name
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    marginVertical: 10,
                    fontWeight: '400',
                    borderBottomWidth: 7,
                    fontSize: 16,
                    color: '#09152D',
                  }}>
                  Just completed my first workout with ever fit
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  borderTopColor: '#00000029',
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderBottomColor: '#00000029',
                  paddingVertical: 18,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                  }}>
                  <Image
                    style={{height: 16, width: 16, paddingHorizontal: 5}}
                    source={require('../../assets/Icons/Heart.png')}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      paddingHorizontal: 5,
                      marginBottom: 5,
                      color: '#636B7A',
                    }}>
                    Like
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 16, width: 16, paddingHorizontal: 5}}
                    source={require('../../assets/Icons/Comment.png')}
                  />

                  <Text
                    style={{
                      fontSize: 16,
                      paddingHorizontal: 5,
                      paddingBottom: 5,
                      color: '#636B7A',
                    }}>
                    Comment
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <View>
                  <TouchableOpacity style={styles.circularcontainer1} />
                </View>
                <View>
                  <View style={{paddingLeft: 10, paddingTop: 5}}>
                    <Text style={{fontSize: 16}}>User Name</Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 30}}>
                <View>
                  <TouchableOpacity style={styles.circularcontainer1} />
                </View>
                <View>
                  <View style={{paddingLeft: 10, paddingTop: 5}}>
                    <Text style={{fontSize: 16}}>User Name</Text>
                    <Text style={{fontSize: 16, color: '#A4A9B2'}}>
                      Great going boy
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{flexDirection: 'row', marginTop: 20}}>
                <View>
                  <TouchableOpacity style={styles.circularcontainer1} />
                </View>
                <View>
                  <View style={{paddingLeft: 10, paddingTop: 5}}>
                    <Text style={{fontSize: 16}}>User Name</Text>
                    <Text style={{fontSize: 16, color: '#A4A9B2'}}>
                      Oh. That sound like a challenge now.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Group;
