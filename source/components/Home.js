import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text, View, TouchableOpacity, StyleSheet, TextInput,Image,Dimensions } from 'react-native'

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
                    <Image style={styles.container} resizeMode="stretch" source={require('../assets/back.jpeg')}/>
                </View>
                <View style={styles.findprogram}>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>Find a Program</Text>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>More</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                <View style={styles.template}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Abs")} >
                    <Image style={styles.templateimg} source={require('../assets/arms0.jpeg') }/>
                    <Text style={styles.templatetxt}>Abs</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.template}>
                    <Image style={styles.templateimg} source={require('../assets/arms1.jpeg') }/>
                    <Text style={styles.templatetxt}>Arms</Text>
                </View>
                <View style={styles.template}>
                    <Image style={styles.templateimg} source={require('../assets/leg.jpeg') }/>
                    <Text style={styles.templatetxt}>Legs</Text>
                </View>
                <View style={styles.template}>
                    <Image style={styles.templateimg} source={require('../assets/images.jpeg') }/>
                    <Text style={styles.templatetxt}>Legs</Text>
                </View>
                </View>
                <View style={styles.findprogram}>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>Program based on your fitness goal</Text>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>More</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                <View style={styles.template}>
                    <Image style={styles.templateimg} source={require('../assets/arms3.jpeg') }/>
                    <Text style={styles.templatetxt}>Abs</Text>
                </View>
                <View style={styles.template}>
                    <Image style={styles.templateimg} source={require('../assets/cardio.jpeg') }/>
                    <Text style={styles.templatetxt}>Arms</Text>
                </View>
                <View style={styles.template}>
                    <Image style={styles.templateimg} source={require('../assets/cardio1.jpeg') }/>
                    <Text style={styles.templatetxt}>Legs</Text>
                </View>
                <View style={styles.template}>
                    <Image style={styles.templateimg} source={require('../assets/cardio2.jpeg') }/>
                    <Text style={styles.templatetxt}>Legs</Text>
                </View>
                </View>
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    screenlayout: {
        paddingLeft:20,
        paddingRight:20,
        marginTop: 40

    },
    header: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between"


    },
    headertxt: {
        fontWeight: "bold",
        fontSize: 22,

    },
    secondheadertxt: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop:30
        
    },
    headericon:
    {

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
    container:{
        marginRight:20,
        marginTop:10,
        justifyContent:"center",
        // width:320,
        borderRadius:2,
        width:370,
        height:140
        // marginHorizontal:100
    },
    findprogram:{
         marginTop:10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    template:{
        width:90,
        justifyContent:"center",
        marginRight:8
    },
    templateimg:{
        marginTop:10,
        height:100,
        width:70,
        borderRadius:5
    },
    templatetxt:{
        textAlign:"center"
    }


})
export default Home
