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
import Regform from '../registration/reg';
import styles from './Styles';
export default function HomeScreen(props) {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:"#E3EEF7"}}>
      <View style={{flex: 1}}>
        <View>
          <View style={styles.quickstart}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Regform')}>
              <Icon
                name="arrow-left"
                size={20}
                color="#000"
                style={{padding: 10}}
              />
            </TouchableOpacity>

            <Text style={{padding: 8, fontSize: 20, justifyContent: 'center'}}>
              Quick Start
            </Text>
          </View>
          <View>
            <Text style={styles.text1}>Step 1/2</Text>
            <Text style={styles.text2}> What is dificulty level </Text>
          </View>
          <View style={{}}>
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity={0.5}>
              <Text style={styles.TextStyle}> CASUAL </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.SubmitButtonStyle1}
              activeOpacity={0.5}>
              <Text style={styles.TextStyle1}> MODERATE </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.SubmitButtonStyle2}
              activeOpacity={0.5}>
              <Text style={styles.TextStyle1}> INTENSE </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.fotter}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate('QuickStartSecond');
            }}>
            <Text style={styles.btntext}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
