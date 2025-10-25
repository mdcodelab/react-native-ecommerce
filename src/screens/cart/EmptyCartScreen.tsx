import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { vs, s } from 'react-native-size-matters';
import AppText from '../../components/texts/AppText';
import { AppColors } from '../../styles/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from 'expo-router';

function EmptyCartScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <MaterialIcons name="shopping-bag" size={100} color={AppColors.bagColor} marginBottom={vs(20)}/>
        <AppText variant="bold" style={styles.title}>Your cart is empty</AppText> 
        <AppText variant="medium" style={styles.subtitle}>Add some items to it now!</AppText>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Home")}>
            <AppText variant="bold" style={styles.buttonText}>Shop Now!</AppText>
        </TouchableOpacity>
            </View>
  )
}

export default EmptyCartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: vs(20),
    },
    title: {
        fontSize: s(20),
        fontFamily: "Nunito-Bold",
        color: AppColors.blackColor,
        textAlign: "center",
        marginBottom: vs(5),
    },
    subtitle: {
        fontSize: s(16),
        fontFamily: "Nunito-Regular",
        color: AppColors.blackColor,
        textAlign: "center",
        marginBottom: vs(20),
    },
    button: {
        width: s(180),
        height: s(40),
        borderRadius: s(10),
        backgroundColor: AppColors.primaryColor,
        alignItems: "center",
        justifyContent: "center",
        padding: s(8),
        alignSelf: "center",
    },
    buttonText: {
        fontSize: s(18),
        fontFamily: "Nunito-Bold",
        color: AppColors.whiteColor,
        }

});
