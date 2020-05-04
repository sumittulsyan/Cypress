import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from '../directory/Styles';
export class Directory extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#E3EEF7'}}>
        <ScrollView>
          <View style={styles.screenlayout}>
            <View style={styles.header}>
              <View style={{flexDirection: 'row',alignItems:"center"}}>
                
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Trainer')}
                    style={{}}>
                    <Icon
                      name="arrow-left"
                      size={20}
                      color="#000"
                      style={{paddingRight: 5}}
                    />
                  </TouchableOpacity>
                
                
                  <Text style={styles.headertxt}>Directory</Text>
                
              </View>
            </View>
            <View style={styles.phoneno}>
              <Icon style={styles.searchIcon} name="search" size={16} />
              <TextInput style={styles.textinput} placeholder="Search" />
            </View>
            <View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Userdirectory')}>
              <View style={styles.userrow}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.imagecontainer}>
                    <Image
                      style={styles.container}
                      resizeMode="contain"
                      source={require('../../assets/profile3/profile2x.png')}
                    />
                  </View>
                  <View style={styles.usertext}>
                    <Text style={styles.userheading}>User Name</Text>
                    <Text style={styles.usersubheading}>Strength Trainer</Text>
                  </View>
                </View>
                <View style={styles.followcontainer}>
                  <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={0.5}>
                    <Text style={styles.TextStyle}> Follow </Text>
                  </TouchableOpacity>
                </View>
              </View>
              </TouchableOpacity>
              <View style={styles.userrow}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.imagecontainer}>
                    <Image
                      style={styles.container}
                      resizeMode="stretch"
                      source={require('../../assets/profile2/profile2x.png')}
                    />
                  </View>
                  <View style={styles.usertext}>
                    <Text style={styles.userheading}>User Name</Text>
                    <Text style={styles.usersubheading}>Endurance Trainer</Text>
                  </View>
                </View>
                <View style={styles.followcontainer}>
                  <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={0.5}>
                    <Text style={styles.TextStyle}> Follow </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.userrow}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.imagecontainer}>
                    <Image
                      style={styles.container}
                      resizeMode="stretch"
                      source={require('../../assets/profile1/profile2x.png')}
                    />
                  </View>
                  <View style={styles.usertext}>
                    <Text style={styles.userheading}>User Name</Text>
                    <Text style={styles.usersubheading}>General Trainer</Text>
                  </View>
                </View>
                <View style={styles.followcontainer}>
                  <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={0.5}>
                    <Text style={styles.TextStyle}> Follow </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.userrow}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.imagecontainer}>
                    <Image
                      style={styles.container}
                      resizeMode="stretch"
                      source={require('../../assets/profile2/profile2x.png')}
                    />
                  </View>
                  <View style={styles.usertext}>
                    <Text style={styles.userheading}>User Name</Text>
                    <Text style={styles.usersubheading}>Fitness Trainer</Text>
                  </View>
                </View>
                <View style={styles.followcontainer}>
                  <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={0.5}>
                    <Text style={styles.TextStyle}> Follow </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.userrow}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.imagecontainer}>
                    <Image
                      style={styles.container}
                      resizeMode="stretch"
                      source={require('../../assets/profile3/profile2x.png')}
                    />
                  </View>
                  <View style={styles.usertext}>
                    <Text style={styles.userheading}>User Name</Text>
                    <Text style={styles.usersubheading}>Crossfit Trainer</Text>
                  </View>
                </View>
                <View style={styles.followcontainer}>
                  <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={0.5}>
                    <Text style={styles.TextStyle}> Follow </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.userrow}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.imagecontainer}>
                    <Image
                      style={styles.container}
                      resizeMode="contain"
                      source={require('../../assets/profile1/profile2x.png')}
                    />
                  </View>
                  <View style={styles.usertext}>
                    <Text style={styles.userheading}>User Name</Text>
                    <Text style={styles.usersubheading}>General Trainer</Text>
                  </View>
                </View>
                <View style={styles.followcontainer}>
                  <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={0.5}>
                    <Text style={styles.TextStyle}> Follow </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Directory;
