import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import CategoriesStyle from './CategoriesStyle';
import { ScrollView } from 'react-native-gesture-handler';


export default function Categories(){
    const [selectedCategoryIndex,setSelectedcategoryIndex] = React.useState(0 );
    const CategoryList = ['Popular','Recomended','Nearest']
    return(
        <ScrollView>
        <View style= {CategoriesStyle.categoryListContainer}>
        {CategoryList.map((category, index) => {
            return(
            <Pressable key={index} onPress={()=>setSelectedcategoryIndex(index)}>
               <Text style={[CategoriesStyle.TextStyle,(index == selectedCategoryIndex && CategoriesStyle.ActiveCategoryList)]}> {category}</Text>     
            </Pressable>
            );
            
            })}
        </View>
        </ScrollView>
    )   
}