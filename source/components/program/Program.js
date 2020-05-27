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
  SafeAreaView,
} from 'react-native';
import styles from './Styles';
export class Program extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#E3EEF7'}}>
        <ScrollView>
          <View style={styles.screenlayout}>
            <View style={styles.header}>
              <View>
                <Text style={styles.headertxt}>Program</Text>
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
              <Icon
                style={styles.searchIcon}
                name="search"
                size={14}
                color="#22304A"
              />
              <TextInput style={styles.textinput} placeholder="Search" />
            </View>
            <View style={{marginBottom: 20,marginRight:15,marginLeft:15}}>
              <Text style={{fontSize: 16, color: '#22304A', fontWeight: 'bold',color:"#22304A"}}>New Release</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Programs')}>
                <Image
                  style={styles.container}
                  resizeMode="stretch"
                  source={require('../../assets/programpic/program.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{width:"100%"}}>
              <View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle1}
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate('Programs')}>
                  <Text style={{paddingLeft: 12,fontSize:16,color:"#22304A",letterSpacing:.5,fontWeight:"300"}}> Featured </Text>
                  <Icon
                    name="chevron-right"
                    size={12}
                    color="#000"
                    style={{paddingHorizontal:13}}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle1}
                  activeOpacity={0.5}>
                  <Text style={{paddingLeft: 12,fontSize:16,color:"#22304A",letterSpacing:.5,fontWeight:"300"}}> Quick Start </Text>
                  <Icon
                    name="chevron-right"
                    size={12}
                    color="#000"
                    style={{paddingHorizontal:13}}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle1}
                  activeOpacity={0.5}>
                  <Text style={{paddingLeft: 12,fontSize:16,color:"#22304A",letterSpacing:.5,fontWeight:"300"}}> Purchased </Text>
                  <Icon
                    name="chevron-right"
                    size={12}
                    color="#000"
                    style={{paddingHorizontal:13}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginLeft:15,marginRight:15,marginTop:18}}>
              <Text style={{fontSize: 16, fontWeight: 'normal',color:"#22304A"}}>Categories</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.template}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/cardio.jpeg')}
                />
                <Text style={styles.templatetxt}>Arms</Text>
              </View>
              <View style={styles.templatelast}>
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
