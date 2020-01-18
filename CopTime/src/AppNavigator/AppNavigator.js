import React from 'react'

import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Transition } from 'react-native-reanimated';

import HomeScreen from '../App/Home/HomeScreen'
import SettingsScreen from '../App/Notification/NotificationScreen'
import ModalScreen from '../App/Modal/ModalScreen'
import ChatScreen from '../App/Chat/ChatScreen'
import AadhaarScreen from '../Auth/SignUp/AadhaarScreen'
import OTPScreen from '../Auth/SignUp/OTPScreen'
import PasswordScreen from '../Auth/SignUp/PasswordScreen'
import LogInScreen from '../Auth/Login/LoginScreen'
import AuthLoadingScreen from '../AuthLoading/AuthLoadingScreen'

const FullStack =  createBottomTabNavigator(
    {
      Home: HomeScreen,
      Settings: SettingsScreen,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
            // Sometimes we want to add badges to some icons.
            // You can check the implementation below.
            IconComponent = HomeIconWithBadge;
          } else if (routeName === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
  
          // You can return any component that you like here!
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  );

const ComplaintSwitch=createAnimatedSwitchNavigator(
    {
        Modal:ModalScreen,
        Chat:ChatScreen
    }
)

const AppStack = createStackNavigator(
    {
        Full: FullStack,
        Complaint: ComplaintSwitch
    }
);

const UIDAIStack = createStackNavigator(
    {
        Aadhaar: AadhaarScreen,
        OTP: OTPScreen
    }
);

const SignUpStack = createAnimatedSwitchNavigator(
    {
        UIDAI: UIDAIStack,
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