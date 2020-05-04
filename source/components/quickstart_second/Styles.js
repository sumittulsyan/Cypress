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
        fontSize: 31,
        marginTop: 20,
        marginLeft: 30,
        color: "#22304A",
    },
    text2: {
        fontSize: 20,
        marginLeft: 30,
        marginTop: 16,
        marginBottom:20,
        color:"#22304A",
        letterSpacing:.5
    },
    MainContainer: {
        flexDirection:"row",
        justifyContent:"flex-start"
    },

    SubmitButtonStyle: {
        paddingVertical:10,
        marginTop: 12,
        marginLeft: 30,
        backgroundColor: '#E3EEF7',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#798291',
    },
    SubmitButtonStyleRight:{
        paddingVertical:10,
        marginTop: 12,
        marginLeft: 10,
        backgroundColor: '#E3EEF7',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#798291',
    },
    SubmitButtonStyleShade: {

        // marginTop:10,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 12,
        marginLeft: 30,
        // marginRight: 40,
        backgroundColor: '#22304A',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000'
    },
    SubmitButtonStyleShadeRight: {

        // marginTop:10,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 12,
        marginLeft: 10,
        // marginRight: 40,
        backgroundColor: '#22304A',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000'
    },
    

    TextStyle: {
        textAlign:"center",
        color: '#798291',
        paddingHorizontal:20,
        fontSize:16
    },
    TextStyleS: {
        textAlign:"center",
        color: '#FFF',
        paddingHorizontal:20,
        fontSize:16
    },
    TextStyle1:{
        paddingLeft:20
    }

})
export default styles;