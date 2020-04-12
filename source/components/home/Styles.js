import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    screenlayout: {
        paddingLeft:20,
        paddingRight:20,
        marginTop: 40

    },
    header: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between"


    },
    headertxt: {
        fontWeight: "bold",
        fontSize: 22,

    },
    secondheadertxt: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop:30
        
    },
    headericon:
    {

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
    container:{
        marginRight:20,
        marginTop:10,
        justifyContent:"center",
        // width:320,
        borderRadius:2,
        width:"100%",
        height:140
        // marginHorizontal:100
    },
    findprogram:{
        //marginTop:200,
        //  flex:1,
          height:20,
        marginTop:10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    template:{
        flex:1,
        // width:90,
        justifyContent:"center",
        marginRight:8
    },
    templateimg:{
        marginTop:10,
        height:100,
        width:"100%",
        // width:70,
        borderRadius:5
    },
    templatetxt:{
        textAlign:"center"
    }


});
 export default styles;