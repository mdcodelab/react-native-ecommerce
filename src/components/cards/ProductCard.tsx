import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AppText from '../texts/AppText';
import { vs, s } from 'react-native-size-matters';
import Entypo from '@expo/vector-icons/Entypo';
import { AppColors } from '../../styles/colors';
import { sharedStyles } from '../../styles/sharedStyles';

interface ProductCardProps {
    title: string;
    price: number;
    imageURL: number;
    onCard: () => void;
}

function ProductCard({title, price, imageURL, onCard}: ProductCardProps) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onCard}>
            <Entypo name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
            <Image source={imageURL}
            style={styles.image}></Image>
            </View>
        <View style={styles.titleContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.price}>{price}</AppText>
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
        ...sharedStyles.shadow,
    },
    button: {
        width: s(40),
        height: s(40),
        borderRadius: s(20),
        backgroundColor: AppColors.whiteColor,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: vs(10),
        left: vs(10),
        zIndex: 2,
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        padding: s(5),
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
        marginBottom: vs(10),
        alignSelf: "center",
    },
    title: {
        fontSize: s(16),
        fontFamily: "Nunito-Bold",
        alignSelf: "center",
        color: AppColors.blackColor,
    },
    price: {
        fontSize: s(14),
        fontFamily: "Nunito-Bold",
        alignSelf: "center",
        color: AppColors.blackColor,
    },
});
