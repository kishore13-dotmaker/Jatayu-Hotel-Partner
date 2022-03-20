import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormInput from '../Input/FormInput';
import FormButton from '../Buttons/FormButton';
import DismissKeyboard from '../../utils/DismissKeyboard';
import SignUpStyles from './SignUpStyles';
// import { AuthContext } from '../../navigation/AuthProviders';
import SocialButtons  from "../Buttons/SocialButtons";




const SignUpScreen = ({navigation}) => {
 
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [firstName , setFirstName] = useState();
  const [lastName , setLastName] = useState();

  const getMyObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@key')
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
      // read error
    }
  
    console.log('Done.')
  
  }

  // const {login} = useContext(AuthContext);
  const handleSubmit = () => { 
    var details = {
      firstName: firstName,
			lastName: lastName,
			username: email,
      password: password,
      verifyPassword: confirmPassword,

    }
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch('http://172.19.17.164:3000/registerCustomer', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    })
		.then((response) => response.json())
			.then((responseJson) =>{
				console.log(responseJson);
			})
			.catch((error)=>{
				console.error(error);
			});console.log( JSON.stringify({
				firstName: firstName,
			lastName: lastName,
			username: email,
      password: password,
      verifyPassword: confirmPassword,
			})
     )
}
 
  return (
    <DismissKeyboard>
    <View style={SignUpStyles.container}>
      <Text style={SignUpStyles.text}>Signup</Text>
      <FormInput
        labelValue={firstName}
        onChangeText={(firstName) => setFirstName(firstName)}
        placeholderText="First Name"
        iconType="pencil"
      />
      
      <FormInput
        labelValue={lastName}
        onChangeText={(lastName) => setLastName(lastName)}
        placeholderText="Last Name"
        iconType="pencil"
      />

      <FormInput 
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user-o"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput 
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => handleSubmit() }
      />
    

      <SocialButtons 
        screen = {"signup"}
        facebookButtonText= { "Continue with Facebook" }
        googleButtonText= { "Continue with Google" }
        googleButtonViewStyle= { SignUpStyles.googleSignInBackground} 
        googleLogoStyle= {SignUpStyles.googleSignInBackground}
        googleTextStyle= {SignUpStyles.googleSignInText}
      
      />
    
      
      

      <TouchableOpacity
        style={SignUpStyles.forgotButton}
         onPress={() => navigation.navigate('Login')}
        >
        <Text style={SignUpStyles.navButtonText}>
          Already have an account? Login here
        </Text>
      </TouchableOpacity>
    </View>
    </DismissKeyboard>
  );
};

export default SignUpScreen;

