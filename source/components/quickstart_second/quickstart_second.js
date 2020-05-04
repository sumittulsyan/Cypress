import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './Styles';
export default function QuickStartSecond(props) {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:"#E3EEF7"}}>
      <View>
        <View style={styles.quickstart}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('HomeScreen')}>
            <Icon
              name="arrow-left"
              size={20}
              color="#22304A"
              style={{paddingRight: 10}}
            />
          </TouchableOpacity>

          <Text style={{ fontSize: 20, justifyContent: 'center',color:"#22304A",fontWeight:"bold"}}>
            Quick Start
          </Text>
        </View>
        <View>
          <Text style={styles.text1}>Step 2/2</Text>
          <Text style={styles.text2}> What your target?</Text>
        </View>
        <View style={styles.MainContainer}>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}>
            <Text style={styles.TextStyle}> Lose Weight </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.SubmitButtonStyleRight}
            activeOpacity={0.5}>
            <Text style={styles.TextStyle}> Strength core </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MainContainer}>
          <TouchableOpacity
            style={styles.SubmitButtonStyleShade}
            activeOpacity={0.5}>
            <Text style={styles.TextStyleS}> Build Muscle </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.SubmitButtonStyleRight}
            activeOpacity={0.5}>
            <Text style={styles.TextStyle}> Tone Muscle </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MainContainer}>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}>
            <Text style={styles.TextStyle}> Improve Endurance </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.SubmitButtonStyleRight}
            activeOpacity={0.5}>
            <Text style={styles.TextStyle}> Stay Fit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MainContainer}>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}>
            <Text style={styles.TextStyle}> Free </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.SubmitButtonStyleRight}
            activeOpacity={0.5}>
            <Text style={styles.TextStyle}> Target UpperBody </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MainContainer}>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}>
            <Text style={styles.TextStyle}> All About Yoga </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.SubmitButtonStyleShadeRight}
            activeOpacity={0.5}>
            <Text style={styles.TextStyleS}> Bodyweight </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MainContainer}>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}>
            <Text style={styles.TextStyle}> Beginner Guide </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.SubmitButtonStyleRight}
            activeOpacity={0.5}>
            <Text style={styles.TextStyle}> Cardio </Text>
          </TouchableOpacity>
        </View>
        
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 35}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('BottomTabNavigator')}>
          <Text style={styles.btntext}>Finish</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
