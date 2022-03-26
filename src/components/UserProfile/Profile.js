import React from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EditProfileScreen from './Profileimage';

import ProfileStyles from './ProfileStyle';

const ProfileScreen = () => {

  const handleSubmit = () => { 
    var details = {
      accessToken: accessToken,
    }
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch('http://172.19.17.164:3000/findUser', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    })
		.then((response) => response.json())
    .then( async (responseJson) =>{
      try {
        await AsyncStorage.setItem('accessToken',JSON.stringify(responseJson.accessToken))
        const AccessToken = AsyncStorage.getItem('accessToken')
        console.log(AccessToken)
        navigation.replace("Home")
      } catch (e) {
        console.log(e)
      }
})
    
    .catch((error)=>{
      console.error(error);
    });
  }

    return (
      <SafeAreaView style={ProfileStyles.container}>

      <View style={ProfileStyles.userInfoSection}>
      <TouchableOpacity onPress={() => navigation.navigate('Profileimage')}></TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
           source={require("../../assets/images/app_icon/profile.jpg")}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[ProfileStyles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>John Doe</Title>
            <Caption style={ProfileStyles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>

      <View style={ProfileStyles.userInfoSection}>
        <View style={ProfileStyles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Chennai, India</Text>
        </View>
        <View style={ProfileStyles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={ProfileStyles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>john_doe@email.com</Text>
        </View>
      </View>
      <View >
        <TouchableRipple onPress={() => {}}>
          <View style={ProfileStyles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25}/>
            <Text style={ProfileStyles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={ProfileStyles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25}/>
            <Text style={ProfileStyles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{}}>
          <View style={ProfileStyles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25}/>
            <Text style={ProfileStyles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={ProfileStyles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={ProfileStyles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
       
      </View>
    </SafeAreaView>
      );
    };


export default ProfileScreen;

