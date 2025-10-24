import React from 'react';
import { StyleSheet, Platform, StatusBar, Image} from 'react-native';
import AppSaveView from "../../components/views/AppSaveView";
import { AppColors } from '../../styles/colors';
import { sharedPaddingHorizontal } from '../../styles/sharedStyles';
import {vs, s} from 'react-native-size-matters';
import AppTextInputs from '../../components/inputs/AppTextInputs';
import AppButtons from '../../components/buttons/AppButtons';

function LoginScreen({ navigation }: any) {
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
      styleTitle={{color: AppColors.whiteColor}}
      backgroundColor={AppColors.primaryColor}
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainTabs' }],
        })
      }
      />
      <AppButtons 
      text="Sign Up" 
      style={styles.buttonSignUp}
      backgroundColor={AppColors.whiteColor}
      styleTitle={{color: AppColors.primaryColor}}
      onPress={() => navigation.navigate("SignUp")}/>


    </AppSaveView>
  )
}

export default LoginScreen;

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
        alignSelf: "center",
        borderRadius: s(10),
      },
      buttonLogin: {
        width: "100%",
        marginBottom: vs(10),
        marginTop: vs(30),
        fontSize: s(12),
        backgroundColor: "#000000",
      },
      buttonSignUp: {
        width: "100%",
        marginBottom: vs(10),
        fontSize: s(12),
        backgroundColor: AppColors.whiteColor,
        borderWidth: 1,
      },
  });



