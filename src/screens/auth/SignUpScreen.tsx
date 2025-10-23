import React from 'react';
import { StyleSheet, Platform, StatusBar, Image} from 'react-native';
import AppSaveView from "../../components/views/AppSaveView";
import { AppColors } from '../../styles/colors';
import { sharedPaddingHorizontal } from '../../styles/sharedStyles';
import {vs, s} from 'react-native-size-matters';
import AppTextInputs from '../../components/inputs/AppTextInputs';
import AppButtons from '../../components/buttons/AppButtons';

function SignUpScreen({ navigation }: any) {
    const [userName, setUserName]=React.useState("");
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  return (
    <AppSaveView style={styles.container}>
      <Image source={require("../../../assets/images/logo.png")} 
      style={styles.logo}/>
      <AppTextInputs placeholder="Name..." handleChangeText={setUserName}/>
      <AppTextInputs placeholder="Email..." handleChangeText={setEmail}/>
      <AppTextInputs placeholder="Password..." handleChangeText={setPassword} secureTextInput={true}/>  
      <AppButtons 
      text="Create New Account" 
      style={styles.buttonCreateAccount} 
      styleTitle={{color: AppColors.whiteColor}} 
      backgroundColor={AppColors.primaryColor}/>
      
      <AppButtons 
      text="Go To Sign In" 
      style={styles.buttonGoToSignIn}
      backgroundColor={AppColors.whiteColor}
      styleTitle={{color: AppColors.primaryColor}}
      onPress={() => navigation.navigate("Login")}/>
    </AppSaveView>
  )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "center",
      paddingVertical: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
      backgroundColor: AppColors.backgroundBlue,
      paddingHorizontal: s(10),
    },
      logo: {
        width: s(150),
        height: s(150),
        marginBottom: vs(30),
        marginTop: s(30),
      },
      buttonCreateAccount: {
        width: "100%",
        marginBottom: vs(10),
        marginTop: vs(30),
        fontSize: s(12),
        backgroundColor: "#000000",
      },
      buttonGoToSignIn: {
        width: "100%",
        marginBottom: vs(10),
        fontSize: s(12),
        backgroundColor: AppColors.whiteColor,
        borderWidth: 1,
      },
  });



