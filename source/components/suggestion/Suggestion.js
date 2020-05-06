import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text, View, TouchableOpacity, StyleSheet, Image,ScrollView,SafeAreaView} from 'react-native';
import styles from './Styles';
export class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: false,
      pressStatus:true
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:"#E3EEF7"}}>
      <ScrollView>
      <View style={styles.screenlayout}>
        <View style={{flexDirection: 'row', justifyContent:"flex-start"}}>
          <TouchableOpacity style={{justifyContent:"center"}} onPress={() => this.props.navigation.navigate('Trainer')}>
            <Icon
              name="arrow-left"
              size={20}
              color="#000"
              style={{paddingRight:10}}
            />
          </TouchableOpacity>
          <Text style={styles.trainerhearder}>Trainer</Text>
        </View>
        <View style={styles.followsuggestionheader}>
        <TouchableOpacity
              style={this.state.pressStatus ? styles.toggletxtinactive: styles.toggletxtactive}
              onPress={() =>
                this.setState({method: true, pressStatus: false})
              }>
              <Text
                style={
                  this.state.pressStatus ? styles.textt : styles.textPress 
                }>
                FOLLOWING
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={ this.state.pressStatus ? styles.toggletxtinact:styles.toggletxtact}
              onPress={() => this.setState({method: false, pressStatus: true})}>
              <Text
                style={
                  this.state.pressStatus ? styles.textPress : styles.textt
                }>
                SUGGESTIONS
              </Text>

              {/* <TouchableHighlight>
            </TouchableHighlight> */}
            </TouchableOpacity>
          {/* <TouchableOpacity onPress={()=>this.setState({method:true})}>
            <Text style={styles.followsuggestiontxt}>FOLLOWING</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.setState({method:false})}>
            <Text style={styles.followsuggestiontxt}>SUGGESTION</Text>
          </TouchableOpacity> */}
        </View>
        {this.state.method == true ? (
          <View>
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
                  <Text style={styles.userheading}>Username</Text>
                  <Text style={styles.usersubheading}>Strength Trainer</Text>
                </View>
              </View>
              <View style={styles.followcontainer}>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> Unfollow </Text>
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
                  <Text style={styles.userheading}>Username</Text>
                  <Text style={styles.usersubheading}>Strength Trainer</Text>
                </View>
              </View>
              <View style={styles.followcontainer}>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> Unfollow </Text>
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
                  <Text style={styles.userheading}>Username</Text>
                  <Text style={styles.usersubheading}>Strength Trainer</Text>
                </View>
              </View>
              <View style={styles.followcontainer}>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> Unfollow </Text>
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
                  <Text style={styles.userheading}>Username</Text>
                  <Text style={styles.usersubheading}>Strength Trainer</Text>
                </View>
              </View>
              <View style={styles.followcontainer}>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> Unfollow </Text>
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
                  <Text style={styles.userheading}>Username</Text>
                  <Text style={styles.usersubheading}>Strength Trainer</Text>
                </View>
              </View>
              <View style={styles.followcontainer}>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> Unfollow </Text>
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
                  <Text style={styles.userheading}>Username</Text>
                  <Text style={styles.usersubheading}>Strength Trainer</Text>
                </View>
              </View>
              <View style={styles.followcontainer}>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}>
                  <Text style={styles.TextStyle}> Unfollow </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View>
            <View>
              <View style={styles.userrow}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.imagecontainer}>
                    <Image
                      style={{width:"100%"}}
                      resizeMode="stretch"
                      source={require('../../assets/profile1/profile2x.png')}
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
                    <Icon
                      name="plus"
                      size={10}
                      color="#000"
                      style={{padding: 5}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/suggestpic1/suggestpic1.png')}
                    />
                  </View>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/suggestpic2/suggestpic2.png')}
                    />
                  </View>
                  <View style={styles.templatelast}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/suggestpic3/suggestpic3.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View>
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
                    <Text style={styles.usersubheading}>Strength Trainer</Text>
                  </View>
                </View>
                <View style={styles.followcontainer}>
                  <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={0.5}>
                    <Text style={styles.TextStyle}> Follow </Text>
                    <Icon
                      name="plus"
                      size={10}
                      color="#000"
                      style={{padding: 5}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/suggestpic3/suggestpic3.png')}
                    />
                  </View>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/suggestpic1/suggestpic1.png')}
                    />
                  </View>
                  <View style={styles.templatelast}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/suggestpic2/suggestpic2.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View>
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
                    <Text style={styles.usersubheading}>Strength Trainer</Text>
                  </View>
                </View>
                <View style={styles.followcontainer}>
                  <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={0.5}>
                    <Text style={styles.TextStyle}> Follow </Text>
                    <Icon
                      name="plus"
                      size={10}
                      color="#000"
                      style={{padding: 5}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/suggestpic2/suggestpic2.png')}
                    />
                  </View>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/suggestpic3/suggestpic3.png')}
                    />
                  </View>
                  <View style={styles.templatelast}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/suggestpic1/suggestpic1.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}


export default Suggestion;
