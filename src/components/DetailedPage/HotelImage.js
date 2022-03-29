import React from "react";
import { Image } from "react-native";
import DetailsStyles from "./DetailedPageStyle";

export default function HotelImage({ image }) {
  return <Image source={image} style={DetailsStyles.hotelImage} />;
}
