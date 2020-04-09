import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import styles from './Styles';
export class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: true,
    };
  }
  render() {
    return (
      <View style={styles.screenlayout}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Icon
              name="arrow-left"
              size={20}
              color="#000"
              style={{padding: 10}}
            />
          </TouchableOpacity>
          <Text style={styles.trainerhearder}>Trainer</Text>
        </View>
        <View style={styles.followsuggestionheader}>
          <TouchableOpacity onPress={()=>this.setState({method:true})}>
            <Text style={styles.followsuggestiontxt}>FOLLOWING</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.setState({method:false})}>
            <Text style={styles.followsuggestiontxt}>SUGGESTION</Text>
          </TouchableOpacity>
        </View>
        {this.state.method == true ? (
          <View>
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
                  <Text style={styles.TextStyle}> Unfollow </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View>
            <View><Text>hell</Text></View>
            <View>
              <View style={styles.userrow}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.imagecontainer}>
                    <Image
                      style={{width:"100%"}}
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
                      source={require('../../assets/arms3.jpeg')}
                    />
                  </View>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/arms3.png')}
                    />
                  </View>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/chest1.jpeg')}
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
                      source={require('../../assets/arms3.jpeg')}
                    />
                  </View>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/arms3.png')}
                    />
                  </View>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/chest1.jpeg')}
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
                      source={require('../../assets/arms3.jpeg')}
                    />
                  </View>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/arms3.png')}
                    />
                  </View>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/chest1.jpeg')}
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
                      source={require('../../assets/arms3.jpeg')}
                    />
                  </View>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/arms3.png')}
                    />
                  </View>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/chest1.jpeg')}
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
                      source={require('../../assets/arms3.jpeg')}
                    />
                  </View>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/arms3.png')}
                    />
                  </View>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/chest1.jpeg')}
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
                      source={require('../../assets/arms3.jpeg')}
                    />
                  </View>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/arms3.png')}
                    />
                  </View>
                  <View style={styles.template}>
                    <Image
                      style={styles.templateimg}
                      source={require('../../assets/chest1.jpeg')}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}


export default Suggestion;
