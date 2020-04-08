import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    reform: {
        alignSelf: 'stretch',

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
        backgroundColor: '#fff',
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
        backgroundColor: '#fff',
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
        backgroundColor: '#fff',
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
        backgroundColor: '#fff', 
        // marginLeft:60,
        // marginRight:60

    },
    otptextinput: {

    },
    textinput: {
        flex: 1,
        alignSelf: 'stretch',
        paddingBottom: 10,
        color: "#00FFFF",

    },
    otpverify: {
        marginLeft: 10,
        // flex:1,
        alignSelf: "stretch",
        padding: 10, alignItems: "center",
        backgroundColor: "#999900",
        
    },
    margintothebottom: {
        marginBottom: 80
    },
    button: {
        alignSelf: "stretch",
        alignItems: "center",
        padding: 10,

        backgroundColor: "#999900"
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
