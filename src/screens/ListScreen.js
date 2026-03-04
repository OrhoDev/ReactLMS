import {React} from "react";
import {Text,StyleSheet,View,FlatList,TouchableOpacity}from"react-native";

const students=[
 {name:"Alek",surname:"Novakovic",age:17},
 {name:"Anida",surname:"Veledar",age:17},
 {name:"Danin",surname:"Zulfic",age:17},
 {name:"Marko",surname:"Forcan",age:17}
];

const ListScreen=(props)=>{
 return(
   <View>
     <Text>Students List</Text>
     <FlatList
        keyExtractor={students=>students.name}
        data={students}
        renderItem={({item})=>{
           return(<Text>{item.name} {item.surname} - {item.age}</Text>)
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
     />
     <TouchableOpacity style={styles.touchableButton}
         onPress={()=>props.navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
     </TouchableOpacity>
   </View>
 )
}

const styles=StyleSheet.create({
 touchableButton:{
   backgroundColor:"purple",marginVertical:15,
   paddingVertical:10,borderRadius:6,marginHorizontal:30
 },
 buttonText:{
   color:"white",textAlign:"center",fontSize:20,fontWeight:"bold"
 }
})

export default ListScreen
