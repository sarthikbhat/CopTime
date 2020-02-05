import React from 'react'

import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Transition } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import HomeScreen from '../App/Home/HomeScreen'
import NotificationsScreen from '../App/Notification/NotificationScreen'
import ModalScreen from '../App/Modal/ModalScreen'
import PSSelectorScreen from '../App/Modal/PSSelector'
import AllChatsScreen from '../App/Chat/AllChats'
import ChatScreen from '../App/Chat/ChatScreen'
import ChatBot from '../App/Chat/ChatBot'
import AadhaarScreen from '../Auth/SignUp/AadhaarScreen'
import OTPScreen from '../Auth/SignUp/OTPScreen'
import PasswordScreen from '../Auth/SignUp/PasswordScreen'
import LogInScreen from '../Auth/Login/LoginScreen'
import AuthLoadingScreen from '../AuthLoading/AuthLoadingScreen'
import ProfileScreen from '../App/Profile/ProfileScreen'
import RouteDirector from '../App/RouteDirector/RouteDirector'


const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = "Search";

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});


const NotificationsStack = createStackNavigator({
  NotificationScreen: NotificationsScreen,
  RouteDirector: RouteDirector
})


const FullStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    Notifications: NotificationsStack,
    Chats: AllChatsScreen
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
          IconComponent = Ionicons
          iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
        } else if (routeName === 'Chats') {
          IconComponent = MaterialCommunityIcons
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

const ComplaintSwitch = createAnimatedSwitchNavigator(
  {
    Modal: ModalScreen,
    PSSelector:PSSelectorScreen,
    Chat: ChatScreen,
    ChatBot:ChatBot
  }
)

const AppStack = createStackNavigator(
  {
    Full: {
      screen: FullStack,
      navigationOptions: {
        title: 'Full',
        header: null
      },
    },
    Complaint: ComplaintSwitch,
    Profile: ProfileScreen
  }
);

const UIDAIStack = createStackNavigator(
  {
    Aadhaar: {
      screen: AadhaarScreen,
      navigationOptions: {
        title: 'Aadhaar',
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
    UIDAI: UIDAIStack,
    Password: PasswordScreen
  }
);

const AuthStack = createStackNavigator(
  {
    LogIn:  {
      screen: LogInScreen,
      navigationOptions: {
        title: 'LogIn',
        header: null
      },
    },
    SignUp:  {
      screen: SignUpStack,
      navigationOptions: {
        title: 'SignUp',
        header: null
      },
    },
    transitionConfig
  }
);

const App = createAnimatedSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  transitionConfig
);

export default createAppContainer(App);