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
export default class QuickStartSecond extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: true,
      pressStatus: true,
      intense: true,
      row1: true,
      row2: true,
      row11: true,
      row12: true,
      row21: true,
      row22: true,
      row31: true,
      row32: true,
      row41: true,
      row42: true,
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#E3EEF7'}}>
        <View>
          <View style={styles.quickstart}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Icon
                name="arrow-left"
                size={20}
                color="#22304A"
                style={{paddingRight: 10}}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 20,
                justifyContent: 'center',
                color: '#22304A',
                fontWeight: 'bold',
              }}>
              Quick Start
            </Text>
          </View>
          <View>
            <Text style={styles.text1}>Step 2/2</Text>
            <Text style={styles.text2}> What your target?</Text>
          </View>
          <View style={styles.MainContainer}>
          <TouchableOpacity
              style={
                this.state.row1
                  ? styles.SubmitButtonStyle: styles.SubmitButtonStyleShade
                  
              }
              onPress={() =>
                this.state.row1 == true
                  ? this.setState({row1: false})
                  : this.setState({row1: true})
              }
              activeOpacity={0.5}>
              <Text
                style={
                  this.state.row1 == true
                    ? styles.TextStyle:styles.TextStyleS
                    
                }>
                
                Lose Weight
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.row2
                  ? styles.SubmitButtonStyleRight: styles.SubmitButtonStyleRightPress
                  
              }
              onPress={() =>
                this.state.row2 == true
                  ? this.setState({row2: false})
                  : this.setState({row2: true})
              }
              activeOpacity={0.5}>
              <Text
                style={
                  this.state.row2 == true
                    ? styles.TextStyle:styles.TextStyleS
                    
                }>
                
                Strength core
              </Text>
            </TouchableOpacity>
            
          </View>
          <View style={styles.MainContainer}>
            <TouchableOpacity
              style={
                this.state.pressStatus
                  ? styles.SubmitButtonStyleShade
                  : styles.SubmitButtonStyleShadePress
              }
              onPress={() =>
                this.state.pressStatus == true
                  ? this.setState({pressStatus: false})
                  : this.setState({pressStatus: true})
              }
              activeOpacity={0.5}>
              <Text
                style={
                  this.state.pressStatus == true
                    ? styles.TextStyleS
                    : styles.TextStyle
                }>
                
                Build Muscle
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.row11
                ? styles.SubmitButtonStyleRight: styles.SubmitButtonStyleRightPress
                  
              }
              onPress={() =>
                this.state.row11 == true
                  ? this.setState({row11: false})
                  : this.setState({row11: true})
              }
              activeOpacity={0.5}>
              <Text
                style={
                  this.state.row11 == true
                    ? styles.TextStyle:styles.TextStyleS
                    
                }>
                
                Tone Muscle
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.MainContainer}>
          <TouchableOpacity
              style={
                this.state.row12
                  ? styles.SubmitButtonStyleShadePress: styles.SubmitButtonStyleShade
                  
              }
              onPress={() =>
                this.state.row12 == true
                  ? this.setState({row12: false})
                  : this.setState({row12: true})
              }
              activeOpacity={0.5}>
              <Text
                style={
                  this.state.row12 == true
                    ? styles.TextStyle:styles.TextStyleS
                    
                }>
                
                Improve Endurance
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={
                this.state.row21
                ? styles.SubmitButtonStyleRight: styles.SubmitButtonStyleRightPress
                  
              }
              onPress={() =>
                this.state.row21 == true
                  ? this.setState({row21: false})
                  : this.setState({row21: true})
              }
              activeOpacity={0.5}>
              <Text
                style={
                  this.state.row21 == true
                    ? styles.TextStyle:styles.TextStyleS
                    
                }>
                
                Stay Fit
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.MainContainer}>
          <TouchableOpacity
              style={
                this.state.row22
                  ? styles.SubmitButtonStyleShadePress: styles.SubmitButtonStyleShade
                  
              }
              onPress={() =>
                this.state.row22 == true
                  ? this.setState({row22: false})
                  : this.setState({row22: true})
              }
              activeOpacity={0.5}>
              <Text
                style={
                  this.state.row22 == true
                    ? styles.TextStyle:styles.TextStyleS
                    
                }>
                
                Free
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.row31
                ? styles.SubmitButtonStyleRight: styles.SubmitButtonStyleRightPress
                  
              }
              onPress={() =>
                this.state.row31 == true
                  ? this.setState({row31: false})
                  : this.setState({row31: true})
              }
              activeOpacity={0.5}>
              <Text
                style={
                  this.state.row31 == true
                    ? styles.TextStyle:styles.TextStyleS
                    
                }>
                
                Target UpperBody
              </Text>
            </TouchableOpacity>
            
          </View>
          <View style={styles.MainContainer}>
          <TouchableOpacity
              style={
                this.state.row32
                  ? styles.SubmitButtonStyleShadePress: styles.SubmitButtonStyleShade
                  
              }
              onPress={() =>
                this.state.row32 == true
                  ? this.setState({row32: false})
                  : this.setState({row32: true})
              }
              activeOpacity={0.5}>
              <Text
                style={
                  this.state.row32 == true
                    ? styles.TextStyle:styles.TextStyleS
                    
                }>
                
                All About Yoga
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={
                this.state.method
                  ? styles.SubmitButtonStyleShadeRight
                  : styles.SubmitButtonStyleShadeRightPress
              }
              onPress={() =>
                this.state.method == true
                  ? this.setState({method: false})
                  : this.setState({method: true})
              }
              activeOpacity={0.5}>
              <Text
                style={
                  this.state.method == true
                    ? styles.TextStyleS
                    : styles.TextStyle
                }>
                
                Bodyweight
                </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.MainContainer}>
          <TouchableOpacity
              style={
                this.state.row41
                  ? styles.SubmitButtonStyleShadePress: styles.SubmitButtonStyleShade
                  
              }
              onPress={() =>
                this.state.row41 == true
                  ? this.setState({row41: false})
                  : this.setState({row41: true})
              }
              activeOpacity={0.5}>
              <Text
                style={
                  this.state.row41 == true
                    ? styles.TextStyle:styles.TextStyleS
                    
                }>
                
                Beginner Guide
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.row42
                ? styles.SubmitButtonStyleRight: styles.SubmitButtonStyleRightPress
                  
              }
              onPress={() =>
                this.state.row42 == true
                  ? this.setState({row42: false})
                  : this.setState({row42: true})
              }
              activeOpacity={0.5}>
              <Text
                style={
                  this.state.row42 == true
                    ? styles.TextStyle:styles.TextStyleS
                    
                }>
                
                Cardio
              </Text>
            </TouchableOpacity>
            
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 35}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.props.navigation.navigate('BottomTabNavigator')
            }>
            <Text style={styles.btntext}>Finish</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
