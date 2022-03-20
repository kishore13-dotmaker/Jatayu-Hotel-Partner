import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../assets/colors/colors";
import HomeStyles from "./HomeScreenStyles";
import SearchBar from "../SearchBar/SerachBar";
import ListOptions from "../ListOptions/ListOptions";
import Categories from "../Categories/Categories";
import Card from "../ShopCards/card";
import shops from "../consts/shops";


const { width } = Dimensions.get("screen");

const Home = ({ navigation }) => {

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
      
    </SafeAreaView>
  );
};

export default Home;
