import React ,{Component}from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Regform from '../components/reg';
export default  function QuickStartSecond(props) {

    
    return (
        <View>
            <View style={styles.quickstart}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("HomeScreen")}>
                <Icon name="arrow-left" size={20} color="#000" style={{ padding: 10 }} />
                </TouchableOpacity>
                
                <Text style={{ padding: 8, fontSize: 20, justifyContent: "center" }}>Quick Start</Text>
            </View>
            <View>
                <Text style={styles.text1}>Step 2/2</Text>
                <Text style={styles.text2}> What is your target</Text>
            </View>
            <View style={styles.MainContainer}>

                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}>

                    <Text style={styles.TextStyle}> Lose Weight </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}>

                    <Text style={styles.TextStyle}> Strength core </Text>

                </TouchableOpacity>

            </View>
            <View style={styles.MainContainer}>

                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}>

                    <Text style={styles.TextStyle}> Build Muscle </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}>

                    <Text style={styles.TextStyle}> Tone Muscle </Text>

                </TouchableOpacity>

            </View>
            <View style={styles.MainContainer}>

                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}>

                    <Text style={styles.TextStyle}> Improve Endurance </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}>

                    <Text style={styles.TextStyle}> Stay Fit</Text>

                </TouchableOpacity>

            </View>
            <View style={styles.MainContainer}>

                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}>

                    <Text style={styles.TextStyle}> Free </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}>

                    <Text style={styles.TextStyle}> Target UpperBody </Text>

                </TouchableOpacity>

            </View>
            <View style={styles.MainContainer}>

                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}>

                    <Text style={styles.TextStyle}> All About Yoga </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}>

                    <Text style={styles.TextStyle}> Bodyweight </Text>

                </TouchableOpacity>

            </View>
            <View style={styles.MainContainer}>

                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}>

                    <Text style={styles.TextStyle}> Beginner Guide </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}>

                    <Text style={styles.TextStyle}> Cardio </Text>

                </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('BottomTabNavigator')} >

                <Text style={styles.btntext}>Finish</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    quickstart: {
        color: "#0000FF",
        marginTop: 20,
        marginLeft: 20,
        flexDirection: "row",

        // justifyContent: "center"
    }, button: {
        marginTop: 80,
        alignSelf: "stretch",
        alignItems: "center",
        padding: 10,

        backgroundColor: "#999900"
        , marginLeft: 40,
        marginRight: 40,
        borderRadius:10
    },
    btntext: {
        color: "#fff",
        fontWeight: "bold",

    },
    text1: {
        fontWeight: "bold",
        fontSize: 24,
        marginTop: 20,
        marginLeft: 40,
        color: "#000080"
    },
    text2: {
        fontSize: 18,
        marginLeft: 36,
        marginTop: 16,
        //paddingTop:20
    },
    MainContainer: {
        flexDirection:"row",
    },

    SubmitButtonStyle: {

        // marginTop:10,
        paddingTop: 5,
        paddingBottom: 10,
        marginTop: 10,
        marginLeft: 40,
        // marginRight: 40,
        backgroundColor: '#00BCD4',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000'
    },
   
    

    TextStyle: {
        textAlign:"center",
        color: '#fff',
        paddingHorizontal:5
    },
    TextStyle1:{
        paddingLeft:20
    }

})
// export default HomeScreen;