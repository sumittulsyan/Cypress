import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text, View,StyleSheet,TouchableOpacity,TextInput,Image } from 'react-native'

export class Directory extends Component {
    render() {
        return (
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
                    source={require('../assets/back.jpeg')}
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
                    source={require('../assets/back.jpeg')}
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
                    source={require('../assets/back.jpeg')}
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
                    source={require('../assets/back.jpeg')}
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
                    source={require('../assets/back.jpeg')}
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
                    source={require('../assets/back.jpeg')}
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
        )
    }
}
const styles =StyleSheet.create({
    screenlayout: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 40,
      },
      header: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
      },
      headertxt: {
        fontWeight: 'bold',
        fontSize: 22,
        paddingLeft: 5,
        // paddingBottom:5
        marginBottom: 5,
      },
      phoneno: {
        //  flex:1,
        borderColor: '#000000',
        borderWidth: 1,
        height: 40,
         flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 40,
        marginVertical: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
      },
      searchIcon: {
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop:10
      },
      textinput: {
        // flex: 1,
        alignSelf: 'stretch',
        paddingBottom: 10,
        color: '#000000',
      },
      userrow: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      imagecontainer: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: 'white',
      },
      usertext: {
        marginTop: 10,
        marginLeft: 5,
      },
      SubmitButtonStyle: {
        flexDirection: 'row',
        // marginTop:10,
        paddingTop: 5,
        paddingBottom: 10,
        marginTop: 10,
        marginLeft: 40,
        // marginRight: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFF',
        elevation: 8,
      },
      TextStyle: {
        textAlign: 'center',
        color: '#000',
        paddingHorizontal: 10,
        fontWeight: 'bold',
      },
})

export default Directory
