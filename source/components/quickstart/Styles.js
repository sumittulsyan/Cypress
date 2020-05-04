import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    quickstart: {
        color: "#0000FF",
        marginTop: 20,
        marginLeft: 15,
        flexDirection: "row",
        alignItems:"center"
        // justifyContent: "center"
    }, button: {
        marginTop: 150,
        alignSelf: "stretch",
        alignItems: "center",
        padding: 10,

        backgroundColor: "#F18F49"
        , marginLeft: 40,
        marginRight: 40,
        borderRadius:10
    },
    btntext: {
        color: "#fff",
        fontWeight: "normal",
        fontSize:16

    },
    text1: {
        fontWeight: "bold",
        fontSize: 30,
        marginTop: 20,
        marginLeft: 30,
        color: "#22304A"
    },
    text2: {
        fontSize: 20,
        marginLeft: 30,
        marginTop: 16,
        color:"#22304A"
        //paddingTop:20
    },
    MainContainer: {
        // flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },

    SubmitButtonStyle: {

        // marginTop:10,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 90,
        marginLeft: 30,
        marginRight: 30,
          backgroundColor: '#22304A',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000'
    },
    SubmitButtonStyle1: {

        // marginTop:10,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#E3EEF7',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#798291'
    },
    SubmitButtonStyle2: {

        // marginTop:10,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#E3EEF7',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#798291'
    },

    TextStyle: {
         color: "#FFF",
         paddingLeft:20,
         fontSize:16
    },
    TextStyle1:{
        paddingLeft:20,
        color:"#798291",
        fontSize:16
        // color:"red"
    },
    fotter:{
        justifyContent:"flex-end",
        flex:1,
        paddingBottom:34
    }

});
 export default styles;