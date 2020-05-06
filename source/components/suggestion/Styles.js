import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    screenlayout: {
      paddingLeft: 15,
      paddingRight: 15,
      marginTop: 30,
    },
    trainerhearder: {
      color:"#22304A",
      fontSize: 20,
      fontWeight:"bold"
    },
    followsuggestiontxt: {
      borderBottomWidth: 2,
      borderBottomColor: '#000',
    },
    followsuggestionheader: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingHorizontal:60
    },
    imagecontainer: {
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      overflow: 'hidden',
      borderWidth: 3,
      borderColor: '#E3EEF7',
    },
    userrow: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:"center"
    },
    usertext: {
      marginTop: 10,
      marginLeft: 5,
    },
    userheading:{
    fontSize:16,
    fontWeight:"500",
    color:"#22304A"
    },
    usersubheading:{
      fontSize:14,
      fontWeight:"normal",
      color:"#8391A1"
    },
    followcontainer: {
    },
    SubmitButtonStyle: {
      flexDirection: 'row',
      paddingTop: 6,
      paddingBottom: 6,
      marginTop: 10,
      paddingHorizontal:10,
      backgroundColor: 'white',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#FFF',
      elevation: 8,
      shadowColor: '#000',
    shadowOffset: {width: 0, height: 1.2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    },
    TextStyle: {
      fontSize:15,
      textAlign: 'center',
      color: '#09152D',
      paddingHorizontal: 2,
      fontWeight: '400',
    },
    template: {
        flex:1,
      width: "100%",
      justifyContent: 'center',
      marginRight: 8,
    },
    templatelast: {
      flex:1,
    width: "100%",
    justifyContent: 'center',
  },
    templateimg: {
      marginTop: 10,
      height: 114,
      width: "100%",
      borderRadius: 5,
    },
    textPress: {
      color: 'black',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    textt: {
      color: 'grey',
      fontWeight: '200',
    },
    toggle: {
      marginBottom: 40,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    toggletxtactive: {
      marginHorizontal: 15,
      borderBottomColor: '#000000',
      paddingBottom: 4,
      borderBottomWidth: 2,
    },
    toggletxtinactive: {
      marginHorizontal: 15,
      borderBottomColor: '#E3EEF7',
      paddingBottom: 4,
      borderBottomWidth: 2,
    },
  
    toggletxtact: {
      marginHorizontal: 15,
      borderBottomColor: '#E3EEF7',
      paddingBottom: 4,
      borderBottomWidth: 2,
    },
    toggletxtinact: {
      marginHorizontal: 15,
      borderBottomColor: '#000',
      paddingBottom: 4,
      borderBottomWidth: 2,
    },
  });
  export default styles; 