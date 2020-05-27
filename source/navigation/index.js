import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import {Image, View, Text} from 'react-native';
import Regform from '../components/registration/reg';
import HomeScreen from '../components/quickstart/quickstart';
import QuickStartSecond from '../components/quickstart_second/quickstart_second';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../components/home/Home';
import Program from '../components/program/Program';
import Workout from '../components/workout/Workout';
import Trainer from '../components/trainer/Trainer';
import Group from '../components/group/Group';
import Abs from '../components/abs/Abs';
import Programs from '../components/programs/Programs';
import Suggestion from '../components/suggestion/Suggestion';
import Directory from '../components/directory/Directory';
import Userdirectory from '../components/userdirectory/Userdirectory';
import {DrawerItems, createDrawerNavigator} from 'react-navigation-drawer';
const NotificationDrawer = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    drawerPosition: 'right',
    contentComponent: props => (
      <View style={{height: '100%', backgroundColor: '#E3EEF7'}}>
        <View
          style={{
            paddingTop: 46,
            paddingLeft: 24,
            backgroundColor: '#E3EEF7',
            height: 102,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
          <Text style={{color: '#22304A', fontSize: 20, fontWeight: 'bold'}}>
            Notification
          </Text>
        </View>

        <View style={{paddingLeft: 24,paddingTop:10}}>
          <Text style={{color:"#22304A",fontSize:16,opacity:.7,fontWeight:"400"}}>Lorem Ipsum has a new{'\n'}notification</Text>
        </View>
        <View style={{paddingLeft: 24,paddingTop:10}}>
          <Text  style={{color:"#22304A",fontSize:16,opacity:.7,fontWeight:"400"}}>Lorem Ipsum has a new {'\n'}notification</Text>
        </View>
        <View style={{paddingLeft: 24,paddingTop:10}}>
          <Text  style={{color:"#22304A",fontSize:16,opacity:.7,fontWeight:"400"}}>Lorem Ipsum has a new {'\n'}notification</Text>
        </View>
        <View style={{paddingLeft: 24,paddingTop:10}}>
          <Text style={{color:"#22304A",fontSize:16,opacity:.7,fontWeight:"400"}}>Lorem Ipsum has a new {'\n'}notification</Text>
        </View>
        <View style={{paddingLeft: 24,paddingTop:10}}>
          <Text style={{color:"#22304A",fontSize:16,opacity:.7,fontWeight:"400"}}>Lorem Ipsum has a new {'\n'}notification</Text>
        </View>
        <View style={{paddingLeft: 24,paddingTop:10}}>
          <Text style={{color:"#22304A",fontSize:16,opacity:.7,fontWeight:"400"}}>Lorem Ipsum has a new {'\n'}notification</Text>
        </View>
        <View style={{paddingLeft: 24,paddingTop:10}}>
          <Text style={{color:"#22304A",fontSize:16,opacity:.7,fontWeight:"400"}}>Lorem Ipsum has a new {'\n'}notification</Text>
        </View>

      </View>
    ),
  },
);
const TrainerSwitch = createSwitchNavigator({
  Trainer,
  Suggestion,
  Directory,
});
const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: NotificationDrawer,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('../assets/Icons/Feed.png')}
            style={{height: 16, width: 16}}
          />
        ),
      },
    },
    Program: {
      screen: Program,
      navigationOptions: {
        tabBarLabel: 'Program',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('../assets/Icons/Calendar.png')}
            style={{height: 16, width: 16}}
          />
        ),
      },
    },
    Workout: {
      screen: Workout,
      navigationOptions: {
        tabBarLabel: 'Workout',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('../assets/Icons/workout.png')}
            style={{height: 16, width: 16}}
          />
        ),
      },
    },
    TrainerSwitch: {
      screen: TrainerSwitch,
      navigationOptions: {
        tabBarLabel: 'Trainer',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('../assets/Icons/trainer.png')}
            style={{height: 16, width: 16}}
          />
        ),
      },
    },
    Group: {
      screen: Group,
      navigationOptions: {
        tabBarLabel: 'Group',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('../assets/Icons/group.png')}
            style={{height: 16, width: 16}}
          />
        ),
      },
    },
  },

  {
    tabBarOptions: {
      activeTintColor: '#09152D',
      inactiveTintColor: '#E1E1E1',
      labelStyle: {
        fontSize: 14,
        fontWeight: '500',
      },
    },
    initialRouteName: 'Home',
  },
);
const AuthStack = createStackNavigator(
  {
    Regform,
    HomeScreen,
    QuickStartSecond,
    BottomTabNavigator,
    Abs,
    Programs,
    Suggestion,
    Directory,
    Userdirectory,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Regform',
  },
);
export const AppContainer = createAppContainer(AuthStack);
