import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        margin:20

    },

    image:{
        width:"100%",
        aspectRatio :3/2,
        resizeMode:"cover",
        borderRadius:10
    },
    bedrooms:{
        marginVertical: 10,
        color: "lightgrey",
    },
     description:{
         fontSize:18,
         lineHeight:27,
        // margin:10
     },
     prices:{
         fontSize:18
     },
     oldPrice:{
         color:"lightgrey",
         textDecorationLine:"line-through"
     },
     newPrice:{
         fontWeight:"bold"
     },
     totalPrice:{
         color:"darkgrey",
         fontWeight:"bold",
         fontSize:18
     }




})
export default styles;
