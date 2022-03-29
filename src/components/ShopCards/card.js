import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ShopCardsStyle from './ShopCardsStyle';
import Colors from '../../assets/colors/colors';
import { ScrollView, TextInput } from 'react-native-gesture-handler';


export default function Cards(booking){

 
    return(
    
      <View style={ShopCardsStyle.card}> 
          <Image source={booking.item.image} style={ShopCardsStyle.cardImage}/>
          <View style={ShopCardsStyle.CardTextView}> 
          <Text style={ShopCardsStyle.CardTextTitle}> {booking.item.bookingName} </Text>
          <View style={{flexDirection :'row'}}>

          <Text style={ShopCardsStyle.CardTextRating}> {booking.item.hotelName} </Text>
          <FontAwesome name='star' size={20} color= {Colors.blueHome}/>
          </View>
          </View>
          <Text style={ShopCardsStyle.CardTextLocation}>No of Guests:{booking.item.guests}</Text>
      </View>
        
    )   

}