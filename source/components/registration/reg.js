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
      <View style={styles.reform}>
        <Text style={styles.header}>EVER FIT</Text>
        <Text style={styles.subheader}>Your Peronal trainer</Text>
        <Text style={styles.subheader1}>
          is now at the ease of your fingertip
        </Text>
        <View style={styles.toggle}>
          <TouchableOpacity
            style={{
              marginHorizontal: 10,
              borderBottomColor: '#000000',
              borderBottomWidth: 1,
            }}
            onPress={() => this.setState({method: false, pressStatus: false})}>
                              <Text style={this.state.pressStatus ? styles.textPress : styles.textt}>SIGN UP</Text>

            {/* <TouchableHighlight>
            </TouchableHighlight> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toggletxt}
            onPress={() => this.setState({method: true, pressStatus: true })}>
                              <Text style={this.state.pressStatus ?styles.textt: styles.textPress  }>SIGN IN</Text>

            {/* <TouchableHighlight>
            </TouchableHighlight> */}
          </TouchableOpacity>
        </View>
        <View style={styles.phoneno}>
          <Icon style={styles.searchIcon} name="phone" size={20} color="#000" />
          <TextInput
            style={styles.textinput}
            placeholder="+91-8486629876"></TextInput>
        </View>
        {this.state.method == true ? (
          <View style={styles.password}>
            <Icon
              style={styles.searchIcon}
              name="lock"
              size={20}
              color="#000"
            />
            <TextInput
              style={styles.textinput}
              placeholder="Password"></TextInput>
          </View>
        ) : (
          <View>
            <View style={styles.otpset}>
              <View style={styles.otp}>
                <Icon
                  style={styles.searchIcon}
                  name="keyboard"
                  size={20}
                  color="#000"
                />
                <TextInput
                  style={styles.otptextinput}
                  placeholder="OTP"></TextInput>
              </View>
              <TouchableOpacity style={styles.otpverify}>
                <Text style={styles.btntext}>Verify</Text>
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.setpassword}>
                <Icon
                  style={styles.searchIcon}
                  name="lock"
                  size={20}
                  color="#000"
                />
                <TextInput
                  style={styles.textinput}
                  placeholder="Set Password"></TextInput>
              </View>
            </View>
            <View style={styles.margintothebottom}>
              <View style={styles.setpassword}>
                <Icon
                  style={styles.searchIcon}
                  name="lock"
                  size={20}
                  color="#000"
                />
                <TextInput
                  style={styles.textinput}
                  placeholder="Repeat Password"></TextInput>
              </View>
            </View>
          </View>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          {this.state.method == true ? (
            <Text style={styles.btntext}>Sign In</Text>
          ) : (
            <Text style={styles.btntext}>Sign UP</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.footer}>Or Sign in With</Text>
        <View style={styles.footericon}>
          <Icon name="snapchat" size={20} color="#000000" style={styles.icon} />
          <Icon name="twitter" size={20} color="#000000" style={styles.icon} />
          <Icon
            name="facebook-f"
            size={20}
            color="#000000"
            style={styles.icon}
          />
        </View>
      </View>
    );
  }
}
