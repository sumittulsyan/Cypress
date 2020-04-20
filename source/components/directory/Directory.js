import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text, View,StyleSheet,TouchableOpacity,TextInput,Image,ScrollView,SafeAreaView } from 'react-native'
import styles from '../directory/Styles';
export class Directory extends Component {
    render() {
        return (
          <SafeAreaView style={{flex:1,backgroundColor:"#E3EEF7"}}>
          <ScrollView>
            <View style={styles.screenlayout}>
                <View style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.pop()}
                style={{paddingBottom: 15}}>
                <Icon
                  name="arrow-left"
                  size={20}
                  color="#000"
                  style={{paddingHorizontal: 5}}
                />
              </TouchableOpacity>
            </View>
            <View style={{paddingBottom: 0}}>
              <Text style={styles.headertxt}>Directory</Text>
            </View>
          </View>
        </View>
        <View style={styles.phoneno}>
          <Icon style={styles.searchIcon} name="search" size={16} />
          <TextInput style={styles.textinput} placeholder="Search"></TextInput>
        </View>
        <View>
            <View style={styles.userrow}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Userdirectory')}>
                <View style={{flexDirection: 'row'}}>
                <View style={styles.imagecontainer}>
                  <Image
                    style={styles.container}
                    resizeMode="stretch"
                    source={require('../../assets/back.jpeg')}
                  />
                </View>
                <View style={styles.usertext}>
                  <Text>User Name</Text>
                  <Text>Strength Trainer</Text>
                </View>
              </View>
                </TouchableOpacity>
              
              <View style={styles.followcontainer}>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> follow </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.userrow}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.imagecontainer}>
                  <Image
                    style={styles.container}
                    resizeMode="stretch"
                    source={require('../../assets/back.jpeg')}
                  />
                </View>
                <View style={styles.usertext}>
                  <Text>User Name</Text>
                  <Text>Strength Trainer</Text>
                </View>
              </View>
              <View style={styles.followcontainer}>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> follow </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.userrow}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.imagecontainer}>
                  <Image
                    style={styles.container}
                    resizeMode="stretch"
                    source={require('../../assets/back.jpeg')}
                  />
                </View>
                <View style={styles.usertext}>
                  <Text>User Name</Text>
                  <Text>Strength Trainer</Text>
                </View>
              </View>
              <View style={styles.followcontainer}>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> follow </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.userrow}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.imagecontainer}>
                  <Image
                    style={styles.container}
                    resizeMode="stretch"
                    source={require('../../assets/back.jpeg')}
                  />
                </View>
                <View style={styles.usertext}>
                  <Text>User Name</Text>
                  <Text>Strength Trainer</Text>
                </View>
              </View>
              <View style={styles.followcontainer}>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> follow </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.userrow}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.imagecontainer}>
                  <Image
                    style={styles.container}
                    resizeMode="stretch"
                    source={require('../../assets/back.jpeg')}
                  />
                </View>
                <View style={styles.usertext}>
                  <Text>User Name</Text>
                  <Text>Strength Trainer</Text>
                </View>
              </View>
              <View style={styles.followcontainer}>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> follow </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.userrow}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.imagecontainer}>
                  <Image
                    style={styles.container}
                    resizeMode="stretch"
                    source={require('../../assets/back.jpeg')}
                  />
                </View>
                <View style={styles.usertext}>
                  <Text>User Name</Text>
                  <Text>Strength Trainer</Text>
                </View>
              </View>
              <View style={styles.followcontainer}>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> follow </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
            </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}


export default Directory
