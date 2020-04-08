import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    quickstart: {
        color: "#0000FF",
        marginTop: 20,
        marginLeft: 20,
        flexDirection: "row",

        // justifyContent: "center"
    }, button: {
        marginTop: 150,
        alignSelf: "stretch",
        alignItems: "center",
        padding: 10,

        backgroundColor: "#999900"
        , marginLeft: 40,
        marginRight: 40,
        borderRadius:10
    },
    btntext: {
        color: "#fff",
        fontWeight: "bold",

    },
    text1: {
        fontWeight: "bold",
        fontSize: 24,
        marginTop: 20,
        marginLeft: 40,
        color: "#000080"
    },
    text2: {
        fontSize: 18,
        marginLeft: 36,
        marginTop: 16,
        //paddingTop:20
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    //   MainContainer1:{
    //     flex: 1,
    //     justifyContent: 'center',
    //     backgroundColor: '#F5FCFF',
    //   },

    SubmitButtonStyle: {

        // marginTop:10,
        paddingTop: 10,
        paddingBottom: 30,
        marginTop: 100,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#00BCD4',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000'
    },
    SubmitButtonStyle1: {

        // marginTop:10,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 90,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000'
    },
    SubmitButtonStyle2: {

        // marginTop:10,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000'
    },

    TextStyle: {
        color: '#fff',
        paddingLeft:20
    },
    TextStyle1:{
        paddingLeft:20
    }

});
 export default styles;