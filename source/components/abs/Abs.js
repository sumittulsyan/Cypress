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
  SafeAreaView,
  ScrollView
} from 'react-native';
import styles from '../abs/Styles';

export default class Abs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#E3EEF7'}}>
        <ScrollView>
        <View style={styles.screenlayout}>
          <View style={styles.header}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.pop()}
                style={{}}>
                <Icon
                  name="arrow-left"
                  size={20}
                  color="#000"
                  style={{paddingRight: 5}}
                />
              </TouchableOpacity>
              <View style={{}}>
                <Text style={styles.headertxt}>Abs</Text>
              </View>
            </View>
            <View>
              <View>
                <Image style={{height:17,width:17}} source={require('../../assets/Icons/filter.png')} />
              </View>
            </View>
          </View>

          <View>
            <Image
              style={styles.container}
              resizeMode="stretch"
              source={require('../../assets/abs/abs2x.png')}
            />
          </View>
          <View style={styles.findprogram}>
            <Text style={{fontSize: 31, fontWeight: 'bold',color:"#22304A"}}>Abs Workout</Text>
            <View style={{marginTop:5}}>
              <View>
                <Text style={styles.findprogramtxt}>4 weeks</Text>
              </View>
              <View>
                <Text style={styles.findprogramtxt}>Numbers of sessions:20</Text>
              </View>
              <View>
                <Text style={styles.findprogramtxt}>Time of each sessions:40 mins</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row',marginHorizontal:12}}>
            <View style={styles.template}>
              <Image
                style={styles.templateimg}
                source={require('../../assets/abspic1/abspic1.png')}
              />
            </View>

            <View style={styles.findprogram}>
              <Text style={{fontSize: 16, fontWeight: 'bold',color:"#22304A"}}>
                Week 1-Day 1
              </Text>
              <View style={{}}>
                <View>
                  <Text style={styles.findprogramsubtxt}>Introduction</Text>
                </View>
                <View>
                  <Text style={styles.findprogramsubtxt}>Duration:40 mins</Text>
                </View>
                <View>
                  <Text style={styles.findprogramsubtxt}>Numbers of workouts:6</Text>
                </View>
                <View>
                  <Text style={styles.findprogramsubtxt}>Numbers of sets per workouts:3</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row',marginHorizontal:12}}>
            <View style={styles.template}>
              <Image
                style={styles.templateimg}
                source={require('../../assets/abspic2/abspic2.png')}
              />
            </View>

            <View style={styles.findprogram}>
              <Text style={{fontSize: 16, fontWeight: 'bold',color:"#22304A"}}>
                Week 1-Day 2
              </Text>
              <View style={{}}>
                <View>
                  <Text style={styles.findprogramsubtxt}>Introduction</Text>
                </View>
                <View>
                  <Text style={styles.findprogramsubtxt}>Duration:40 mins</Text>
                </View>
                <View>
                  <Text style={styles.findprogramsubtxt}>Numbers of workouts:6</Text>
                </View>
                <View>
                  <Text style={styles.findprogramsubtxt}>Numbers of sets per workouts:3</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row',marginHorizontal:12}}>
            <View style={styles.template}>
              <Image
                style={styles.templateimg}
                source={require('../../assets/abspic3/abspic3.png')}
              />
            </View>

            <View style={styles.findprogram}>
              <Text style={{fontSize: 16, fontWeight: 'bold',color:"#22304A"}}>
                Week 1-Day 3
              </Text>
              <View style={{}}>
                <View>
                  <Text style={styles.findprogramsubtxt}>Introduction</Text>
                </View>
                <View>
                  <Text style={styles.findprogramsubtxt}>Duration:40 mins</Text>
                </View>
                <View>
                  <Text style={styles.findprogramsubtxt}>Numbers of workouts:6</Text>
                </View>
                <View>
                  <Text style={styles.findprogramsubtxt}>Numbers of sets per workouts:3</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.findprogram}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              Program based on your fitness goal
            </Text>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>More</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.template}>
              <Image
                style={styles.templateimg}
                source={require('../../assets/back.jpeg')}
              />
              <Text style={styles.templatetxt}>Abs</Text>
            </View>
            <View style={styles.template}>
              <Image
                style={styles.templateimg}
                source={require('../../assets/back.jpeg')}
              />
              <Text style={styles.templatetxt}>Arms</Text>
            </View>
            <View style={styles.template}>
              <Image
                style={styles.templateimg}
                source={require('../../assets/back.jpeg')}
              />
              <Text style={styles.templatetxt}>Legs</Text>
            </View>
            <View style={styles.template}>
              <Image
                style={styles.templateimg}
                source={require('../../assets/back.jpeg')}
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
