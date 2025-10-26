import React from 'react';
import AppSaveView from '../../components/views/AppSaveView';
import {s, vs} from 'react-native-size-matters';
import { View, Text} from 'react-native';
import HomeHeader from '../../components/headers/HomeHeader';
import EmptyCartScreen from './EmptyCartScreen';
import CartItem from './CartItem';

function CartScreen() {
   const [quantity, setQuantity] = React.useState(1);
  return (
    <AppSaveView>
      <HomeHeader></HomeHeader>
      {/* <EmptyCartScreen></EmptyCartScreen> */}
      <CartItem></CartItem>
    </AppSaveView>
  )
}

export default CartScreen;