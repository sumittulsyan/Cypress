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
  SafeAreaView
} from 'react-native';
import styles from '../abs/Styles';

export default class Abs extends Component {
    constructor(props) {
        super(props)
    }
  render() { 
    return (
      <SafeAreaView style={{flex:1,backgroundColor:"#E3EEF7"}}>
      <View style={styles.screenlayout}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            
              <TouchableOpacity onPress={()=>this.props.navigation.pop()} style={{paddingBottom:15,}}>
                <Icon
                  name="arrow-left"
                  size={20}
                  color="#000"
                  style={{paddingHorizontal: 5}}
                />
              </TouchableOpacity>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.headertxt}>Abs</Text>
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

        <View>
          <Image
            style={styles.container}
            resizeMode="stretch"
            source={require('../../assets/back.jpeg')}
          />
        </View>
        <View style={styles.findprogram}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Abs Workout</Text>
          <View style={{}}>
            <View>
              <Text>4 weeks</Text>
            </View>
            <View>
              <Text>Numbers of sessions:20</Text>
            </View>
            <View>
              <Text>Time of each sessions:40 mins</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.template}>
            <Image
              style={styles.templateimg}
              source={require('../../assets/arms0.jpeg')}
            />
          </View>

          <View style={styles.findprogram}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Week 1-Day 1</Text>
            <View style={{}}>
              <View>
                <Text>Introduction</Text>
              </View>
              <View>
                <Text>Duration:40 mins</Text>
              </View>
              <View>
                <Text>Numbers of workouts:6</Text>
              </View>
              <View>
                <Text>Numbers of sets per workouts:3</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.template}>
            <Image
              style={styles.templateimg}
              source={require('../../assets/back.jpeg')}
            />
          </View>

          <View style={styles.findprogram}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Week 1-Day 2</Text>
            <View style={{}}>
              <View>
                <Text>Core</Text>
              </View>
              <View>
                <Text>Numbers of sessions:20</Text>
              </View>
              <View>
                <Text>Time of each sessions:40 mins</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.template}>
            <Image
              style={styles.templateimg}
              source={require('../../assets/back.jpeg')}
            />
          </View>

          <View style={styles.findprogram}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Week 1-Day 3</Text>
            <View style={{}}>
              <View>
                <Text>Endurance</Text>
              </View>
              <View>
                <Text>Numbers of sessions:20</Text>
              </View>
              <View>
                <Text>Time of each sessions:40 mins</Text>
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
      </SafeAreaView>
    );
  }
}


