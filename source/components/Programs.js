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
} from 'react-native';

export default class Programs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.screenlayout}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Program')}
                style={{paddingBottom: 15}}>
                <Icon
                  name="arrow-left"
                  size={20}
                  color="#000"
                  style={{paddingHorizontal: 5}}
                />
              </TouchableOpacity>
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.headertxt}>Programs</Text>
            </View>
          </View>
          <View>
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
        <View style={{flexDirection: 'row'}}>
          <View style={styles.template}>
            <Image
              style={styles.templateimg}
              source={require('../assets/arms1.jpeg')}
            />
          </View>

          <View style={styles.findprogram}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Abs</Text>
            <View style={{}}>
              <View>
                <Text>4 Weeks</Text>
              </View>
              <View>
                <Text>18 sessions</Text>
              </View>
              <View>
                <Text>45 mins each sessions</Text>
              </View>
              <View>
                <Text>Diet:3</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.template}>
            <Image
              style={styles.templateimg}
              source={require('../assets/arms2.jpeg')}
            />
          </View>

          <View style={styles.findprogram}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Arms</Text>
            <View style={{}}>
              <View>
                <Text>4 Weeks</Text>
              </View>
              <View>
                <Text>18 sessions</Text>
              </View>
              <View>
                <Text>45 mins each sessions</Text>
              </View>
              <View>
                <Text>Diet:3</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.template}>
            <Image
              style={styles.templateimg}
              source={require('../assets/arms3.jpeg')}
            />
          </View>

          <View style={styles.findprogram}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Legs</Text>
            <View style={{}}>
              <View>
                <Text>4 Weeks</Text>
              </View>
              <View>
                <Text>18 sessions</Text>
              </View>
              <View>
                <Text>45 mins each sessions</Text>
              </View>
              <View>
                <Text>Diet:3</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.template}>
            <Image
              style={styles.templateimg}
              source={require('../assets/arms4.jpeg')}
            />
          </View>

          <View style={styles.findprogram}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Chest</Text>
            <View style={{}}>
              <View>
                <Text>4 Weeks</Text>
              </View>
              <View>
                <Text>18 sessions</Text>
              </View>
              <View>
                <Text>45 mins each sessions</Text>
              </View>
              <View>
                <Text>Diet:3</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.template}>
            <Image
              style={styles.templateimg}
              source={require('../assets/arms5.jpeg')}
            />
          </View>

          <View style={styles.findprogram}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Legs</Text>
            <View style={{}}>
              <View>
                <Text>4 Weeks</Text>
              </View>
              <View>
                <Text>18 sessions</Text>
              </View>
              <View>
                <Text>45 mins each sessions</Text>
              </View>
              <View>
                <Text>Diet:3</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  screenlayout: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40,
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
  secondheadertxt: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 30,
  },
  headericon: {},

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
  findprogram: {
    marginTop: 10,
  },
  template: {
    width: 120,
    justifyContent: 'center',
    marginRight: 8,
  },
  templateimg: {
    marginTop: 10,
    height: 100,
    width: 110,
    borderRadius: 5,
  },
  templatetxt: {
    textAlign: 'center',
  },
});
