import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    quickstart: {
        color: "#0000FF",
        marginTop: 20,
        marginLeft: 20,
        flexDirection: "row",

        // justifyContent: "center"
    }, button: {
        marginTop: 80,
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
        flexDirection:"row",
    },

    SubmitButtonStyle: {

        // marginTop:10,
        paddingTop: 5,
        paddingBottom: 10,
        marginTop: 10,
        marginLeft: 40,
        // marginRight: 40,
        backgroundColor: '#E3EEF7',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000'
    },
    SubmitButtonStyleShade: {

        // marginTop:10,
        paddingTop: 5,
        paddingBottom: 10,
        marginTop: 10,
        marginLeft: 40,
        // marginRight: 40,
        backgroundColor: '#22304A',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000'
    },
    

    TextStyle: {
        textAlign:"center",
        color: '#000',
        paddingHorizontal:5
    },
    TextStyleS: {
        textAlign:"center",
        color: '#FFF',
        paddingHorizontal:5
    },
    TextStyle1:{
        paddingLeft:20
    }

})
export default styles;