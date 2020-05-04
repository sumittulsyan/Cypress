// import {
//     createAppContainer,
// } from 'react-navigation';

// import { createStackNavigator } from 'react-navigation-stack';
// // import Home from '../screens/Home/Home';
// // import Login from '../screens/auth/Login';
// // import {pageTypes} from '../constants';
// import Regform from '../components/Reg';

// const AuthStack = createStackNavigator(
//     const App = StackNavigator({
//         Home: { screen: HomeScreen },
//       });
//     // {
//     //    Regform
//     // },
//     // {
//     //     headerMode: 'none',
//     //     navigationOptions: {
//     //         header: null,
//     //     },
//     //     initialRouteName: Regform,
//     // },

// );

// export const AppContainer = createAppContainer(
//     AuthStack,
// );
import {
    createAppContainer, createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { Image } from 'react-native';
import Regform from '../components/registration/reg';
import HomeScreen from '../components/quickstart/quickstart';
import QuickStartSecond from '../components/quickstart_second/quickstart_second';
import { createBottomTabNavigator } from 'react-navigation-tabs';
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
const TrainerSwitch =createSwitchNavigator({
  Trainer,Suggestion,Directory
})
const BottomTabNavigator = createBottomTabNavigator({

    
    Home:{  
        screen:Home,  
        navigationOptions:{  
          tabBarLabel:'Home',  
          tabBarIcon:({tintColor})=>(  
            <Image source={require('../assets/Icons/Feed.png')} style={{height:16,width:16}} />
          )  
        }  
      },Program:{  
        screen:Program,  
        navigationOptions:{  
          tabBarLabel:'Program',  
          tabBarIcon:({tintColor})=>(  
            <Image source={require('../assets/Icons/Calendar.png')} style={{height:16,width:16}} />
          )  
        }  
      }
      ,Workout:{  
        screen:Workout,  
        navigationOptions:{  
          tabBarLabel:'Workout',  
          tabBarIcon:({tintColor})=>(  
            <Image source={require('../assets/Icons/workout.png')} style={{height:16,width:16}} />
          )  
        }  
      }
      ,TrainerSwitch:{  
        screen:TrainerSwitch,
        navigationOptions:{  
          tabBarLabel:'Trainer',  
          tabBarIcon:({tintColor})=>(  
            <Image source={require('../assets/Icons/trainer.png')} style={{height:16,width:16}} />
          )  
        }  
      }
      ,Group:{  
        screen:Group,  
        navigationOptions:{  
          tabBarLabel:'Group',  
          tabBarIcon:({tintColor})=>(  
            <Image source={require('../assets/Icons/group.png')} style={{height:16,width:16}} />
          )  
        }  
      }
},
    {
        initialRouteName: "Home"
    })
const AuthStack = createStackNavigator(
    {
         Regform, HomeScreen, QuickStartSecond,BottomTabNavigator,Abs,Programs,Suggestion,Directory,Userdirectory
           
         
    }
    , {
        headerMode: "none",
        initialRouteName: "Regform"
    }
);
export const AppContainer = createAppContainer(
    AuthStack,
);
