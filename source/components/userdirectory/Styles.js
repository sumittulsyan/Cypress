import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    screenlayout: {
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 40,
    },
    userrow: {
      marginTop: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    imagecontainer: {
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      overflow: 'hidden',
      borderWidth: 3,
      borderColor: 'white',
    },
    usertext: {
      marginTop: 0,
      marginLeft: 5,
    },
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
      paddingHorizontal: 10,
      fontWeight: 'bold',
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
    followsuggestionheader: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    followsuggestiontxt: {
      borderBottomWidth: 2,
      borderBottomColor: '#000',
    },
    circularcontainer: {
      height: 50,
      width: 50,
      backgroundColor: '#000',
      borderWidth: 0.5,
      borderColor: '#FFFFFF',
      borderRadius: 25,
    },
    workoutcard: {flexDirection: 'row', 
    justifyContent: 'space-between'
    ,marginTop:10,
    marginBottom:10
  },
  workoutcard1: {flexDirection: 'row', 
    justifyContent: 'space-between'
    ,marginTop:100,
    marginBottom:10
  },
  imagerow:{
      flex:1,
      flexDirection:"row"
  },
  eachimagerow:{
      height: 150,
      width: '100%',
      justifyContent: 'center',
      flex:1,
      marginRight:10
      // height:Dimensions.get('screen').height
    }
  
  ,
    postcontainer: {},
  });
  export default styles;