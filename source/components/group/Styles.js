import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    screenlayout: {
      paddingLeft: 15,
      paddingRight: 15,
      marginTop: 40,
    },
    header: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
    },
    circularcontainer: {
      height: 36,
      width: 36,
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
      fontWeight: "bold",
      fontSize: 20,
      color:"#22304A"

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
      backgroundColor: '#FFFFFF',
      borderRadius: 2,
    },
    phoneno: {
      borderColor:"#AFB8C4",
      borderRightColor:"#fff",
      borderBottomColor:"#fff",
      borderWidth: 1, 
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E3EEF7',
      marginTop: 16,
      marginVertical: 10,
      borderRadius: 10,
      marginBottom:35
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
      marginTop: 40,
      marginBottom: 10,
      fontSize: 16,
      fontWeight: "600",
      color:"#22304A"
    },
  
    template: {
        flex:1,
      flexDirection: 'column',
      width: "100%",
      justifyContent: 'center',
      marginRight: 15,
    },
    templatelast: {
      flex:1,
    flexDirection: 'column',
    width: "100%",
    justifyContent: 'center',
  },
    templateimg: {
      marginTop: 10,
      height: 100,
      width: "100%",
      borderRadius: 5,
    },
    templatetxt: {
      textAlign: 'center',
    },
    TextStyle: {
      textAlign: 'center',
      color: '#A4A9B2',
      paddingHorizontal: 4,
      fontSize: 16,
      fontWeight:"bold"
    },
  });
  export default styles;