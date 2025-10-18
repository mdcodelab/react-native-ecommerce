import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screen/home/HomeScreen';
import ProfileScreen from '../screen/profile/ProfilerScreen';
import CartScreen from '../screen/cart/CartScreen';
import { AppColors } from '../styles/colors';

const Tabs = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tabs.Navigator >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
      <Tabs.Screen name="Cart" component={CartScreen} />
    </Tabs.Navigator>
  );
}

