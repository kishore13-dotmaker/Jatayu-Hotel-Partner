import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';
import FormInput from '../Input/FormInput';
import FormButton from '../Buttons/FormButton';
import DismissKeyboard from '../../utils/DismissKeyboard';
import SignUpStyles from './SignUpStyles';
// import { AuthContext } from '../../navigation/AuthProviders';
import SocialButtons  from "../Buttons/SocialButtons";
import * as SecureStore from 'expo-secure-store';

const RegisterRoom = ({navigation}) =>{
    const [category, setCategory]= useState();
    const [beds, setBeds]= useState();
    const [price, setPrice]= useState();
    const [number, setNumber]= useState();
    const [maxGuests, setMaxGuests]= useState();
    // var accessToken = await SecureStore.getItemAsync("accessToken"); 
      // const {login} = useContext(AuthContext);
  const handleSubmit = async() => { 
    var accessToken = await SecureStore.getItemAsync("accessToken");
    var details = {
		    category: category,
        beds:beds,
        price:price,
        number:number,
        maxGuests:maxGuests,
        accessToken:accessToken
    }
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch('http://172.17.206.12:3000/newRoom', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    })
		.then((response) => response.json())
			.then(async(responseJson) =>{
        
			})
			.catch((error)=>{
				console.error(error);
			});
        }
    return(
        <DismissKeyboard>
        <View style={SignUpStyles.container}>
        <ScrollView style={SignUpStyles.scrollView}>

        <FormInput 
            labelValue={category}
            onChangeText={(category) => setCategory(category)}
            placeholderText="Category"
            iconType="pencil"
            
          />
          <FormInput 
            labelValue={beds}
            onChangeText={(beds) => setBeds(beds)}
            placeholderText="Beds"
            iconType="pencil"
            
          />
          <FormInput 
            labelValue={price}
            onChangeText={(price) => setPrice(price)}
            placeholderText="Price"
            iconType="pencil"
            
          />
          <FormInput 
            labelValue={number}
            onChangeText={(number) => setNumber(number)}
            placeholderText="Number"
            iconType="pencil"
            
          />
          <FormInput 
            labelValue={maxGuests}
            onChangeText={(maxGuests) => setMaxGuests(maxGuests)}
            placeholderText="MaxGuests"
            iconType="pencil"
            
          />
          <FormButton
            buttonTitle="Update Rooms"
            onPress={() => handleSubmit() }
          />
           <FormButton
            buttonTitle="Login Page"
            onPress={() => navigation.navigate("LoginScreen")}
          />
        </ScrollView>
           </View>
    </DismissKeyboard>
        )
}

export default RegisterRoom;