import React from 'react';
import { Text, StyleSheet, TextProps, StyleProp, TextStyle } from 'react-native';
import {s} from 'react-native-size-matters';

interface AppTextProps extends TextProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  variant?: 'bold' | 'medium';
}

function AppText({ children, style, variant = 'bold', ...rest }: AppTextProps) {
  return (
    <Text style={[Styles[variant], style]} {...rest}>
      {children}
    </Text>
  );
}

const Styles = StyleSheet.create({
bold: {
  fontSize: s(18),
  color: "#000"
},
medium: {
  fontSize: s(16),  
  color: "#000"
}, 
small: {
  fontSize: s(12),
  color: "#000"
}
});
    

export default AppText;






