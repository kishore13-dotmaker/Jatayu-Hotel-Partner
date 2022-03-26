import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import ActionButton from 'react-native-action-button';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Colors from "../../assets/colors/colors";
import HomeStyles from "./HomeScreenStyles";
import SearchBar from "../SearchBar/SerachBar";
import ListOptions from "../ListOptions/ListOptions";
import Categories from "../Categories/Categories";
import Card from "../ShopCards/card";
import shops from "../consts/shops";


const { width } = Dimensions.get("screen");

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      dataSource: [],
      checkin: "",
      checkout: "",
    };
  }
  async componentDidMount() {
    
    const accessToken = await SecureStore.getItemAsync("accessToken");
    var details = {
      accessToken: accessToken,
    };
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);

    }
    formBody = formBody.join("&");
    const postResponse = fetch("http://172.19.17.164:3000/findBookings", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.foundBookings,
        });
      });
  }
  renderItem = ({item}) => (
    <TouchableOpacity onPress={() => {}}>
    <View style={BookingHistoryStyles.contentontainerStyle}>
      <Text>{item.checkIn}</Text>
      <Text>{item.checkOut}</Text>
      </View>
    </TouchableOpacity>
    
  );
  render() {
    if (this.state.isLoading) {
      return (
        <View style={BookingHistoryStyles.container}>
          <ActivityIndicator size="large" animating />
        </View>
      );
    } else {
      return (
    <SafeAreaView style={HomeStyles.safeArea}>
      <StatusBar
        translucent={false}
        backgroundColor={Colors.white}
        barstyle="dark-content"
      />
      
      <View style={HomeStyles.header}>
        <View>
          <Text style={{ color: Colors.greyHome }}>Location</Text>
          <Text
            style={{ color: Colors.black, fontSize: 20, fontWeight: "bold" }}
          >
            Chennai
          </Text>
        </View>
        <Pressable onPress={() => navigation.navigate('ProfileScreen')}>
        <Image
          source={require("../../assets/images/app_icon/profile.jpg")}
          style={HomeStyles.profileImage}
        />
        </Pressable>
      </View>
      
        <SearchBar />
        <Categories />

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
        <View style={BookingHistoryStyles.container}>
          <FlatList
        snapToInterval={width - 20}
        contentontainerStyle={BookingHistoryStyles.contentontainerStyle}
        showsHorizontalScrollIndicator={false}
        vertical={true}
        data={this.state.dataSource}
        renderItem={this.renderItem}                                                                                                                                                                                                     
        keyExtractor={(item,index) => index}      
        />
        </View>
    </SafeAreaView>
  );
}

  }
};

