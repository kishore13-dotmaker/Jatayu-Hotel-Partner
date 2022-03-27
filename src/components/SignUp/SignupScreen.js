import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';
import FormInput from '../Input/FormInput';
import FormButton from '../Buttons/FormButton';
import DismissKeyboard from '../../utils/DismissKeyboard';
import SignUpStyles from './SignUpStyles';
// import { AuthContext } from '../../navigation/AuthProviders';
import SocialButtons  from "../Buttons/SocialButtons";
import * as SecureStore from 'expo-secure-store';




const SignUpScreen = ({navigation}) => {
 
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [hotelName , setHotelName] = useState();
  const [city , setCity] = useState();
  const [description, setDescription] = useState();
  const [address, setAddress] = useState(); 
  const [star_rating, setStar_Rating] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [town, setTown] = useState();
  const [couple, setCouple] = useState();
  const [single, setSingle] = useState();
  const [superDeluxe, setSuperDeluxe] = useState();
  const [deluxe, setDeluxe] = useState();
  const [luxury, setLuxury] = useState();

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
  const handleSubmit = async () => { 
    var details = {
			username: email,
      password: password,
      verifyPassword: confirmPassword,
      hotelName: hotelName,
      city: city,
      description: description,
      star_rating: star_rating,
      phoneNumber: phoneNumber,
      address: address,
      town: town,
      couple: couple,
      single: single,
      superDeluxe: superDeluxe,
      deluxe: deluxe,
      luxury: luxury,

    }
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch('http://172.19.17.164:3000/registerHotel', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    })
		.then((response) => response.json())
			.then(async(responseJson) =>{
        await SecureStore.setItemAsync('accessToken',responseJson.accessToken)
        navigation.navigate("RegisterRoom")
			})
			.catch((error)=>{
				console.error(error);
			});
    //   console.log( JSON.stringify({
    //     username: email,
    //     password: password,
    //     verifyPassword: confirmPassword,
    //     hotelName: hotelName,
    //     city: city,
    //     description: description,
    //     star_rating: star_rating,
    //     phoneNumber: phoneNumber,
    //     address: address,
    //     town: town,
    //     couple: couple,
    //     single: single,
    //     superDeluxe: superDeluxe,
    //     deluxe: deluxe,
    //     luxury: luxury,
  
		// 	})
    //  )
}
 
  return (
    <DismissKeyboard>
        <View style={SignUpStyles.container}>
        <ScrollView style={SignUpStyles.scrollView}>
          <Text style={SignUpStyles.text}>Create New Hotel</Text>
          <FormInput
            labelValue={email}
            onChangeText={(email) => setEmail(email)}
            placeholderText="Username"
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
         <FormInput
            labelValue={hotelName}
            onChangeText={(hotelName) => setHotelName(hotelName)}
            placeholderText="Hotel Name"
            iconType="pencil"
          />
    
           <FormInput 
            labelValue={city}
            onChangeText={(city) => setCity(city)}
            placeholderText="City"
            iconType="pencil"
            
          />
          <FormInput 
            labelValue={town}
            onChangeText={(town) => setTown(town)}
            placeholderText="Town"
            iconType="pencil"
            
          />
          <FormInput 
            labelValue={address}
            onChangeText={(address) => setAddress(address)}
            placeholderText="Address"
            iconType="pencil"
            
          />
          <FormInput 
            labelValue={description}
            onChangeText={(description) => setDescription(description)}
            placeholderText="Description"
            iconType="pencil"
            
          />
          <FormInput 
            labelValue={star_rating}
            onChangeText={(star_rating) => setStar_Rating(star_rating)}
            placeholderText="Star Rating"
            iconType="pencil"
            
          />
          <FormInput 
            labelValue={phoneNumber}
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
            placeholderText="Phone-Number"
            iconType="pencil"
            
          />
          <FormInput 
            labelValue={couple}
            onChangeText={(couple) => setCouple(couple)}
            placeholderText="Couple"
            iconType="pencil"
            
          />
          <FormInput 
            labelValue={single}
            onChangeText={(single) => setSingle(single)}
            placeholderText="Single"
            iconType="pencil"
            
          />
          <FormInput 
            labelValue={superDeluxe}
            onChangeText={(superDeluxe) => setSuperDeluxe(superDeluxe)}
            placeholderText="SuperDeluxe"
            iconType="pencil"
            
          />
          <FormInput 
            labelValue={deluxe}
            onChangeText={(deluxe) => setDeluxe(deluxe)}
            placeholderText="Deluxe"
            iconType="pencil"
            
          />
          <FormInput 
            labelValue={luxury}
            onChangeText={(luxury) => setLuxury(luxury)}
            placeholderText="Luxury"
            iconType="pencil"
            
          />

          <FormButton
            buttonTitle="Sign Up"
            onPress={() => handleSubmit() }
          />
          </ScrollView>
           </View>
    </DismissKeyboard>
  );
};

export default SignUpScreen;

