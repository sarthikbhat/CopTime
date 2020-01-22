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

const FullTab = createBottomTabNavigator(
    {
        Emergency: {
            screen: EmergencyScreen,
            navigationOptions: {
                title: 'Emergency',
                header: null
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
                if (routeName === 'Emergency') {
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
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);


const ReportStack = createStackNavigator(
    {
        Chat: {
            screen: ChatScreen,
            navigationOptions: {
                title: 'Full',
                header: null
            },
        },
        Map: {
            screen: MapScreen,
            navigationOptions: {
                title: 'Full',
                header: null
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
                header: null
            },
        },
        Report: {
            screen: ReportStack,
            navigationOptions: {
                title: 'Full',
                header: null
            },
        },
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
                header: null
            },
        },
    }
);

const SignUpStack = createAnimatedSwitchNavigator(
    {
        ID: IDStack,
        Password: PasswordScreen
    }
);

const AuthStack = createStackNavigator(
    {
        LogIn: LogInScreen,
        SignUp: SignUpStack
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