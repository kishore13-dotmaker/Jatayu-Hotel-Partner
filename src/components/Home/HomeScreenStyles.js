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
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})

export default HomeStyles;