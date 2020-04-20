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
  ScrollView,SafeAreaView
} from 'react-native';
import styles from './Styles';
export class Program extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:"#E3EEF7",}}>
<ScrollView>
      <View style={styles.screenlayout}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headertxt}>Program</Text>
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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Programs')}>
            <Image
              style={styles.container}
              resizeMode="stretch"
              source={require('../../assets/abs4.jpeg')}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginBottom:10}}>
          <View>
            <TouchableOpacity
              style={styles.SubmitButtonStyle1}
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate('Programs')}>
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
              <Text style={{paddingLeft: 20}}> Purchased </Text>
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
              source={require('../../assets/cardio.jpeg')}
            />
            <Text style={styles.templatetxt}>Arms</Text>
          </View>
          <View style={styles.template}>
            <Image
              style={styles.templateimg}
              source={require('../../assets/cardio1.jpeg')}
            />
            <Text style={styles.templatetxt}>Legs</Text>
          </View>
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

// export default

export default Program;
