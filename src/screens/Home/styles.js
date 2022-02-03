import { StyleSheet,Dimensions } from "react-native";

const styles =StyleSheet.create({
    image:{
       resizeMode:"cover",
        height:500,
        width:`100%`,
        justifyContent:"center"

    },
    title:{

        fontSize:70,
        color:"yellow",
        fontWeight:"bold",
        width:"60%",
        marginLeft:20

    },
    button:{
            backgroundColor:"yellow",
            width:"60%",
            height:40,
            borderRadius:10,
            marginLeft:20,
            justifyContent: "center",
            alignItems:"center",
            marginTop:25       

    },
    buttonText:{
        fontSize:16,
        //color:"white",
        fontWeight:"bold",
    },
    searchButton:{
        flexDirection:"row",
        position:"absolute",
        top:40,
        marginHorizontal:10,
        //zIndex:100,
        height:50,
        width:Dimensions.get("screen").width -20,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25

    },
    searchButtonText:{
        fontSize:16,
        fontWeight:"bold",
        marginLeft:20

    }


})
export default styles;