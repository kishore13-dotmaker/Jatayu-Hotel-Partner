import React from "react";
import { Image } from "react-native";
import DetailsStyles from "./DetailedPageStyle";

export default function phoneImage({ image }) {
  return <Image source={image} style={DetailsStyles.phoneImage} />;
}
