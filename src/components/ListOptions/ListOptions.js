import React from 'react';
import {View, Image, Text} from 'react-native';
import ListOptionsStyles from './ListOptionsStyles';


export default function ListOptions(){
    const  optionsList =[
        {title: 'Buy a Phone', img: require('../../assets/images/sample_icons/buyphone.png')},
        {title: 'Repair a Phone', img: require('../../assets/images/sample_icons/repairphone.png')},
        
    ]; 
    return(
        <View style= {ListOptionsStyles.ListContainer}>
            {optionsList.map((option, index) => {
                return(
                    <View style= {ListOptionsStyles.OptionCard} key={index} >
                    <Image source={option.img} style ={ListOptionsStyles.OptionCardImage}/>
                    <Text style={ListOptionsStyles.CardTextStyle}>{option.title}</Text> 
                    </View>      
                );
            })}
        </View>
    )
   
}