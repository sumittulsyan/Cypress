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
  SafeAreaView
} from 'react-native';
import styles from './Styles';
export class Workout extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:"#E3EEF7",}}>
      <ScrollView>
      <View style={styles.screenlayout}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headertxt}>Workout</Text>
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
        <View style={{marginBottom:20}}>
          <Text>New Release</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.template}>
              <Image
                style={styles.templateimg}
                source={require('../../assets/arms2.jpeg')}
              />
            </View>
            <View style={styles.template}>
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
              <Text style={{paddingLeft: 20}}> Featured </Text>
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
              <Text style={{paddingLeft: 20}}> Quick Start </Text>
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
              <Text style={{paddingLeft: 20}}> Collection </Text>
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
              <Text style={{paddingLeft: 20}}> Exercise Libarary </Text>
              <Icon
                name="chevron-right"
                size={16}
                color="#000"
                style={{paddingHorizontal: 5}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.findprogram}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Categories</Text>
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
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Workout;
