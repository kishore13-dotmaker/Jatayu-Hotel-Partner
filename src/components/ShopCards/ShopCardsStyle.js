import {Dimensions, StyleSheet } from 'react-native';
import Colors from '../../assets/colors/colors';


const {width} = Dimensions.get('screen')

const ShopCardsStyle = StyleSheet.create({
    card:{
        height: 250,
        backgroundColor: Colors.white,
        elevation: 10,
        width: width-40,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 10,
        padding: 15,
        borderRadius: 20

    },
    cardImage:{
        width: "100%",
        height: 150,
        borderRadius: 15,
    },
    CardTextView:{
        flexDirection :'row',
        justifyContent: 'space-between',
        marginTop:10
    },
    CardTextTitle:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    CardTextRating:{
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.blueHome
    },
    CardTextLocation:{
        fontSize: 14,
        marginTop:5,
        marginLeft:4,
        color: Colors.greyHome
    }


})

export default ShopCardsStyle;