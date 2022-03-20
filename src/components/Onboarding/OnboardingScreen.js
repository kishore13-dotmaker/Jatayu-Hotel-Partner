import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import OnboardingStyles from './OnboardingStyles';
import OnboardingData from './OnboardingData';

const Onboarding = (props) => {
  
  const renderItem = ({item}) => {
    return (
      <View style={OnboardingStyles.slide}>
        <Image source={item.image} style={OnboardingStyles.image} />
        <View>
          <Text style={OnboardingStyles.title}>{item.title}</Text>
          <Text style={OnboardingStyles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderNextButton = () => {
    return (
      <View style={OnboardingStyles.rightTextWrapper}>
        <Text style={OnboardingStyles.rightText}>Next</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <TouchableOpacity
        style={OnboardingStyles.button}
        // onPress={() => props.navigation.navigate('Home')}
        onPress={() => props.navigation.reset({
            index:0,
            routes: [{name: 'Login'}]
          })
        }
      >
      <View style={OnboardingStyles.doneButtonWrapper}>
       <Text style={OnboardingStyles.doneButtonText}>Done</Text>
      </View>
      </TouchableOpacity>
    );
  };

  const renderPrevButton = () => {
    return (
      <View style={OnboardingStyles.leftTextWrapper}>
        <Text style={OnboardingStyles.leftText}>Back</Text>
      </View>
    );
  };

  const handleDone = () => {
    props.handleDone();
  };

    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={OnboardingData}
          dotStyle={OnboardingStyles.dotStyle}
          activeDotStyle={OnboardingStyles.activeDotStyle}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          showPrevButton
          onDone={handleDone}
        />
      </View>
    );

};

export default Onboarding;