import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../components/quickstart';
const togglevar = true;
export default class Regform extends Component {

    constructor(props) {
        super(props)
        this.state={
            method:true
        }
    }
    render() {
        return (

            <View style={styles.reform}>

                <Text style={styles.header}>EVER FIT</Text>
                <Text style={styles.subheader}>Your Peronal trainer</Text>
                <Text style={styles.subheader1}>is now at the ease of your fingertip</Text>
                <View style={styles.toggle}>
                    <TouchableOpacity style={styles.toggletxt} onPress={() => this.setState({method:false})}><Text>SIGN UP</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.toggletxt}onPress={() => this.setState({method:true})}><Text>SIGN IN</Text></TouchableOpacity>
                </View>
                <View style={styles.phoneno}>
                    <Icon style={styles.searchIcon} name="phone" size={20} color="#000" />
                    <TextInput style={styles.textinput} placeholder="+91-8486629876"></TextInput>
                </View>
                {
                    this.state.method==true ? 
                    <View style={styles.password}>
                    <Icon style={styles.searchIcon} name="lock" size={20} color="#000" />
                    <TextInput style={styles.textinput} placeholder="Password"></TextInput>
                </View> : <View>
                <View style={styles.otpset}>
                    <View style={styles.otp}>
                        <Icon style={styles.searchIcon} name="keyboard" size={20} color="#000" />
                        <TextInput style={styles.otptextinput} placeholder="OTP"></TextInput>
                    </View>
                    <TouchableOpacity style={styles.otpverify}>
                        <Text style={styles.btntext}>Verify</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.setpassword}>
                        <Icon style={styles.searchIcon} name="lock" size={20} color="#000" />
                        <TextInput style={styles.textinput} placeholder="Set Password"></TextInput>
                    </View>
                </View>
                <View style={styles.margintothebottom}>
                    <View style={styles.setpassword}>
                        <Icon style={styles.searchIcon} name="lock" size={20} color="#000" />
                        <TextInput style={styles.textinput} placeholder="Repeat Password"></TextInput>
                    </View>
                </View>
                </View> 

                }
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("HomeScreen")}>{
                    this.state.method==true ?
                    <Text style={styles.btntext}>Sign In</Text> :
                    <Text style={styles.btntext}>Sign UP</Text>}
                </TouchableOpacity>
                <Text style={styles.footer}>Or Sign in With</Text>
                <View style={styles.footericon}>
                    <Icon name="snapchat" size={20} color="#000000" style={styles.icon} />
                    <Icon name="twitter" size={20} color="#000000" style={styles.icon} />
                    <Icon name="facebook-f" size={20} color="#000000" style={styles.icon} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    reform: {
        alignSelf: 'stretch',

    },
    toggle: {
        flexDirection: "row",
        justifyContent: "center"
    },
    toggletxt: {
        marginHorizontal: 10, borderBottomColor: "#000000",
        borderBottomWidth: 1,
    },

    header: {
        alignSelf: "center",

        fontSize: 24,
        color: "#000000",
        paddingBottom: 10,
        borderBottomColor: 1,
    },
    subheader: {

        alignSelf: "center",
    },
    subheader1: {
        alignSelf: "center",
        paddingBottom: 40
    },
    searchIcon: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    phoneno: {
        borderColor: "#000000",
        borderWidth: 1, height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 20,
        marginVertical: 10,
        marginLeft:60,
        marginRight:60
    },
    password: {
        borderColor: "#000000",
        borderWidth: 1,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 180,
        marginLeft:60,
        marginRight:60
    },
    setpassword: {
        borderColor: "#000000",
        borderWidth: 1,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10,
        marginLeft:60,
        marginRight:60
    },
    otpset: {
        flexDirection: "row",
        alignSelf: "stretch",
        marginLeft:60,
        marginRight:60

    },
    otp: {

        flex: 1,
        borderColor: "#000000",
        borderWidth: 1,
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#fff', 
        // marginLeft:60,
        // marginRight:60

    },
    otptextinput: {

    },
    textinput: {
        flex: 1,
        alignSelf: 'stretch',
        paddingBottom: 10,
        color: "#00FFFF",

    },
    otpverify: {
        marginLeft: 10,
        // flex:1,
        alignSelf: "stretch",
        padding: 10, alignItems: "center",
        backgroundColor: "#999900",
        
    },
    margintothebottom: {
        marginBottom: 80
    },
    button: {
        alignSelf: "stretch",
        alignItems: "center",
        padding: 10,

        backgroundColor: "#999900"
        , marginLeft:60,
        marginRight:60
    },
    btntext: {
        color: "#fff",
        fontWeight: "bold",

    },
    footer: {
        marginTop: 20,
        textAlign: "center"
    },
    footericon: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 10
    },
    icon: {
        padding: 5
    }
})
