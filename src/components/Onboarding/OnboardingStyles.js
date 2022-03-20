import {StyleSheet } from 'react-native';
import colors from '../../assets/colors/colors';

const OnboardingStyles = StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white,
    },
    image: {
      marginVertical: '10%',
      width: '90%',
      height: undefined,
      aspectRatio: 1,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 24,
      color: colors.black,
      textAlign: 'center',
      fontFamily: 'openSansBold',
      marginHorizontal: 60,
    },
    text: {
      fontSize: 14,
      color: colors.gray,
      textAlign: 'center',
      fontFamily: 'openSans',
      marginHorizontal: 60,
      marginTop: 20,
    },
    dotStyle: {
      backgroundColor: colors.blueFaded,
    },
    activeDotStyle: {
      backgroundColor: colors.blue,
    },
    rightTextWrapper: {
      width: 40,
      height: 40,
      marginRight: 20,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    rightText: {
      color: colors.blue,
      fontFamily: 'openSansSemiBold',
      fontSize: 14,
    },
    leftTextWrapper: {
      width: 40,
      height: 40,
      marginLeft: 20,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    leftText: {
      color: colors.blue,
      fontFamily: 'openSansSemiBold',
      fontSize: 14,
    },
    doneButtonWrapper: {
      // alignItems: 'center',
      // justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: colors.blue,
    },
    doneButtonText: {
      fontSize: 14,
      fontFamily: 'openSansSemiBold',
      // textAlign: 'center',
      color: colors.white,
    },
  });

  export default OnboardingStyles;