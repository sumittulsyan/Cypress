import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    screenlayout: {
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 30,
    },
    trainerhearder: {
      paddingLeft: 5,
      paddingTop: 5,
      fontSize: 20,
    },
    followsuggestiontxt: {
      borderBottomWidth: 2,
      borderBottomColor: '#000',
    },
    followsuggestionheader: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    imagecontainer: {
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      overflow: 'hidden',
      borderWidth: 3,
      borderColor: 'white',
    },
    userrow: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    usertext: {
      marginTop: 10,
      marginLeft: 5,
    },
    followcontainer: {},
    SubmitButtonStyle: {
      flexDirection: 'row',
      // marginTop:10,
      paddingTop: 5,
      paddingBottom: 10,
      marginTop: 10,
      marginLeft: 40,
      // marginRight: 40,
      backgroundColor: 'white',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#FFF',
      elevation: 8,
    },
    TextStyle: {
      textAlign: 'center',
      color: '#000',
      paddingHorizontal: 2,
      fontWeight: 'bold',
    },
    template: {
        flex:1,
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
  });
  export default styles; 