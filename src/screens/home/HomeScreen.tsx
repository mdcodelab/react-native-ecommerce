import React from 'react';
import AppSaveView from '../../components/views/AppSaveView';
import { vs } from 'react-native-size-matters';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import HomeHeader from '../../components/headers/HomeHeader';
import ProductCard from '../../components/cards/ProductCard';
import { products } from '../../data/products';

function HomeScreen() {
  function addToCart(item: any){
    console.log(item)
  }

  return (
    <AppSaveView>
<HomeHeader></HomeHeader>
<Text style={{fontFamily: "Nunito-Regular", fontSize: vs(20)}}>HomeScreen</Text>
    <View style={styles.content}>
      <FlatList 
      data={products}
      renderItem={({item}) => <ProductCard title={item.title} price={item.price} imageURL={item.imageURL} 
      onCard={() => addToCart((item))}></ProductCard>}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between"}}
        contentContainerStyle={{paddingHorizontal: vs(10)}}
        showsVerticalScrollIndicator={false}
      >
      </FlatList>
    </View>
    </AppSaveView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    content: {
        width: "100%",
        flex: 1,
        gap: vs(10),
    },
    
});
