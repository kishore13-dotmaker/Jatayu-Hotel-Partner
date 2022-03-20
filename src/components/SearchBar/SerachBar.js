import React from 'react';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../../assets/colors/colors';
import SearchBarStyles from './SearchBarStyles';


export default function SearchBar(){
    return (
        <View style={SearchBarStyles.HomeSearch}> 
                <View style={SearchBarStyles.inputContainer}>
                <FontAwesome name={'search'} size= {25} color= {Colors.greyHome} />
                <TextInput placeholder=' Search Model, Brand, City'/>
                </View>
                
                <View style={SearchBarStyles.sortBtn}>
                <MaterialIcons name='tune' size= {25} color= {Colors.white} />
                </View>
                </View>
    )
}