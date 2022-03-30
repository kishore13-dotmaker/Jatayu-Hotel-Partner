import React, {useState} from 'react';
import Home from './src/components/Home/HomeScreen';
import LoginScreen from './src/components/Login/LoginScreen';
import SignUpScreen from './src/components/SignUp/SignupScreen';
import ForgotPasswordScreen from './src/components/ForgotPassword/ForgotPasswordScreen';
import DetailedPage from './src/components/DetailedPage/DetailedPage'
import Onboarding from './src/components/Onboarding/OnboardingScreen';
import StripePayment from './src/components/StripePayment/Payment';
import Profile from './src/components/UserProfile/Profile'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import RegisterRoom from './src/components/SignUp/RegisterRoom';
import RegisterRoomDeluxe from './src/components/SignUp/RegisterRoomDeluxe';
import RegisterRoomCouple from './src/components/SignUp/RegisterRoomCouple';
import RegisterRoomSuperDeluxe from './src/components/SignUp/RegisterRoomSuperDeluxe';
import RegisterRoomLuxury from './src/components/SignUp/RegisterRoomLuxury';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Routes from './src/Navigation/Routes';

const Stack = createNativeStackNavigator();

const App = () => {

  let [fontsLoaded] = useFonts({
    "openSans": require("./src/assets/fonts/OpenSans-Regular.ttf"),
    "openSansBold": require("./src/assets/fonts/OpenSans-Bold.ttf"),
    "openSansSemiBold": require("./src/assets/fonts/OpenSans-SemiBold.ttf")
  });

  const [showOnboard, setShowOnboard] = useState(true);


  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // return (
  //   <View style={{ flex: 1 }}>
  //     <Routes />
  //   </View>
  // );

  return (
  //   <>
  //   {showOnboard && <Onboarding handleDone={handleOnboardFinish} />}
  //   {!showOnboard && <Home />}
  // </>

  <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen 
      name="Onboarding"
      options={{headerShown: false}}
      >
      {(props) => <Onboarding  {...props} handleDone={handleOnboardFinish}/>}
      </Stack.Screen>
      
      <Stack.Screen 
      name="Home"
      component={Home}
      options={{headerShown: false}}
      />

      <Stack.Screen 
      name="Login"
      component={LoginScreen}
      />

      <Stack.Screen 
      name="SignUp"
      component={SignUpScreen}
      /> 

      <Stack.Screen 
      name="ForgotPassword"
      component={ForgotPasswordScreen}
      />

      <Stack.Screen 
      name="DetailedPage"
      component={DetailedPage}
      options={{headerShown: false}}
      />  
      <Stack.Screen 
      name="StripePayment"
      component={StripePayment}
      />
      <Stack.Screen 
      name="Profile"
      component={Profile}
      />
        <Stack.Screen 
      name="RegisterRoom"
      component={RegisterRoom}
      />
       <Stack.Screen 
      name="RegisterRoomCouple"
      component={RegisterRoomCouple}
      />
        <Stack.Screen 
      name="RegisterRoomDeluxe"
      component={RegisterRoomDeluxe}
      />
        <Stack.Screen 
      name="RegisterRoomSuperDeluxe"
      component={RegisterRoomSuperDeluxe}
      />
        <Stack.Screen 
      name="RegisterRoomLuxury"
      component={RegisterRoomLuxury}
      />
      
      
      

    </Stack.Navigator>
  </NavigationContainer>
  )
};

export default App;
