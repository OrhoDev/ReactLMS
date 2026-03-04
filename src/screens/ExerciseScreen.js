import React from "react";
import {Text,StyleSheet,View}from"react-native";

const ExerciseScreen=(props)=>{
  var message="Welcome"
  message="Welcome to Digital School"

  return(
    <View>
        <Text style={styles.message1Style}>Welcome</Text>
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
