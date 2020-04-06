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

export default class Abs extends Component {
    constructor(props) {
        super(props)
    }
  render() { 
    return (
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
            source={require('../assets/back.jpeg')}
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
              source={require('../assets/arms1.jpeg')}
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
              source={require('../assets/arms1.jpeg')}
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
              source={require('../assets/arms1.jpeg')}
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
              source={require('../assets/arms3.jpeg')}
            />
            <Text style={styles.templatetxt}>Abs</Text>
          </View>
          <View style={styles.template}>
            <Image
              style={styles.templateimg}
              source={require('../assets/cardio.jpeg')}
            />
            <Text style={styles.templatetxt}>Arms</Text>
          </View>
          <View style={styles.template}>
            <Image
              style={styles.templateimg}
              source={require('../assets/cardio1.jpeg')}
            />
            <Text style={styles.templatetxt}>Legs</Text>
          </View>
          <View style={styles.template}>
            <Image
              style={styles.templateimg}
              source={require('../assets/cardio2.jpeg')}
            />
            <Text style={styles.templatetxt}>Legs</Text>
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
  phoneno: {
    //flex:1,
    borderColor: '#000000',
    borderWidth: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 50,
    marginVertical: 10,
    borderRadius: 10,
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textinput: {
    flex: 1,
    alignSelf: 'stretch',
    paddingBottom: 10,
    color: '#00FFFF',
  },
  container: {
    marginRight: 20,
    marginTop: 40,
    justifyContent: 'center',
    // width:320,
    borderRadius: 2,
    width: 370,
    height: 180,
    // marginHorizontal:100
  },
  findprogram: {
    marginTop: 10,
  },
  template: {
    width: 90,
    justifyContent: 'center',
    marginRight: 8,
  },
  templateimg: {
    marginTop: 10,
    height: 100,
    width: 70,
    borderRadius: 5,
  },
  templatetxt: {
    textAlign: 'center',
  },
});

