import React from 'react';
import AppSaveView from '../../components/views/AppSaveView';
import {s, vs} from 'react-native-size-matters';
import { View, Text, ActivityIndicator } from 'react-native';
import HomeHeader from '../../components/headers/HomeHeader';
import ProductCard from '../../components/cards/ProductCard';

function HomeScreen() {

  return (
    <AppSaveView>
<HomeHeader></HomeHeader>
<Text style={{fontFamily: "Nunito-Regular", fontSize: vs(20)}}>HomeScreen</Text>
    <Text style={{fontFamily: "Nunito-Bold", fontSize: vs(20)}}>HomeScreen</Text>
    <ProductCard></ProductCard>
    </AppSaveView>
  )
}

export default HomeScreen;