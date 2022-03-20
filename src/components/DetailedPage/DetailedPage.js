import React from "react";
import { SafeAreaView, View, Text, FlatList, Dimensions } from "react-native";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import DetailsStyles from "./DetailedPageStyle";
import { StatusBar } from "expo-status-bar";
import Colors from "../../assets/colors/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import PhoneImage from "./PhoneImage";
import FormButton from '../Buttons/FormButton';


const { width } = Dimensions.get("screen");

const DetailedPage = ({ navigation, route }) => {
  const item = route.params;
  return (
    <SafeAreaView style={DetailsStyles.SafeAreaView}>
      <ScrollView>
        <StatusBar
          translucent={false}
          backgroundColor={Colors.white}
          barstyle="dark-content"
        />
        <View style={DetailsStyles.ImageContainer}>
          <ImageBackground
            style={DetailsStyles.ImageBackground}
            source={item.img}
          >
            <View style={DetailsStyles.header}>
            <TouchableOpacity onPress={navigation.goBack}>

              <View style={DetailsStyles.headerBtn} >
                <FontAwesome
                  name={"chevron-left"}
                  size={20}
                  color={Colors.black}
                />
              </View>
            </TouchableOpacity>
              <View style={DetailsStyles.headerBtn}>
                <FontAwesome
                  name={"heart"}
                  size={20}
                  color={Colors.red}
                  onPress={navigation.goBack}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={DetailsStyles.DetailsContainer}>
          <View style={DetailsStyles.title}>
            <Text style={DetailsStyles.titleText}>{item.title}</Text>
          </View>
          <Text style={DetailsStyles.locationText}>{item.location}</Text>
          <Text style={DetailsStyles.detailsText}>{item.details}</Text>
          <FlatList
            snapToInterval={width - 20}
            keyExtractor={(_, key) => key.toString()}
            contentContainerStyle={{ marginTop: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={item.phoneImage}
            renderItem={({ item }) => <PhoneImage image={item} />}
          />
          <View style={DetailsStyles.footer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={DetailsStyles.footerText}>{item.rating}</Text>
              <FontAwesome
                name="star"
                size={21}
                color={Colors.blueHome}
                style={{ marginLeft: 10 }}
              />
            </View>
            <View style={DetailsStyles.bookNow}>
              <Text style={{ color: Colors.white }}>Schedule Now</Text>
            </View>
          </View>
        </View>
        <FormButton
        buttonTitle="Checkout"
        onPress={() => navigation.navigate('StripePayment')}
      />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailedPage;
