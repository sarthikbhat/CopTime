import React from 'react'


import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Transition } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import HomeScreen from '../App/Home/HomeScreen'
import SettingsScreen from '../App/Notification/NotificationScreen'
import ModalScreen from '../App/Modal/ModalScreen'
import AllChatsScreen from '../App/Chat/AllChats'
import ChatScreen from '../App/Chat/ChatScreen'
import AadhaarScreen from '../Auth/SignUp/AadhaarScreen'
import OTPScreen from '../Auth/SignUp/OTPScreen'
import PasswordScreen from '../Auth/SignUp/PasswordScreen'
import LogInScreen from '../Auth/Login/LoginScreen'
import AuthLoadingScreen from '../AuthLoading/AuthLoadingScreen'


const FullStack =  createBottomTabNavigator(
    {
      Home: HomeScreen,
      Notifications: SettingsScreen,
      Chats:AllChatsScreen
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
          } else if (routeName === 'Notifications') {
            IconComponent=Ionicons
            iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
          } else if (routeName === 'Chats') {
            IconComponent=MaterialCommunityIcons
            iconName = focused ? 'message-text' : 'message-text-outline';
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