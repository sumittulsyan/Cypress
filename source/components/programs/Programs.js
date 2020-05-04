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
export default class Programs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#E3EEF7'}}>
        <ScrollView>
          <View style={styles.screenlayout}>
            <View style={styles.header}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Program')}
                    style={{paddingBottom: 15}}>
                    <Icon
                      name="arrow-left"
                      size={20}
                      color="#000"
                      style={{paddingRight: 5}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{paddingBottom: 10}}>
                  <Text style={styles.headertxt}>Programs</Text>
                </View>
              </View>
              <View>
                <Image
                  style={{height: 17, width: 17}}
                  source={require('../../assets/Icons/filter.png')}
                />
              </View>
            </View>
            <View style={styles.phoneno}>
              <Icon style={styles.searchIcon} name="search" size={16} />
              <TextInput style={styles.textinput} placeholder="Search" />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.template}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/abssmall/abs.png')}
                />
              </View>

              <View style={styles.findprogram}>
                <Text style={{fontSize: 20, fontWeight: 'bold',color:"#22304A"}}>Abs</Text>
                <View style={{}}>
                  <View>
                    <Text style={styles.findprogramtxt}>4 Weeks</Text>
                  </View>
                  <View>
                    <Text  style={styles.findprogramtxt}>18 sessions</Text>
                  </View>
                  <View>
                    <Text  style={styles.findprogramtxt}>45 mins each sessions</Text>
                  </View>
                  <View>
                    <Text  style={styles.findprogramtxt}>Diet:Required</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.template}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/triceps/triceps.png')}
                />
              </View>

              <View style={styles.findprogram}>
                <Text style={{fontSize: 20, fontWeight: 'bold',color:"#22304A"}}>Arms</Text>
                <View style={{}}>
                  <View>
                    <Text style={styles.findprogramtxt}>4 Weeks</Text>
                  </View>
                  <View>
                    <Text  style={styles.findprogramtxt}>18 sessions</Text>
                  </View>
                  <View>
                    <Text  style={styles.findprogramtxt}>45 mins each sessions</Text>
                  </View>
                  <View>
                    <Text  style={styles.findprogramtxt}>Diet:Required</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.template}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/legs/legs.png')}
                />
              </View>

              <View style={styles.findprogram}>
                <Text style={{fontSize: 20, fontWeight: 'bold',color:"#22304A"}}>Legs</Text>
                <View style={{}}>
                  <View>
                    <Text style={styles.findprogramtxt}>4 Weeks</Text>
                  </View>
                  <View>
                    <Text  style={styles.findprogramtxt}>18 sessions</Text>
                  </View>
                  <View>
                    <Text  style={styles.findprogramtxt}>45 mins each sessions</Text>
                  </View>
                  <View>
                    <Text  style={styles.findprogramtxt}>Diet:Required</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.template}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/chest/chest.png')}
                />
              </View>

              <View style={styles.findprogram}>
                <Text style={{fontSize: 20, fontWeight: 'bold',color:"#22304A"}}>Chest</Text>
                <View style={{}}>
                  <View>
                    <Text style={styles.findprogramtxt}>4 Weeks</Text>
                  </View>
                  <View>
                    <Text  style={styles.findprogramtxt}>18 sessions</Text>
                  </View>
                  <View>
                    <Text  style={styles.findprogramtxt}>45 mins each sessions</Text>
                  </View>
                  <View>
                    <Text  style={styles.findprogramtxt}>Diet:Required</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.template}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/legs/legs.png')}
                />
              </View>

              <View style={styles.findprogram}>
                <Text style={{fontSize: 20, fontWeight: 'bold',color:"#22304A"}}>Legs</Text>
                <View style={{}}>
                  <View>
                    <Text style={styles.findprogramtxt}>4 Weeks</Text>
                  </View>
                  <View>
                    <Text  style={styles.findprogramtxt}>18 sessions</Text>
                  </View>
                  <View>
                    <Text  style={styles.findprogramtxt}>45 mins each sessions</Text>
                  </View>
                  <View>
                    <Text  style={styles.findprogramtxt}>Diet:Required</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
