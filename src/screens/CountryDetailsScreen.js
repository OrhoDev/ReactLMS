import React from "react";
import {Text,View,StyleSheet}from"react-native";
import StudentDetails from "../components/StudentDetails";

const CountryDetailsScreen=()=> (
 <View>
   <Text style={styles.text}>Country Details</Text>
   <StudentDetails name="Ellie"  desc={"Lorem ipms dolor ist amaten"}/>
   <StudentDetails name="Gabriel"  desc={"Lorem ipms dolor ist amaten"}/>
   <StudentDetails name="Kaylen"  desc={"Lorem ipms dolor ist amaten"}/>
 </View>
)

const styles=StyleSheet.create({
 text:{textAlign:"center",fontSize:20,marginVertical:20}
});

export default CountryDetailsScreen;
