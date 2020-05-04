import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    screenlayout: {
      // paddingLeft: 20,
      // paddingRight: 20,
      marginTop: 40,
    },
    header: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
       paddingLeft: 15,
      paddingRight: 15,
    },
    headertxt: {
      fontWeight: 'bold',
      fontSize: 20,
      color:"#22304A"
    },
    secondheadertxt: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 30,
    },
    headericon: {},
    phoneno: {
       marginLeft: 15,
      marginRight: 15,
      borderTopColor:"#AFB8C4",
      borderLeftColor:"#E3EEF7",
      borderRightColor:"#E3EEF7",
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
      // paddingBottom: 10,
      color: '#E3EEF7',
    },
    container:{
      marginRight:20,
      marginTop:10,
      justifyContent:"center",
      // width:320,
      borderRadius:2,
      width:"100%",
      height:190
      // marginHorizontal:100
  },
  
    template: {
      width: "100%",
      flex:1,
      justifyContent: 'center',
      marginRight: 15,
      marginLeft:15
    },
    templatelast:{
      width: "100%",
      flex:1,
      justifyContent: 'center',
      marginRight: 15,
      
    },
    templateimg: {
      marginTop: 10,
      height: 190,
      width: "100%",
    },
    templatetxt: {
      textAlign: 'center',
    },
    SubmitButtonStyle1: {
      flex:1,
      alignItems:"center",
      height:50,
      width:"100%",
      flexDirection: 'row',
      justifyContent: 'space-between',
      //  marginTop:10,
      marginTop: 5,
      backgroundColor: '#fff',
      borderRadius: 5,
    },
  });
  export default styles;