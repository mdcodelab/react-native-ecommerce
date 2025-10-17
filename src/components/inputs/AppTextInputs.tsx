import React from 'react';
import { TextInput, StyleSheet, StyleProp, TextStyle, KeyboardTypeOptions } from 'react-native';
import {vs, s} from 'react-native-size-matters';
import { AppColors } from '../../styles/colors';

interface AppTextInputsProps {
    value?: string;
    placeholder?: string;
    handleChangeText: (text: string) => void;
    secureTextInput?: boolean;
    keyboardType?: KeyboardTypeOptions;
    style?: StyleProp<TextStyle>;
}

function AppTextInputs({value, placeholder, handleChangeText,
  secureTextInput, keyboardType, style
}: AppTextInputsProps) {
  return (
    <TextInput
    value={value}
    placeholder={placeholder}
    onChangeText={handleChangeText}
    secureTextEntry={secureTextInput}
    keyboardType={keyboardType}
    style={[styles.input, style]}
>
    </TextInput>
  )
}

export default AppTextInputs;

const styles = StyleSheet.create({
    input: {
      height: vs(40),
      borderWidth: 1,
      borderColor: AppColors.borderColor,
      borderRadius: s(10),
      paddingHorizontal: vs(15),
      fontSize: s(12),
      backgroundColor: AppColors.whiteColor,
      width: "100%",
      marginBottom: vs(10),
    }
});
