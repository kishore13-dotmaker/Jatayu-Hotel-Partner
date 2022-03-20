import {StyleSheet } from 'react-native';
import Colors from '../../assets/colors/colors';

const CategoriesStyle = StyleSheet.create({
    categoryListContainer:{
        marginTop: 40,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal: 40
    },
    TextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: Colors.greyHome
    },
    ActiveCategoryList:{
        color: Colors.black,
        borderBottomWidth: 1,
        paddingBottom: 5
    }
})

export default CategoriesStyle;