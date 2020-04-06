import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image, Dimensions } from 'react-native'
export class Trainer extends Component {
    render() {
        return (
            <View style={styles.screenlayout}>
                <View style={styles.header}>
                    <View >
                        <Text style={styles.headertxt}>Trainer</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View><Icon name="bars" size={20} color="#000" style={{ paddingHorizontal: 5 }} /></View>
                    </View>
                </View>
                <View style={styles.phoneno}>
                    <Icon style={styles.searchIcon} name="search" size={16} />
                    <TextInput style={styles.textinput} placeholder="Search"></TextInput>
                </View>
                <View>
                    <Text >Featured</Text>
                    <View style={{ flexDirection: "row" }}>

                        <View style={styles.template}>
                            <Image style={styles.templateimg} source={require('../assets/arms3.jpeg')} />
                        </View>
                        <View style={styles.template}>
                            <Image style={styles.templateimg} source={require('../assets/arms3.png')} />
                        </View>
                        <View style={styles.template}>
                            <Image style={styles.templateimg} source={require('../assets/chest1.jpeg')} />
                        </View>

                    </View>
                </View>
                <View>
                    <View >

                        <TouchableOpacity
                            style={styles.SubmitButtonStyle1}
                            activeOpacity={.5} onPress={()=>this.props.navigation.navigate('Suggestion')}

                        >
                            <Text style={{ paddingLeft: 20 }}> Available </Text>
                            <Icon name="chevron-right" size={16} color="#000" style={{ paddingHorizontal: 5 }} />

                        </TouchableOpacity>

                    </View>
                    <View >

                        <TouchableOpacity
                            style={styles.SubmitButtonStyle1}
                            activeOpacity={.5}
                            onPress={()=>this.props.navigation.navigate('Directory')}

                        >
                            <Text style={{ paddingLeft: 20 }}> Directory </Text>
                            <Icon name="chevron-right" size={16} color="#000" style={{ paddingHorizontal: 5 }} />

                        </TouchableOpacity>

                    </View>
                    <View >

                        <TouchableOpacity
                            style={styles.SubmitButtonStyle1}
                            activeOpacity={.5}

                        >
                            <Text style={{ paddingLeft: 20 }}> Updates </Text>
                            <Icon name="chevron-right" size={16} color="#000" style={{ paddingHorizontal: 5 }} />

                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.findprogram}>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>Explore and stay motivated</Text>
                </View>
                <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
                    <View>
                        <TouchableOpacity style={styles.circularcontainer}>

                        </TouchableOpacity>

                    </View>
                    <View>
                        <View style={{ flexDirection: "column", paddingLeft: 10, paddingTop: 5 }}>
                            <Text >User Name</Text>
                            <Text style={{ fontSize: 12, paddingTop: 2, fontWeight: "100" }}>Fitness Trainer</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.SubmitButtonStyle}
                            activeOpacity={.5}>

                            <Text style={styles.TextStyle}> Follow </Text>
                            <Icon name="plus" size={12} color="#000" style={{ paddingTop:5,paddingRight:5 }} />

                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>

                    <View style={styles.template}>
                        <Image style={styles.templateimg} source={require('../assets/cardio3.jpeg')} />
                    </View>
                    <View style={styles.template}>
                        <Image style={styles.templateimg} source={require('../assets/cardio4.jpeg')} />
                    </View>
                    <View style={styles.template}>
                        <Image style={styles.templateimg} source={require('../assets/cardio2.jpeg')} />
                    </View>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    screenlayout: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 40

    },
    header: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between"


    },
    circularcontainer: {
        height: 50,
        width: 50,
        backgroundColor: "#FFFFFF",
        borderWidth: .5,
        borderColor: "#FFFFFF",
        borderRadius: 25
    },
    headertxt: {
        fontWeight: "bold",
        fontSize: 22,

    },
    secondheadertxt: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 30

    },
    headericon:
    {

    },
    SubmitButtonStyle: {
        justifyContent:"space-evenly",
flexDirection:"row",
        // marginTop:10,
        paddingTop: 5,
        paddingBottom: 10,
        marginTop: 10,
        marginLeft: 40,
        // marginRight: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000'
    },
    phoneno: {
        //flex:1,
        borderColor: "#000000",
        borderWidth: 1, height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 50,
        marginVertical: 10,
        borderRadius: 10
    },
    searchIcon: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
    },
    textinput: {
        flex: 1,
        alignSelf: 'stretch',
        paddingBottom: 10,
        color: "#00FFFF",

    },
    container: {
        marginRight: 20,
        marginTop: 10,
        justifyContent: "center",
        // width:320,
        borderRadius: 2,
        width: 320,
        height: 140
        // marginHorizontal:100
    },

    template: {
        width: 120,
        justifyContent: "center",
        marginRight: 8
    },
    templateimg: {
        marginTop: 10,
        height: 80,
        width: 110,
        borderRadius: 5
    },
    templatetxt: {
        textAlign: "center"
    }, SubmitButtonStyle1: {
        flexDirection: "row",
        justifyContent: "space-between",
        //  marginTop:10,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    TextStyle: {
        textAlign: "center",
        color: '#000',
        paddingHorizontal: 10
    },


})


export default Trainer
