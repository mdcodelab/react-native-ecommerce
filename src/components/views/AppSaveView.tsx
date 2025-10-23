import React from 'react';
import { View, SafeAreaView, StyleSheet, Platform, StatusBar, StyleProp,
     ViewStyle, ViewProps } from 'react-native';
import { AppColors } from '../../styles/colors';
import { vs, s } from 'react-native-size-matters';

interface AppSaveViewProps extends ViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function AppSaveView({ children, style, ...rest }: AppSaveViewProps) {
  return (
    <SafeAreaView style={[styles.container, style]} {...rest}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}

export default AppSaveView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.whiteColor,
        marginTop: vs(10),
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0    : 0,
      },
    content: {
        width: "100%",
        flex: 1,
    }
});
