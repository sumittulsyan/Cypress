import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    reform: {
        paddingTop:40,
        alignSelf: 'stretch',
        backgroundColor:"#E3EEF7",
        flex:1

    },
    textPress:{
        color:"black",
        fontWeight:"bold"
        
    },
    textt:{
        color:"grey",
        fontWeight:"200"
    },
    toggle: {
        flexDirection: "row",
        justifyContent: "center"
    },
    toggletxt: {
        marginHorizontal: 15, borderBottomColor: "#000000",
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
        elevation:4,
        borderColor: "#000000",
        borderWidth: .5, height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3EEF7',
        marginTop: 20,
        marginVertical: 15,
        marginLeft:60,
        marginRight:60
    },
    password: {
        borderColor: "#000000",
        borderWidth: .5,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3EEF7',
        // marginBottom: 180,
        marginLeft:60,
        marginRight:60
    },
    setpassword: {
        borderColor: "#000000",
        borderWidth: .5,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3EEF7',
        marginTop: 10,
        marginLeft:60,
        marginRight:60,
        elevation:-4
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
        borderWidth: .5,
        height: 45,
        flexDirection: 'row',
        backgroundColor: '#E3EEF7',
    },
    otptextinput: {

    },
    textinput: {
        justifyContent:"flex-start",
        flex: 1,
        alignSelf: 'stretch',
        color: "#000",
    },
    otpverify: {
        marginLeft: 10,
        // flex:1,
        alignSelf: "stretch",
        padding: 10, alignItems: "center",
        backgroundColor: "#F18F49",
        justifyContent:"center"
        
    },
    margintothebottom: {
        marginBottom: 80
    },
    button: {
        height:45,
        alignSelf: "stretch",
        alignItems: "center",
        padding: 10,

        backgroundColor: "#F18F49"
        , marginLeft:60,
        marginRight:60,
        justifyContent:"center"
    },
    btntext: {
        
        textAlign:"center",
        color: "#fff",
        fontWeight: "bold",
        fontSize:16,
        letterSpacing:1

    },
    footer: {
        letterSpacing:1,
        marginTop: 20,
        textAlign: "center"
    },
    footericon: {
        backgroundColor:"#E3EEF7",
        elevation:4,
        flexDirection: "row",
        justifyContent: "center",
        padding: 10
    },
    icon: {
        padding: 5,
        paddingHorizontal:15
    },
    fotter:{justifyContent: 'flex-end',flex:1,paddingBottom:40}
});
export default styles;
