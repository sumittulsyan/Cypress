import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text, View, TouchableOpacity, StyleSheet, TextInput,Image,Dimensions } from 'react-native'
import styles from './Styles';
export class Home extends Component {
    render() {
        return (
            <View style={styles.screenlayout}>
                <View style={styles.header}>
                    <View >
                        <Text style={styles.headertxt}>Home</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View><Icon name="bell" size={20} color="#000" style={{ paddingHorizontal: 5 }} /></View>
                        <View><Icon name="bars" size={20} color="#000" style={{ paddingHorizontal: 5 }} /></View>
                    </View>
                </View>
                <View style={styles.phoneno}>
                    <Icon style={styles.searchIcon} name="search" size={16} />
                    <TextInput style={styles.textinput} placeholder="Search"></TextInput>
                </View>
                <View>
                    <Text >Recommended Program</Text>
                    <Image style={styles.container} resizeMode="stretch" source={require('../../assets/back.jpeg')}/>
                </View>
                <View style={styles.findprogram}>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>Find a Program</Text>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>More</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                <View style={styles.template}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Abs")} >
                    <Image style={styles.templateimg} source={require('../../assets/arms0.jpeg') }/>
                    <Text style={styles.templatetxt}>Abs</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.template}>
                    <Image style={styles.templateimg} source={require('../../assets/arms1.jpeg') }/>
                    <Text style={styles.templatetxt}>Arms</Text>
                </View>
                <View style={styles.template}>
                    <Image style={styles.templateimg} source={require('../../assets/leg.jpeg') }/>
                    <Text style={styles.templatetxt}>Legs</Text>
                </View>
                <View style={styles.template}>
                    <Image style={styles.templateimg} source={require('../../assets/images.jpeg') }/>
                    <Text style={styles.templatetxt}>Legs</Text>
                </View>
                </View>
                <View style={styles.findprogram}>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>Program based on your fitness goal</Text>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>More</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                <View style={styles.template}>
                    <Image style={styles.templateimg} source={require('../../assets/arms3.jpeg') }/>
                    <Text style={styles.templatetxt}>Abs</Text>
                </View>
                <View style={styles.template}>
                    <Image style={styles.templateimg} source={require('../../assets/cardio.jpeg') }/>
                    <Text style={styles.templatetxt}>Arms</Text>
                </View>
                <View style={styles.template}>
                    <Image style={styles.templateimg} source={require('../../assets/cardio1.jpeg') }/>
                    <Text style={styles.templatetxt}>Legs</Text>
                </View>
                <View style={styles.template}>
                    <Image style={styles.templateimg} source={require('../../assets/cardio2.jpeg') }/>
                    <Text style={styles.templatetxt}>Legs</Text>
                </View>
                </View>
            </View>
        )
    }
}
 

export default Home
