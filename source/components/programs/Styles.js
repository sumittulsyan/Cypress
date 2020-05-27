import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    screenlayout: {
      paddingLeft: 15,
      paddingRight: 15,
      marginTop: 40,
    },
    phoneno: {
      borderTopColor:"#AFB8C4",
      borderLeftColor:"#E3EEF7",
      borderRightColor:"#E3EEF7",
      borderBottomColor:"#fff",
      borderWidth: 1, 
      height: 40,
      flexDirection: 'row',
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#E3EEF7',
      marginTop: 16,
      marginVertical: 10,
      borderRadius: 10,
      marginBottom:12
  },
    header: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
    },
    headertxt: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingLeft: 5,
      // paddingBottom:5
      marginBottom: 5,
      color:"#22304A"
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
      color: '#000000',
    },
    findprogram: {
      marginTop: 8,
    },
    findprogramtxt:{
      fontSize:15,
      color:"#22304A",
      fontWeight:"400"
    },
    template: {
      width: "38%",
      justifyContent: 'center',
      marginRight: 8,
    },
    templateimg: {
      marginTop: 10,
      height: 110,
      width: "100%",
      borderRadius: 5,
    },
    templatetxt: {
      textAlign: 'center',
    },
  });
  export default styles;