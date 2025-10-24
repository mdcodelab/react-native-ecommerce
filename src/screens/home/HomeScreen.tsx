import React from 'react';
import AppSaveView from '../../components/views/AppSaveView';
import {s, vs} from 'react-native-size-matters';
import { View, Text, ActivityIndicator } from 'react-native';
import HomeHeader from '../../components/headers/HomeHeader';

function HomeScreen() {

  return (
    <AppSaveView>
<HomeHeader></HomeHeader>
<Text style={{fontFamily: "Nunito-Regular", fontSize: vs(20)}}>HomeScreen</Text>
    <Text style={{fontFamily: "Nunito-Bold", fontSize: vs(20)}}>HomeScreen</Text>
    </AppSaveView>
  )
}

export default HomeScreen;