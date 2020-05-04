import React, {Component} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  TouchableHighlight,
  ScrollView,
  Image
} from 'react-native';
import {color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './Styles';
export default class Regform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: true,
      pressStatus: true,
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1,backgroundColor:"#E3EEF7",}}>
        <View style={styles.reform}>
          <Text style={styles.header}>EVER FIT</Text>
          <Text style={styles.subheader}>Your Peronal trainer</Text>
          <Text style={styles.subheader1}>
            is now at the ease of your fingertip
          </Text>
          <View style={styles.toggle}>
            <TouchableOpacity
              style={this.state.pressStatus ? styles.toggletxtinactive: styles.toggletxtactive}
              onPress={() =>
                this.setState({method: false, pressStatus: false})
              }>
              <Text
                style={
                  this.state.pressStatus ? styles.textt : styles.textPress 
                }>
                SIGN UP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={ this.state.pressStatus ? styles.toggletxtinact:styles.toggletxtact}
              onPress={() => this.setState({method: true, pressStatus: true})}>
              <Text
                style={
                  this.state.pressStatus ? styles.textPress : styles.textt
                }>
                SIGN IN
              </Text>

              {/* <TouchableHighlight>
            </TouchableHighlight> */}
            </TouchableOpacity>
          </View>
          <View style={styles.phoneno}>
            <Image style={{height:16,width:16, justifyContent:"center",alignItems:"center",marginHorizontal:10}} source={require('../../assets/Icons/Phone.png')} />
            <TextInput style={styles.textinput} placeholder="+91-8486629876" />
           
            <Icon
              style={styles.searchIconTick}
              name="check"
              size={18}
              color="#FFF"
            />
          
          </View>
          {this.state.method == true ? (
            <View style={styles.password}>
                          <Image style={{height:16,width:16, justifyContent:"center",alignItems:"center",marginHorizontal:10,color:"#fff"}} source={require('../../assets/Icons/Lock.png')} />

              <TextInput style={styles.textinput} placeholder="Password" />
            </View>
          ) : (
            <View>
              <View style={styles.otpset}>
                <View style={styles.otp}>
                <Image style={{height:16,width:16, justifyContent:"center",alignItems:"center",marginHorizontal:10}} source={require('../../assets/Icons/otp.png')} />

                  <TextInput style={styles.otptextinput} placeholder="OTP" />
                </View>
                <TouchableOpacity style={styles.otpverify}>
                  <Text style={styles.btntext}>Verify</Text>
                </TouchableOpacity>
              </View>
              <View>
                <View style={styles.setpassword}>
                <Image style={{height:16,width:16, justifyContent:"center",alignItems:"center",marginHorizontal:10}} source={require('../../assets/Icons/Lock.png')} />

                  <TextInput
                    style={styles.textinput}
                    placeholder="Set Password"
                  />
                </View>
              </View>
              <View style={styles.margintothebottom}>
                <View style={styles.setpassword}>
                <Image style={{height:16,width:16, justifyContent:"center",alignItems:"center",marginHorizontal:10}} source={require('../../assets/Icons/Lock.png')} />

                  <TextInput
                    style={styles.textinput}
                    placeholder="Repeat Password"
                  />
                </View>
              </View>
            </View>
          )}
          <View style={styles.fotter}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              {this.state.method == true ? (
                <Text style={styles.btntext}>Sign In</Text>
              ) : (
                <Text style={styles.btntext}>Sign Up</Text>
              )}
            </TouchableOpacity>
            {this.state.method == true ? (
              <Text style={styles.footer}> Or sign in with</Text>
            ) : (
              <Text style={styles.footer}>Or sign up with</Text>
            )}
            <View style={styles.footericon}>
            <Image style={{height:12,width:16, justifyContent:"center",alignItems:"center",}} source={require('../../assets/Icons/mail.png')}  resizeMode="contain"/>

            <Image style={{height:12,width:16, justifyContent:"center",alignItems:"center",}} source={require('../../assets/Icons/twitter.png')} resizeMode="contain"/>

            <Image style={{height:16,width:20, justifyContent:"center",alignItems:"center"}} source={require('../../assets/Icons/facebook.png')}resizeMode="contain" />

            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
