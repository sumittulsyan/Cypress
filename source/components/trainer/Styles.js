import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    screenlayout: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 40

    },
    header: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between"


    },
    circularcontainer: {
        height: 50,
        width: 50,
        backgroundColor: "#FFFFFF",
        borderWidth: .5,
        borderColor: "#FFFFFF",
        borderRadius: 25
    },
    headertxt: {
        fontWeight: "bold",
        fontSize: 22,

    },
    secondheadertxt: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 30

    },
    headericon:
    {

    },
    SubmitButtonStyle: {
        justifyContent:"space-evenly",
flexDirection:"row",
        // marginTop:10,
        paddingTop: 5,
        paddingBottom: 10,
        marginTop: 10,
        marginLeft: 40,
        // marginRight: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000'
    },
    phoneno: {
        //flex:1,
        borderColor: "#000000",
        borderWidth: 1, height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 50,
        marginVertical: 10,
        borderRadius: 10
    },
    searchIcon: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
    },
    textinput: {
        flex: 1,
        alignSelf: 'stretch',
        paddingBottom: 10,
        color: "#00FFFF",

    },
    container: {
        marginRight: 20,
        marginTop: 10,
        justifyContent: "center",
        // width:320,
        borderRadius: 2,
        width: 320,
        height: 140
        // marginHorizontal:100
    },

    template: {
        width: 120,
        justifyContent: "center",
        marginRight: 8
    },
    templateimg: {
        marginTop: 10,
        height: 80,
        width: 110,
        borderRadius: 5
    },
    templatetxt: {
        textAlign: "center"
    }, SubmitButtonStyle1: {
        flexDirection: "row",
        justifyContent: "space-between",
        //  marginTop:10,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    TextStyle: {
        textAlign: "center",
        color: '#000',
        paddingHorizontal: 10
    },


});
export default styles;
