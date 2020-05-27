import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import styles from './Styles';
export class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#E3EEF7'}}>
        <ScrollView>
          <View style={styles.screenlayout}>
            <View style={styles.header}>
              <View>
                <Text style={styles.headertxt}>Home</Text>
              </View>
           <TouchableOpacity onPress={() => {
                {
                  // console.warn("pressed");
                this.props.navigation.openDrawer();
                }
              }}>
           <Image
              
                style={{height: 16, width: 16}}
                source={require('../../assets/Icons/Alert.png')}
              />
           </TouchableOpacity>
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
            <View style={{}}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#22304A',
                  fontWeight: 'bold',
                  color: '#22304A',
                }}>
                Recommended Program
              </Text>
              <ImageBackground
                style={styles.container}
                resizeMode="stretch"
                source={require('../../assets/Home/homeposter.png')}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
                  Program
                </Text>
                <Text
                  style={{
                    fontWeight: 'normal',
                    fontSize: 16,
                    color: '#9DA2AB',
                  }}>
                  4 weeks
                </Text>
                <View style={{flexDirection:"row",position:"absolute",bottom:20}}>
                <View style={styles.circleempty}></View>
                <View style={styles.circlefilled}></View>
                <View style={styles.circleempty}></View>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.findprogram}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#22304A'}}>
                Find a Program
              </Text>
              <Text
                style={{fontSize: 14, fontWeight: 'bold', color: '#22304A'}}>
                MORE
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 30}}>
              <View style={styles.template}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Abs')}>
                  <Image
                    style={styles.templateimg}
                    source={require('../../assets/Home/abs.png')}
                  />
                  <Text style={styles.templatetxt}>Abs</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.template}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/Home/arms.png')}
                />
                <Text style={styles.templatetxt}>Arms</Text>
              </View>
              <View style={styles.template}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/Home/legs.png')}
                />
                <Text style={styles.templatetxt}>Legs</Text>
              </View>
              <View style={styles.templatelast}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/Home/chest.png')}
                />
                <Text style={styles.templatetxt}>Chest</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold',color:"#22304A"}}>
                Program based on your fitness goal
              </Text>
              <Text style={{fontSize: 14, fontWeight: 'bold',color:"#22304A"}}>MORE</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.template}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/arms3.jpeg')}
                />
                <Text style={styles.templatetxt}>Abs</Text>
              </View>
              <View style={styles.template}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/cardio.jpeg')}
                />
                <Text style={styles.templatetxt}>Arms</Text>
              </View>
              <View style={styles.template}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/cardio1.jpeg')}
                />
                <Text style={styles.templatetxt}>Legs</Text>
              </View>
              <View style={styles.templatelast}>
                <Image
                  style={styles.templateimg}
                  source={require('../../assets/cardio2.jpeg')}
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

export default Home;
