import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import ActionButton from 'react-native-action-button';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Colors from "../../assets/colors/colors";
import HomeStyles from "./HomeScreenStyles";
import SearchBar from "../SearchBar/SerachBar";
import ListOptions from "../ListOptions/ListOptions";
import Categories from "../Categories/Categories";
import Card from "../ShopCards/card";
import shops from "../consts/shops";
import * as SecureStore from 'expo-secure-store';

const { width } = Dimensions.get("screen");

const Home = ({ navigation }) => {

  const [fromDate,setFromDate]=useState();
  const [toDate,setToDate]=useState();

  const handleSubmit =async () => { 
    var accessToken = await SecureStore.getItemAsync("accessToken");
    var details = {
      todate: toDate,
      fromdate: fromDate,
      accessToken: accessToken
    }
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch('http://172.19.17.164:3000/findBookings', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    })
		.then((response) => response.json())
    .then( async (responseJson) =>{
      try {
        console.log(responseJson)
      } catch (e) {
        console.log(e)
      }
})
    
    .catch((error)=>{
      console.error(error);
    });
  }
  const hotelProfile = async () => {
    var accessToken = await SecureStore.getItemAsync("accessToken");
    var details = {
      accessToken: accessToken,
    };
    console.log(details);
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch("http://172.17.206.12:3000/findHotel", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    })
      .then((response) => response.json())
      .then(async (response) => {
        console.log(response)
        await SecureStore.setItemAsync("username", response.hotel.username);
        await SecureStore.setItemAsync("hotelName", response.hotel.hotelName);
        navigation.navigate("Profile");
      });
  };
  return (
    <SafeAreaView style={HomeStyles.safeArea}>
      {/* <StatusBar
        translucent={false}
        backgroundColor={Colors.white}
        barstyle="dark-content"
      /> */}
      
      <View style={HomeStyles.header}>
        <View>
          <Text style={{ color: Colors.greyHome }}></Text>
          <Text
            style={{ color: Colors.black, fontSize: 20, fontWeight: "bold" }}
          >Booking Details
          </Text>
        </View>
        <Pressable onPress={() => hotelProfile()}>
        <Image
          source={require("../../assets/images/app_icon/profile.jpg")}
          style={HomeStyles.profileImage}
        />
        </Pressable>
      </View>
      
        {/* <SearchBar />
        <Categories /> */}
        <TextInput
                style={HomeStyles.input}
                labelValue={fromDate}
                onChangeText={(fromDate) => setFromDate(fromDate)}
                placeholder="From Date"
        />
                <TextInput
                style={HomeStyles.input}
                labelValue={toDate}
                onChangeText={(toDate) => setToDate(toDate)}
                placeholder="To Date"
        />
      <Pressable
                style={[HomeStyles.button, HomeStyles.buttonClose]}
                onPress={() => handleSubmit()}
              >
                <Text style={HomeStyles.textStyle}>Confirm Locatoin</Text>
              </Pressable>
        <FlatList
          snapToInterval={width - 20}
          contentontainerStyle={HomeStyles.contentontainerStyle}
          showsHorizontalScrollIndicator={false}
          vertical={true}
          data={shops}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate("DetailedPage", item)}
            >
              <Card item={item} />
            </Pressable>
          )}
        />
    </SafeAreaView>
  );
};

export default Home;
