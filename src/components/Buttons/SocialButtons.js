import React from "react";
import { View } from "react-native";
import { FacebookSocialButton, GoogleSocialButton} from "react-native-social-buttons";
 

export default function SocialButton(options) {


      return (
          <View>
        <FacebookSocialButton 
        onPress={() => {}} 
        buttonViewStyle={options.facebookButtonViewStyle} 
        logoStyle={options.facebookLogoStyle} 
        textStyle={options.facebookTextStyle}
        buttonText = { options.screen ==='signup' ? options.facebookButtonText : undefined}

        />
      <GoogleSocialButton 
      onPress={() => {}} 
      buttonViewStyle={options.googleButtonViewStyle} 
      logoStyle={options.googleLogoStyle} 
      textStyle={options.googleTextStyle}
      buttonText = { options.screen ==='signup' ? options.googleButtonText : undefined}
       />
    </View>
    );
  }
