import {StyleSheet} from 'react-native';
const styles =StyleSheet.create({
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
      headertxt: {
        fontWeight: 'bold',
        fontSize: 22,
        paddingLeft: 5,
        // paddingBottom:5
        marginBottom: 5,
      },
      phoneno: {
        //  flex:1,
        borderColor: '#000000',
        borderWidth: 1,
        height: 40,
         flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 40,
        marginVertical: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
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
        paddingBottom: 10,
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
        borderColor: 'white',
      },
      usertext: {
        marginTop: 10,
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
})
export default styles;