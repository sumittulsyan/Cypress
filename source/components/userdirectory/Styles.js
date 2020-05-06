import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    screenlayout: {
      paddingLeft: 15,
      paddingRight: 15,
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
      borderColor: '#E3EEF7',
    },
    usertext: {
      marginTop: 0,
      marginLeft: 5,
    },
    SubmitButtonStyle: {
      flexDirection: 'row',
      paddingTop: 6,
      paddingBottom: 6,
      marginTop: 10,
      paddingHorizontal:15,
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
    },
    followsuggestionheader: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginHorizontal:60
    },
    followsuggestiontxt: {
      borderBottomWidth: 2,
      borderBottomColor: '#000',
    },
    circularcontainer: {
      height: 36,
      width: 36,
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
    ,marginTop: 10,
    marginBottom:10
  },
  imagerow:{
      flexDirection:"row"
  },
  eachimagerow:{
      height: 100,
      width: '100%',
      justifyContent: 'center',
       flex:1,
       marginHorizontal:5
      //marginRight:10
      // height:Dimensions.get('screen').height
    }
  ,
  textPress: {
    color: 'black',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  textt: {
    color: 'grey',
    fontWeight: 'normal',
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