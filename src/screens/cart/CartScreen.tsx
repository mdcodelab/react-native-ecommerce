import React from 'react';
import AppSaveView from '../../components/views/AppSaveView';
import {s, vs} from 'react-native-size-matters';
import { View, Text } from 'react-native';
import HomeHeader from '../../components/headers/HomeHeader';

function CartScreen() {
  return (
    <AppSaveView>
      <HomeHeader></HomeHeader>
      <Text>CartScreen</Text>
    </AppSaveView>
  )
}

export default CartScreen;