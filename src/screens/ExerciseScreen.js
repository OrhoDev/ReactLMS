import React from "react";
import {Text,StyleSheet,View}from"react-native";

const ExerciseScreen=(props)=>{
  var message="Hi there"
  message="yo from digital school!!"

  return(
    <View>
        <Text style={styles.message1Style}>yo there</Text>
        <Text>{props.message}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
 message1Style:{
    fontSize:30,
    color:"blue",
    fontStyle:"italic"
 },
 message2Style:{fontSize:24,color:"red"}
})

export default ExerciseScreen
