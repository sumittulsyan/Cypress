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
              <TextInput style={styles.textinput} placeholder="Search" />
            </View>
            <View style={{marginBottom: 20}}>
              <Text>Featured</Text>
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
                <View style={styles.template}>
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
                  <Text style={{paddingLeft: 20}}> Available </Text>
                  <Icon
                    name="chevron-right"
                    size={16}
                    color="#000"
                    style={{paddingHorizontal: 5}}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle1}
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate('Directory')}>
                  <Text style={{paddingLeft: 20}}> Directory </Text>
                  <Icon
                    name="chevron-right"
                    size={16}
                    color="#000"
                    style={{paddingHorizontal: 5}}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle1}
                  activeOpacity={0.5}>
                  <Text style={{paddingLeft: 20}}> Updates </Text>
                  <Icon
                    name="chevron-right"
                    size={16}
                    color="#000"
                    style={{paddingHorizontal: 5}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginVertical: 8}}>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                Explore and stay motivated
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection:"row"}}>
                <View>
                  <TouchableOpacity style={styles.circularcontainer} />
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'column',
                      paddingLeft: 10,
                      paddingTop: 5,
                    }}>
                    <Text>User Name</Text>
                    <Text
                      style={{fontSize: 12, paddingTop: 2, fontWeight: '100'}}>
                      Fitness Trainer
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> Follow </Text>
                  <Icon
                    name="plus"
                    size={12}
                    color="#000"
                    style={{paddingTop: 5, paddingRight: 5}}
                  />
                </TouchableOpacity>
              </View>
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
