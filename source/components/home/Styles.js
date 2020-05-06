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
        fontSize: 20,
        color:"#22304A"

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
        borderTopColor:"#AFB8C4",
        borderLeftColor:"#E3EEF7",
        borderRightColor:"#E3EEF7",
        borderBottomColor:"#fff",
        borderWidth: 1, 
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3EEF7',
        marginTop: 16,
        marginVertical: 10,
        borderRadius: 10,
        marginBottom:35
    },
    searchIcon: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        color:"#22304A"
    },
    textinput: {
        flex: 1,
        alignSelf: 'stretch',
        color: "#00FFFF",

    },
    container:{
        marginRight:20,
        marginTop:10,
        justifyContent:"center",
        // width:320,
        borderRadius:2,
        width:"100%",
        height:190
        // marginHorizontal:100
    },
    findprogram:{
        //marginTop:200,
        //  flex:1,
          height:20,
        marginTop:30,
        marginBottom:12,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    template:{
        flex:1,
        justifyContent:"center",
        marginRight:8,
        width:"100%",
         borderWidth:.19,
         borderColor:"#E3EEF7",
         borderTopColor:"#AFB8C4",
        borderLeftColor:"#000",
        borderRightColor:"#000",
        borderBottomColor:"#000",
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 2,
        borderRadius: 5,
        elevation:4
    },
    templatelast:{
        flex:1,
        justifyContent:"center",
        width:"100%",
         borderWidth:.19,
         borderColor:"#E3EEF7",
         borderTopColor:"#AFB8C4",
        borderLeftColor:"#000",
        borderRightColor:"#000",
        borderBottomColor:"#000",
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 2,
        borderRadius: 5,
        elevation:4
    },
    templateimg:{
        height:100,
        width:"100%",
        // width:70,
        borderRadius:5
    },
    templatetxt:{
        paddingVertical:5,
        textAlign:"center",
        
    }


});
 export default styles;