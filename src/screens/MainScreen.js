import React from "react";
import {Text , View, StyleSheet}from "react-native";

const MainScreen = ()=> {
  return(
      <View>
          <Text style={styles.textStyle}>main screen...yeah</Text>
      </View>
  )
}

const styles = StyleSheet.create({
 textStyle:{
     fontSize:30
 }
})

export default MainScreen
