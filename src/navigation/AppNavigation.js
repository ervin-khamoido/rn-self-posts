import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Platform } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {MainScreen} from '../screens/MainScreen';
import {PostScreen} from '../screens/PostScreen';
import {BookedScreen} from '../screens/BookedScreen';
import {AboutScreen} from '../screens/AboutScreen';
import {CreateScreen} from '../screens/CreateScreen';
import { THEME } from '../theme';

const navigatorOptions = {
   // initialRouteName: 'Booked', // it is alredy as a default screen (without "initialRouteName")
   defaultNavigationOptions: {
      headerStyle: {
         backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
   }
}

const PostNavigator = createStackNavigator(
   {
      Main: MainScreen,
      Post: {
         screen: PostScreen
      }
   },
   navigatorOptions
)

const BookedNavigator = createStackNavigator(
   {
      Booked: BookedScreen,
      Post: PostScreen
   },
   navigatorOptions
);

const bottomTabsConfig = {
   Post: {
      screen: PostNavigator,
      navigationOptions: {
         tabBarLabel: 'All',
         tabBarIcon: info => <Ionicons name={'ios-albums'} size={25} color={info.focused && Platform.OS !== 'android' ? THEME.MAIN_COLOR : info.tintColor} />
      }
   },
   Booked: {
      screen: BookedNavigator,
      navigationOptions: {
         tabBarLabel: 'Favoriets',
         tabBarIcon: info => <Ionicons name={'ios-star'} size={25} color={info.focused && Platform.OS !== 'android' ? THEME.MAIN_COLOR : info.tintColor} />
      }
   }
}

const BottomNavigator = Platform.OS === 'android' 
   ? createMaterialBottomTabNavigator(bottomTabsConfig, {
      activeTintColor: '#fff',
      shifting: true,
      barStyle: {
         backgroundColor: THEME.MAIN_COLOR
      }
   }) 
   : createBottomTabNavigator(bottomTabsConfig,
      {
         tabBarOptions: {
            tintColor: THEME.MAIN_COLOR,
            activeTintColor: THEME.MAIN_COLOR
         }
      }
   );

const AboutNavigator = createStackNavigator({
   About: AboutScreen
}, navigatorOptions);

const CreateNavigator = createStackNavigator({
   Create: CreateScreen
}, navigatorOptions);

const MainNavigator = createDrawerNavigator({
   PostTabs: {
      screen: BottomNavigator,
      navigationOptions: {
         drawerLabel: 'Posts',
         // drawerIcon: <Ionicons name='ion-star' />
      }
   },
   About: {
      screen: AboutNavigator
   },
   Create: {
      screen: CreateNavigator,
      navigationOptions: {
         drawerLabel: 'Create a post'
      }
   }
}, {
   contentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      labelStyle: {
         fontFamily: 'open-sans-bold'
      }
   }
});

export const AppNavigation = createAppContainer(MainNavigator)