import {Dimensions, StyleSheet } from 'react-native';
import Colors from '../../assets/colors/colors';


const {width} = Dimensions.get('screen')

const ListOptionsStyles = StyleSheet.create({
    ListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    OptionCard:{
        height: 210,
        width: width/2-30,
        elevation: 10,
        backgroundColor: Colors.white,
        alignItems:'center',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingTop: 10

    },
    OptionCardImage:{
        height: 160,
        borderRadius: 10,
        width: '100%'

    },
    CardTextStyle:{
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ListOptionsStyles;