import React ,{Component}from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './Styles';
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

