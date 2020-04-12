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
} from 'react-native';
import styles from './Styles';
export default class Programs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
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
            <TextInput
              style={styles.textinput}
              placeholder="Search"></TextInput>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.template}>
              <Image
                style={styles.templateimg}
                source={require('../../assets/arms1.jpeg')}
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
                source={require('../../assets/arms2.jpeg')}
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
                source={require('../../assets/arms3.jpeg')}
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
                source={require('../../assets/arms4.jpeg')}
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
                source={require('../../assets/arms5.jpeg')}
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
      </ScrollView>
    );
  }
}
