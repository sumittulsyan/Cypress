import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    reform: {
        paddingTop:40,
        alignSelf: 'stretch',
        backgroundColor:"#d2daed",
        flex:1

    },
    textPress:{
        color:"black"
    },
    textt:{
        color:"white"
    },
    toggle: {
        flexDirection: "row",
        justifyContent: "center"
    },
    toggletxt: {
        marginHorizontal: 10, borderBottomColor: "#000000",
        borderBottomWidth: 1,
    },

    header: {
        alignSelf: "center",

        fontSize: 24,
        color: "#000000",
        paddingBottom: 10,
        borderBottomColor: 1,
    },
    subheader: {

        alignSelf: "center",
    },
    subheader1: {
        alignSelf: "center",
        paddingBottom: 40
    },
    searchIcon: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    phoneno: {
        borderColor: "#000000",
        borderWidth: 1, height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dddddd',
        marginTop: 20,
        marginVertical: 10,
        marginLeft:60,
        marginRight:60
    },
    password: {
        borderColor: "#000000",
        borderWidth: 1,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dddddd',
        marginBottom: 180,
        marginLeft:60,
        marginRight:60
    },
    setpassword: {
        borderColor: "#000000",
        borderWidth: 1,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dddddd',
        marginTop: 10,
        marginLeft:60,
        marginRight:60
    },
    otpset: {
        flexDirection: "row",
        alignSelf: "stretch",
        marginLeft:60,
        marginRight:60

    },
    otp: {

        flex: 1,
        borderColor: "#000000",
        borderWidth: 1,
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#dddddd', 
        // marginLeft:60,
        // marginRight:60

    },
    otptextinput: {

    },
    textinput: {
        justifyContent:"flex-start",
        flex: 1,
        alignSelf: 'stretch',
        paddingBottom: 10,
        color: "#000",

    },
    otpverify: {
        marginLeft: 10,
        // flex:1,
        alignSelf: "stretch",
        padding: 10, alignItems: "center",
        backgroundColor: "#f5bd1f",
        
    },
    margintothebottom: {
        marginBottom: 80
    },
    button: {
        alignSelf: "stretch",
        alignItems: "center",
        padding: 10,

        backgroundColor: "#f5bd1f"
        , marginLeft:60,
        marginRight:60
    },
    btntext: {
        color: "#fff",
        fontWeight: "bold",

    },
    footer: {
        marginTop: 20,
        textAlign: "center"
    },
    footericon: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 10
    },
    icon: {
        padding: 5
    }
});
export default styles;
