import React, { useContext, useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EditProfileScreen from './Profileimage';
import * as SecureStore from 'expo-secure-store'
import ProfileStyles from './ProfileStyle';
import DocumentPicker from 'react-native-document-picker';
import * as ImagePicker from 'expo-image-picker';

const Profile = ({ navigation }) => {
  const [username, setUserName] = useState();
  const [hotelName, setHotelName] = useState();
  const [image, setImage] = useState();
  const [accessToken, setAccessToken] = useState();
  
  const pickImage = async () => {
    var accessToken = await SecureStore.getItemAsync("accessToken");
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(result);


    if (!result.cancelled) {
      setImage(result.uri);
    }
    uploadImage(accessToken,image);
  };
  const handleSubmit = async () => {
    var username = await SecureStore.getItemAsync("username")
    if (username !== null) {
      setUserName(username);
    }
    var hotelName = await SecureStore.getItemAsync("hotelName");
    if (hotelName !== null) {
      setHotelName(hotelName);
    }
    // var details = {
    //   username: username,
    //   Name: name,                  
    //   accessToken: accessToken,
    // }
    // console.log(details);
  };
  const uploadImage = (accessToken,image) => {
    // Check if any file is selected or not
    // var details = {
    //   accessToken: accessToken,
    //   image: image,
    //   type: 'image/jpg',

    // };
    const form = new FormData();
    form.append("Files", {
      name: "SampleFile.jpg", // Whatever your filename is
      uri: image, //  file:///data/user/0/com.cookingrn/cache/rn_image_picker_lib_temp_5f6898ee-a8d4-48c9-b265-142efb11ec3f.jpg
      type: "image/jpg", // video/mp4 for videos..or image/png etc...
    });
    // var details = {
    //   accessToken: accessToken,
    //   name: "SampleFile.jpg", // Whatever your filename is
    //   uri: image, //  file:///data/user/0/com.cookingrn/cache/rn_image_picker_lib_temp_5f6898ee-a8d4-48c9-b265-142efb11ec3f.jpg
    //   type: "image/jpg", // video/mp4 for videos..or image/png etc...
    // }
    // var formBody = [];
    // for (var property in details) {
    //   var encodedKey = encodeURIComponent(property);
    //   var encodedValue = encodeURIComponent(details[property]);
    //   formBody.push(encodedKey + "=" + encodedValue);
    // }
    // formBody = formBody.join("&");
    fetch("http://3.89.108.233:3000/uploadProfile", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: form
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
      });
  }
  handleSubmit();
  return (
    <SafeAreaView style={ProfileStyles.container}>

      <View style={ProfileStyles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <TouchableOpacity onPress={() => pickImage()}>
            <Avatar.Image
              source={{ uri: image }}
              size={80}
            />
          </TouchableOpacity>
          <View style={{ marginLeft: 20 }}>

            <Title style={[ProfileStyles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>{hotelName}</Title>
            <Caption style={ProfileStyles.caption}>{username}</Caption>
          </View>
        </View>
      </View>

      <View style={ProfileStyles.userInfoSection}>
        <View style={ProfileStyles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>Chennai, India</Text>
        </View>
        <View style={ProfileStyles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>+91-900000009</Text>
        </View>
        <View style={ProfileStyles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>{username}</Text>
        </View>
      </View>
      <View >
        {/* <TouchableRipple onPress={() => {}}>
          <View style={ProfileStyles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25}/>
            <Text style={ProfileStyles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple> */}
        {/* <TouchableRipple onPress={() => {}}>
          <View style={ProfileStyles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25}/>
            <Text style={ProfileStyles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple> */}
        {/* <TouchableRipple onPress={()=>{}}>
          <View style={ProfileStyles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25}/>
            <Text style={ProfileStyles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple> */}

        {/* <TouchableRipple onPress={() => navigation.navigate("BookingHistory")}>
          <View style={ProfileStyles.menuItem}>
            <Icon name="account-check-outline" color="#000" size={25} />
            <Text style={ProfileStyles.menuItemText}>Booking History</Text>
          </View>
        </TouchableRipple> */}

      </View>
    </SafeAreaView>
  );
};
export default Profile;

