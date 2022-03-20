import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormInput from '../Input/FormInput';
import FormButton from '../Buttons/FormButton';
import DismissKeyboard from '../../utils/DismissKeyboard';
import ForgotPasswordStyles from './ForgotPasswordStyles';
// import { AuthContext } from '../../navigation/AuthProviders';





const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();

  // const {login} = useContext(AuthContext);

  return (
    <DismissKeyboard>
    <View style={ForgotPasswordStyles.container}>
      <Text style={ForgotPasswordStyles.text}>Forgot Password</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Enter email address"
        iconType="user-o"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormButton
        buttonTitle="Reset Password"
        // onPress={() => login(email, password)}
      />
  
    </View>
    </DismissKeyboard>
  );
};

export default SignUpScreen;

