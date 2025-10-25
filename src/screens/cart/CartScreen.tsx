import React from 'react';
import AppSaveView from '../../components/views/AppSaveView';
import {s, vs} from 'react-native-size-matters';
import { View, Text} from 'react-native';
import HomeHeader from '../../components/headers/HomeHeader';
import EmptyCartScreen from './EmptyCartScreen';

function CartScreen() {
  return (
    <AppSaveView>
      <HomeHeader></HomeHeader>
      <Text>CartScreen</Text>
      <EmptyCartScreen></EmptyCartScreen>
    </AppSaveView>
  )
}

export default CartScreen;