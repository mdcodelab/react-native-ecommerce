import React from 'react';
import { StyleSheet, Platform, StatusBar, Image} from 'react-native';
import AppSaveView from "../../components/views/AppSaveView";
import { AppColors } from '../../styles/colors';
import { sharedPaddingHorizontal } from '../../styles/sharedStyles';
import {vs, s} from 'react-native-size-matters';
import AppTextInputs from '../../components/inputs/AppTextInputs';
import AppButtons from '../../components/buttons/AppButtons';

function LoginScreen({navigation}: any) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  return (
    <AppSaveView style={styles.container}>
      <Image source={require("../../../assets/images/logo.png")} 
      style={styles.logo}/>
      <AppTextInputs placeholder="Email..." handleChangeText={setEmail}/>
      <AppTextInputs placeholder="Password..." handleChangeText={setPassword} secureTextInput={true}/>  
      <AppButtons 
      text="Login" 
      style={styles.buttonLogin} 
      styleTitle={{color: AppColors.whiteColor, fontSize: s(12)}} />
      <AppButtons 
      text="Sign Up" 
      style={styles.buttonSignUp}
      styleTitle={{color: AppColors.primaryColor, fontSize: s(12)}}/>
    </AppSaveView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      paddingVertical: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
      },
      logo: {
        width: s(150),
        height: s(150),
        marginBottom: vs(30),
      },
      buttonLogin: {
        width: "100%",
        marginBottom: vs(10),
        fontSize: s(12),
        backgroundColor: AppColors.primaryColor,
      },
      buttonSignUp: {
        width: "100%",
        marginBottom: vs(10),
        fontSize: s(12),
        backgroundColor: AppColors.whiteColor,
        borderColor: AppColors.primaryColor,
        borderWidth: 1,
      },
  });



