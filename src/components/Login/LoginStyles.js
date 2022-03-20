import {StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent:  Platform.OS === 'android' ? 'center': 'space-around' ,
      alignItems: 'center',
      paddingTop: Platform.OS === 'android' ? '25%' : 20,
      paddingBottom: Platform.OS === 'android' ? '20%' : 20,
      paddingLeft: Platform.OS === 'android' ? 20 : 20,
      paddingRight: Platform.OS === 'android' ? 20 : 20,
    },
    logo: {
      height: undefined,
      width: '20%',
      resizeMode: 'cover',
      aspectRatio: 1,
    },
    text: {
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
    },
    googleSignInBackground: {
      backgroundColor: '#4285F4',
      borderColor:'#4285F4',
    },
    googleSignInText: {
      color: '#FFFFFF',
    },
    googleSignInLogo: {
      backgroundColor: '#FFFFFF',
    },
  });

  export default LoginStyles;