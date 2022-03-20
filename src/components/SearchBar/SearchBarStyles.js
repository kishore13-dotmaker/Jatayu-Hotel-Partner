import {StyleSheet } from 'react-native';
import Colors from '../../assets/colors/colors';

const SearchBarStyles = StyleSheet.create({
    HomeSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
},
inputContainer:{
    height: 50,
    backgroundColor: Colors.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10
},
sortBtn: {
    backgroundColor: Colors.black,
    height:50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,

}
})

export default SearchBarStyles;