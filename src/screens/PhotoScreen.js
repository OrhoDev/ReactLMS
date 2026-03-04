import React from "react";
import {View,Text,StyleSheet,FlatList}from"react-native";

class PhotoScreen extends React.Component{
 constructor(){
   super();
   this.state={posts:[]};
 }
 async componentDidMount(){
   const data=await fetch("https://jsonplaceholder.typicode.com/photos");
   const jsonData=await data.json();
   this.setState({posts:jsonData});
 }
 render(){
   const{photos}=this.state;
   return(
     <View>
       <Text>Photos</Text>
       <FlatList
         keyExtractor={photos=>photos.id}
         data={photos}
         renderItem={({item})=>(
           <View style = {styles.card}>
             <Text style = {styles.id}>{item.id}</Text>
             <Text style = {styles.albumId}>{item.albumId}</Text>
             <Image source = {item.url} style = {styles.img}></Image>
             <Text style = {styles.title}>{item.title}</Text>
         

           </View>
         )}
       />
     </View>
   )
 }
}

const styles=StyleSheet.create({
   img:
   {
    width:100,
    height:100,
    borderRadius: 8
   },
   id:
   {
    fontWeight: "bold",
    fontSize: 18,
    color: "black"
   },
   albumId:{
    fontsize: 14,
    color:"gray",
    fontWeight: "italic"
   },
   title:
   {
    fontsize: 20,
    color: "black",
    fontWeight: "bold"
   },
   card:{
    backgroundColor: "#e85d54",
    borderRadius: 8,
    width: "90%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white"
   }

   }

);

export default PostsScreen
