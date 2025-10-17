import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleProp, StyleSheet, 
    ViewStyle, TextStyle} from 'react-native';
import { s, vs } from 'react-native-size-matters';
import AppText from '../texts/AppText';
import { AppColors } from '../../styles/colors';


interface AppButtonsProps extends TouchableOpacityProps {
  text: string;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  textColor?: string;
  styleTitle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

function AppButtons({ onPress, text, style, 
    backgroundColor = AppColors.primaryColor, 
    textColor = AppColors.whiteColor, styleTitle,
    disabled, ...rest }: AppButtonsProps) {
  return (
    <TouchableOpacity 
    onPress={onPress} 
    activeOpacity={0.8} 
    {...rest}
    disabled={disabled}
      style={[styles.button, style, { backgroundColor: disabled ? AppColors.disableButton : backgroundColor }]}>
    <AppText variant="bold" style={[styles.textContent, {color: textColor}, styleTitle]}>{text}</AppText>
    </TouchableOpacity>
  )
}

export default AppButtons;

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: vs(40),
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: s(25),
        alignSelf: "center",
    },
    textContent: {
        color: "#fff",
        fontSize: vs(16),
    }
})
