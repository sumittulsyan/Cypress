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
    createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import Regform from '../components/reg';
import HomeScreen from '../components/quickstart';
import QuickStartSecond from '../components/quickstart_second';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../components/Home';
import Program from '../components/Program';
import Workout from '../components/Workout';
import Trainer from '../components/Trainer';
import Group from '../components/Group';
import Abs from '../components/Abs';
import Programs from '../components/Programs';
import Suggestion from '../components/Suggestion';
import Directory from '../components/Directory';
import Userdirectory from '../components/Userdirectory';
const BottomTabNavigator = createBottomTabNavigator({

    
    Home:{  
        screen:Home,  
        navigationOptions:{  
          tabBarLabel:'Home',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="home" color={tintColor} size={20}/>  
          )  
        }  
      },Program:{  
        screen:Program,  
        navigationOptions:{  
          tabBarLabel:'Program',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="tasks" color={tintColor} size={20}/>  
          )  
        }  
      }
      ,Workout:{  
        screen:Workout,  
        navigationOptions:{  
          tabBarLabel:'Workout',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="dumbbell" color={tintColor} size={20}/>  
          )  
        }  
      }
      ,Trainer:{  
        screen:Trainer,  
        navigationOptions:{  
          tabBarLabel:'Trainer',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="user" color={tintColor} size={20}/>  
          )  
        }  
      }
      ,Group:{  
        screen:Group,  
        navigationOptions:{  
          tabBarLabel:'Group',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="project-diagram" color={tintColor} size={20}/>  
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
