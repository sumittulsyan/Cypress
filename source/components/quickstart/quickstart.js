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
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: true,
      pressStatus: true,
      intense: true
    };
  }
  render(){
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:"#E3EEF7"}}>
      <View style={{flex: 1}}>
        <View>
          <View style={styles.quickstart}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Regform')}>
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
            <Text style={styles.text1}>Step 1/2</Text>
            <Text style={styles.text2}> What is dificulty level?</Text>
          </View>
          <View style={{}}>
            <TouchableOpacity
            style={this.state.pressStatus ? styles.SubmitButtonStyle: styles.SubmitButtonStylePress}
            onPress={() =>
              this.state.pressStatus == true ? this.setState({pressStatus:false}): this.setState({pressStatus:true,method:true,intense:true})
            }
            
              activeOpacity={0.5}>
              <Text style={this.state.pressStatus?  styles.TextStyle: styles.TextStylePress}> Casual </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
            style={this.state.method ? styles.SubmitButtonStyle1: styles.SubmitButtonStyle1Press}
            onPress={() =>
              this.state.method == true ? this.setState({ method:false, pressStatus:false,intense:true }): this.setState({ method:true,})
            }
              activeOpacity={0.5}>
              <Text style={this.state.method?  styles.TextStyle1: styles.TextStyle}> Moderate </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
            style={this.state.intense ? styles.SubmitButtonStyle2: styles.SubmitButtonStyle2Press}
            onPress={() =>
              this.state.intense == true ? this.setState({ intense:false, pressStatus:false,method:true  }): this.setState({ intense:true, })
            }
              activeOpacity={0.5}>
              <Text style={this.state.intense?  styles.TextStyle1: styles.TextStyle}> Intense </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.fotter}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('QuickStartSecond');
            }}>
            <Text style={styles.btntext}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );}
}
