import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfilerScreen';
import CartScreen from '../screens/cart/CartScreen';
import { AppColors } from '../styles/colors';
import { vs } from 'react-native-size-matters';

const Tabs = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tabs.Navigator 
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: AppColors.activeColor,
      tabBarInactiveTintColor: AppColors.primaryColor,
      tabBarStyle: {
        backgroundColor: AppColors.whiteColor,
        marginBottom: vs(5),
      },
      tabBarLabelStyle: {
        fontSize: vs(12),
      },
    }}>
      <Tabs.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
        title: "Home"
      }}/>

      <Tabs.Screen name="Profile" component={ProfileScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" size={size} color={color} />
        ),
        title: "Profile"
      }}/>

      <Tabs.Screen name="Cart" component={CartScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="cart" size={size} color={color} />
        ),
        title: "Cart"
      }}/>
    </Tabs.Navigator>
  );
}

