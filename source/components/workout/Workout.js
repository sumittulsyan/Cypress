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
export class Workout extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#E3EEF7'}}>
        <ScrollView>
          <View style={styles.screenlayout}>
            <View style={styles.header}>
              <View>
                <Text style={styles.headertxt}>Workout</Text>
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
            <View style={{marginBottom: 20, paddingLeft: 15, paddingRight: 15}}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#22304A',
                  fontWeight: 'bold',
                  color: '#22304A',
                }}>
                New Release
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.template}>
                  <Image
                    style={styles.templateimg}
                    source={require('../../assets/arms2.jpeg')}
                  />
                </View>
                <View style={styles.templatelast}>
                  <Image
                    style={styles.templateimg}
                    source={require('../../assets/arms5.jpeg')}
                  />
                </View>
              </View>
            </View>
            <View style={{}}>
              <View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle1}
                  activeOpacity={0.5}>
                  <Text
                    style={{
                      paddingLeft: 12,
                      fontSize: 16,
                      color: '#22304A',
                      letterSpacing: 0.5,
                      fontWeight: '300',
                    }}>
                    {' '}
                    Featured{' '}
                  </Text>
                  <Icon
                    name="chevron-right"
                    size={12}
                    color="#000"
                    style={{paddingHorizontal: 12}}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle1}
                  activeOpacity={0.5}>
                  <Text
                    style={{
                      paddingLeft: 12,
                      fontSize: 16,
                      color: '#22304A',
                      letterSpacing: 0.5,
                      fontWeight: '300',
                    }}>
                    {' '}
                    Quick Start{' '}
                  </Text>
                  <Icon
                    name="chevron-right"
                    size={12}
                    color="#000"
                    style={{paddingHorizontal: 12}}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle1}
                  activeOpacity={0.5}>
                  <Text
                    style={{
                      paddingLeft: 12,
                      fontSize: 16,
                      color: '#22304A',
                      letterSpacing: 0.5,
                      fontWeight: '300',
                    }}>
                    {' '}
                    Collection{' '}
                  </Text>
                  <Icon
                    name="chevron-right"
                    size={12}
                    color="#000"
                    style={{paddingHorizontal: 12}}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle1}
                  activeOpacity={0.5}>
                  <Text
                    style={{
                      paddingLeft: 12,
                      fontSize: 16,
                      color: '#22304A',
                      letterSpacing: 0.5,
                      fontWeight: '300',
                    }}>
                    {' '}
                    Exercise Libarary{' '}
                  </Text>
                  <Icon
                    name="chevron-right"
                    size={12}
                    color="#000"
                    style={{paddingHorizontal: 12}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{paddingLeft: 15, paddingRight: 15,marginTop:18}}>
              <Text style={{fontSize: 16, fontWeight: 'normal',color:"#22304A"}}>Category</Text>
            </View>
            <View style={{flexDirection: 'row',marginLeft:15,marginRight:15}}>
              <View style={styles.template}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/cardio3.jpeg')}
                />
              </View>
              <View style={styles.templatelast}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/cardio4.jpeg')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Workout;
