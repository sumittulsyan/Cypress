import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    screenlayout: {
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 40,
    },
    phoneno: {
      //  flex:1,
      borderColor: '#000000',
      borderWidth: 1,
      height: 40,
       flexDirection: 'row',
      backgroundColor: '#fff',
      marginTop: 40,
      marginVertical: 5,
      borderRadius: 10,
      paddingHorizontal: 10,
    },
    header: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
    },
    headertxt: {
      fontWeight: 'bold',
      fontSize: 22,
      paddingLeft: 5,
      // paddingBottom:5
      marginBottom: 5,
    },
    secondheadertxt: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 30,
    },
    headericon: {},
  
    searchIcon: {
      // justifyContent: 'center',
      // alignItems: 'center',
      paddingHorizontal: 10,
      paddingTop:10
    },
    textinput: {
      // flex: 1,
      alignSelf: 'stretch',
      paddingBottom: 10,
      color: '#000000',
    },
    findprogram: {
      marginTop: 10,
    },
    template: {
      width: 120,
      justifyContent: 'center',
      marginRight: 8,
    },
    templateimg: {
      marginTop: 10,
      height: 100,
      width: 110,
      borderRadius: 5,
    },
    templatetxt: {
      textAlign: 'center',
    },
  });
  export default styles;