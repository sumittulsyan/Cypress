import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from './Styles';
export class Trainer extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#E3EEF7'}}>
        <ScrollView>
          <View style={styles.screenlayout}>
            <View style={styles.header}>
              <View>
                <Text style={styles.headertxt}>Trainer</Text>
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
                Featured
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.template}>
                  <Image
                    style={styles.templateimg}
                    source={require('../../assets/arms3.jpeg')}
                  />
                </View>
                <View style={styles.template}>
                  <Image
                    style={styles.templateimg}
                    source={require('../../assets/arms3.png')}
                  />
                </View>
                <View style={styles.templatelast}>
                  <Image
                    style={styles.templateimg}
                    source={require('../../assets/chest1.jpeg')}
                  />
                </View>
              </View>
            </View>
            <View>
              <View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle1}
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate('Suggestion')}>
                  <Text
                    style={{
                      paddingLeft: 15,
                      fontSize: 14,
                      color: '#22304A',
                      letterSpacing: 0.5,
                      fontWeight: 'normal',
                    }}>
                    {' '}
                    Available{' '}
                  </Text>
                  <Icon
                    name="chevron-right"
                    size={12}
                    color="#000"
                    style={{paddingHorizontal: 15}}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle1}
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate('Directory')}>
                  <Text
                    style={{
                      paddingLeft: 15,
                      fontSize: 14,
                      color: '#22304A',
                      letterSpacing: 0.5,
                      fontWeight: 'normal',
                    }}>
                    {' '}
                    Directory{' '}
                  </Text>
                  <Icon
                    name="chevron-right"
                    size={12}
                    color="#000"
                    style={{paddingHorizontal: 15}}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle1}
                  activeOpacity={0.5}>
                  <Text
                    style={{
                      paddingLeft: 15,
                      fontSize: 14,
                      color: '#22304A',
                      letterSpacing: 0.5,
                      fontWeight: 'normal',
                    }}>
                    {' '}
                    Updates{' '}
                  </Text>
                  <Icon
                    name="chevron-right"
                    size={12}
                    color="#000"
                    style={{paddingHorizontal: 15}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 15}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#22304A',
                  marginLeft: 15,
                }}>
                Explore and stay motivated
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 15,
                marginRight: 15,
                marginTop: 26,
                
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:"center",alignContent:"center"}}>
                <View>
                  <TouchableOpacity style={styles.circularcontainer} />
                </View>
                <View style={{}}>
                  <View
                    style={{
                      flexDirection: 'column',
                      paddingLeft: 10,
                      paddingTop: 5,
                      textAlignVertical:"center",alignItems:"flex-start",justifyContent:"center",alignContent:"center",
                    }}>
                    <Text style={{color: '#22304A', fontSize: 16,}}>
                      User Name
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        paddingTop: 2,
                        fontWeight: '400',
                        color: '#8391A1',
                        
                      }}>
                      Fitness Trainer
                    </Text>
                  </View>
                </View>
              </View>
              
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> Follow </Text>
                  <Icon
                    name="plus"
                    size={12}
                    color="#000"
                    style={{ paddingRight:10, paddingLeft:5, alignSelf:"center"}}
                  />
                </TouchableOpacity>
              
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.template}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/cardio3.jpeg')}
                />
              </View>
              <View style={styles.template}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/cardio4.jpeg')}
                />
              </View>
              <View style={styles.template}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/cardio2.jpeg')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Trainer;
