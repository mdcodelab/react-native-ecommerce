import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { AppColors } from '../../styles/colors';
import { vs, s} from 'react-native-size-matters';


function HomeHeader() {
  return (
    
        <View style={styles.container}>
          <View style={styles.content}>
            <Image source={require("../../../assets/images/logo.png")}
            style={styles.image}></Image>
            </View>
        </View>
    
  )
}

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
      backgroundColor: AppColors.primaryColor,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: vs(40),
      width: "100%",
      paddingVertical: vs(10),
    },
    content: {
      width: s(40),
      height: vs(40),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: AppColors.primaryColor,
    },
    image : {
      width: s(40),
      height: vs(40),
    }
});
