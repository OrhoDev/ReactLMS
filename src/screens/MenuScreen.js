import React from "react";
import {View,Text,StyleSheet,Button,TouchableOpacity}from"react-native";

const MenuScreen=(props)=>{console.log(props.navigation);
 return(
   <View>
     <Text style={styles.text}>menu??</Text>
     <Button title="-> list" onPress={()=>props.navigation.navigate("List")}/>
     <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate("Students")}>    
       <Text style={styles.btnText}>students</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate("Box")}>    
       <Text style={styles.btnText}>box</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate("Posts")}>    
       <Text style={styles.btnText}>posts</Text>
     </TouchableOpacity>
   </View>
 )
}

const styles=StyleSheet.create({
 text:{marginVertical:20,fontSize:20,textAlign:"center"},
 btn:{backgroundColor:"#3446eb",marginVertical:7,paddingVertical:10},
 btnText:{color:"white",fontSize:15,textTransform:"uppercase",textAlign:"center"}
})

export default MenuScreen
