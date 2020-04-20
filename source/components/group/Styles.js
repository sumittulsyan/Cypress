import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    screenlayout: {
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 40,
    },
    header: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
    },
    circularcontainer: {
      height: 50,
      width: 50,
      backgroundColor: '#000',
      borderWidth: 0.5,
      borderColor: '#FFFFFF',
      borderRadius: 25,
    },
    circularcontainer1: {
      height: 30,
      width: 30,
      backgroundColor: '#000',
      borderWidth: 0.5,
      borderColor: '#FFFFFF',
      borderRadius: 25,
    },
    headertxt: {
      fontWeight: 'bold',
      fontSize: 22,
    },
    secondheadertxt: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 30,
    },
    headericon: {},
    SubmitButtonStyle: {
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      paddingTop: 5,
      paddingBottom: 5,
      marginRight: 8,
      backgroundColor: '#FFFFFF',
      borderRadius: 2,
    },
    phoneno: {
      //flex:1,
      borderColor: '#000000',
      borderWidth: 1,
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E3EEF7',
      marginTop: 50,
      marginVertical: 10,
      borderRadius: 10,
    },
    searchIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    textinput: {
      flex: 1,
      alignSelf: 'stretch',
      color: '#00FFFF',
    },
    container: {
      marginRight: 20,
      marginTop: 10,
      justifyContent: 'center',
      // width:320,
      borderRadius: 2,
      width: 320,
      height: 140,
      // marginHorizontal:100
    },
    globaltxt: {
      marginTop: 20,
      marginBottom: 10,
      fontSize: 18,
      fontWeight: 'bold',
    },
  
    template: {
        flex:1,
      flexDirection: 'column',
      width: "100%",
      justifyContent: 'center',
      marginRight: 8,
    },
    templateimg: {
      marginTop: 10,
      height: 80,
      width: "100%",
      borderRadius: 5,
    },
    templatetxt: {
      textAlign: 'center',
    },
    TextStyle: {
      textAlign: 'center',
      color: '#000',
      paddingHorizontal: 4,
      fontSize: 10,
    },
  });
  export default styles;