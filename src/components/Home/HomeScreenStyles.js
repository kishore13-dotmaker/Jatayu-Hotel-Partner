import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors/colors';

const HomeStyles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    safeArea: {
        backgroundColor:Colors.white,
        flex: 1
    },
    profileImage: {
        height:50,
        width: 50,
        borderRadius: 25,
    },
    contentontainerStyle:{
        paddingLeft: 20,
        paddingVertical: 20
    }
})

export default HomeStyles;