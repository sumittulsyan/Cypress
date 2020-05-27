import { StyleSheet} from 'react-native';
const styles=StyleSheet.create({
    screenlayout: {
     
      marginTop: 40,
    },
    header: {
      paddingLeft: 12,
      paddingRight: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent:"center",
      alignItems:"center",
      marginBottom:20
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
    phoneno: {
      //flex:1,
      borderColor: '#000000',
      borderWidth: 1,
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
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
      paddingBottom: 10,
      color: '#00FFFF',
    },
    container: {
      justifyContent: 'center',
      borderRadius: 2,
      width: "100%",
      height: 220,
    },
    findprogram: {
      marginHorizontal:12,
      marginTop: 15,
      marginBottom:12
    },
    findprogramtxt:{
      fontSize:16,
      color:"#22304A",
      fontWeight:"normal"
    },
    findprogramsubtxt:{
      paddingVertical:.5,
      fontSize:16,
      color:"#9EA2AC",
      fontWeight:"500"
    },
    template: {
      width: 97,
      justifyContent: 'center',
      // marginRight: 8,
    },
    templateimg: {
      marginTop: 10,
      height: 100,
      width: "100%",
      borderRadius: 5,
      justifyContent:"center",
      alignItems:"center"
    },
    templatetxt: {
      textAlign: 'center',
    },
    videoPlayer:{
      height:36,
      width:36,
      borderRadius:36/2,
      backgroundColor:"white",
      justifyContent:"center",
      alignItems:"center"
    },
    triangle:{
      width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderBottomWidth: 14,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    transform: [
      {rotate: '90deg'}
    ]
    }
  });
  export default styles;