import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";

const ButtonScreen=()=>{
 let counter=0
 return(
   <View>
    <Text style={styles.textStyle}>bttn screen hehe</Text>
    <Button title="click!" color="purple"
        onPress={()=>console.log("clicked:",counter++)}
     />

     <TouchableOpacity style={styles.touchableButton}
        onPress={()=>console.log("touchy")}
     >
        <Text style={styles.btnText}>click this text</Text>
     </TouchableOpacity>
   </View>
 )
}

const styles=StyleSheet.create({
 textStyle:{
    textAlign:"center",
    marginTop:10,
    fontSize:15, marginBottom:10
 },
 touchableButton:{
    backgroundColor:"purple",
    marginVertical:15,paddingVertical:20,
    borderRadius:6,marginHorizontal:20
 },
 btnText:{
    color:"white",textAlign:"center",fontSize:25,fontWeight:"bold"
 }
})

export default ButtonScreen
