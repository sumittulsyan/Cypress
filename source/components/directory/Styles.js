import {StyleSheet} from 'react-native';
const styles =StyleSheet.create({
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
      headertxt: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 5,
      },
      phoneno: {
        borderTopColor:"#AFB8C4",
        borderLeftColor:"#E3EEF7",
        borderRightColor:"#E3EEF7",
        borderBottomColor:"#fff",
        borderWidth: 1, 
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#E3EEF7',
        marginTop: 16,
        borderRadius: 10,
    },
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
      userrow: {
        marginTop: 20,
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
        marginTop: 10,
        marginLeft: 5,
      },
      userheading:{
        fontSize:16,
        color:"#22304A"
      },
      usersubheading:{
        fontSize:16,
        color:"#8391A1"
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
        textAlign: 'center',
        color: '#09152D',
        paddingHorizontal: 10,
        fontWeight: 'bold',
      },
})
export default styles;