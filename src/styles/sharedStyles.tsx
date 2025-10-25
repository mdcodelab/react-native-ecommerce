import {vs, s} from 'react-native-size-matters';
import { StyleSheet } from 'react-native';
export const sharedPaddingHorizontal=vs(12);
import { AppColors } from './colors';

export const sharedStyles = StyleSheet.create({
    shadow: {
        //IOS
        shadowColor: AppColors.blackColor,
        shadowOffset: {
            width: 0,
            height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,

        //android
        elevation: 5,
    }
});
