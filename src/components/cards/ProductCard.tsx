import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import AppText from '../texts/AppText';
import { vs, s } from 'react-native-size-matters';
import Entypo from '@expo/vector-icons/Entypo';
import { AppColors } from '../../styles/colors';


function ProductCard() {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={require("../../../assets/images/logo.png")}
            style={styles.image}></Image>
            </View>
        <View style={styles.titleContainer}>
            <AppText style={styles.title}>IPhone</AppText>
            <AppText style={styles.price}>300</AppText>
            </View>
            

    </View>
    )
}

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        width: s(160),
        height: s(160),
        borderRadius: s(10),
        backgroundColor: AppColors.whiteColor,
        borderWidth: 3,
        borderColor: AppColors.borderColor,
    },
    imageContainer: {
        width: s(110),
        height: s(110),
        borderRadius: s(10),
        alignSelf: "center",
        
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    titleContainer: {
        flexDirection: "column",
        marginBottom: vs(5),
        alignSelf: "center",
    },
    title: {
        fontSize: s(16),
        fontFamily: "Nunito-Bold",
    },
    price: {
        fontSize: s(14),
        fontFamily: "Nunito-Bold",
    },

});
