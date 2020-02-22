import React from 'react'


import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import AuthLoadingScreen from '../AuthLoading/AuthLoadingScreen'
import ChatScreen from '../App/Chat/ChatScreen'
import IDScreen from '../Auth/SignUp/IDScreen'
import OTPScreen from '../Auth/SignUp/OTPScreen'
import PasswordScreen from '../Auth/SignUp/PasswordScreen'
import LogInScreen from '../Auth/Login/LoginScreen'
import MapScreen from '../App/Map/MapScreen'
import EmergencyScreen from '../App/Home/EmergencyScreen'
import NonEmergencyScreen from '../App/Home/NonEmergencyScreen'
import RouteDirector from '../App/RouteDirector/RouteDirector'
import HomeScreen from '../App/Home/HomeScreen'

const FullTab = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'Home',
                header: false
            },
        },
        Emergency: {
            screen: EmergencyScreen,
            navigationOptions: {
                title: 'Emergency',
                header: false
            },
        },
        NonEmergency: NonEmergencyScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = MaterialCommunityIcons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                }
                else if (routeName === 'Emergency') {
                    iconName = focused
                        ? 'flash-red-eye'
                        : 'flash-outline';
                    // Sometimes we want to add badges to some icons.
                } else if (routeName === 'NonEmergency') {
                    IconComponent = MaterialCommunityIcons
                    iconName = focused ? 'file-document-box-multiple' : 'file-document-box-multiple-outline';
                }

                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#5e72e5',
            inactiveTintColor: 'gray',
        },
    }
);


const ReportStack = createStackNavigator(
    {
        Chat: {
            screen: ChatScreen,
            // navigationOptions: {
            //     title: 'Full',
            //     header: false
            // },
        },
        Map: {
            screen: MapScreen,
            navigationOptions: {
                title: 'Full',
                header: false
            },
        },
    }
)

const AppStack = createStackNavigator(
    {
        Full: {
            screen: FullTab,
            navigationOptions: {
                title: 'Full',
                header: false
            },
        },
        Report: {
            screen: ReportStack,
            navigationOptions: {
                title: 'Full',
                header: null
            },
        },
        RouteDirector: RouteDirector
    }
);

const IDStack = createStackNavigator(
    {
        ID: {
            screen: IDScreen,
            navigationOptions: {
                title: 'ID',
                header: null
            },
        },
        OTP: {
            screen: OTPScreen,
            navigationOptions: {
                title: 'OTP',
                headerShown: false
            },
        },
    }
);

const SignUpStack = createAnimatedSwitchNavigator(
    {
        ID: {
            screen: IDStack,
            navigationOptions: {
                title: 'OTP',
                headerShown: false
            },
        },
        Password: {
            screen: PasswordScreen,
            navigationOptions: {
                title: 'OTP',
                headerShown: false
            },
        },
    }
);

const AuthStack = createStackNavigator(
    {
        LogIn:  {
            screen: LogInScreen,
            navigationOptions: {
                title: 'OTP',
                headerShown: false
            }, 
        },      
        SignUp: {
            screen: SignUpStack,
            navigationOptions: {
                title: 'OTP',
                header: false
            },
        }
    }
);

const App = createAnimatedSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack
    }
);

export default createAppContainer(App);