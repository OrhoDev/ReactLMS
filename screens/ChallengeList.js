import { React } from "react";
import { Text, View, StyleSheet, Flatlist } from "react-native";




const PeopleScreen = () => {
    const person = {
     name: "Guy", 
     surname: "Family", 
     dob: "01/01/2001" 
  }

    let m = "Student info"

    const hobbies = ["Hobby1", "Thing", "Football"]

    return (
        <View>
            <Text>People</Text>
            <Text>Name: {person.name}</Text>
            <Text>Surname: {person.surname}</Text>
            <Text>DOB: {person.dob}</Text>

             <Flatlist>
                keyExtractor={(hobbies)}
                data ={hobbies}
                renderItem={({ item }) => {
                    return (
                        <Text style={hobbyItem}>
                            Hobby: {item}
                        </Text>
                    );
                }}
            </Flatlist>


        </View>
    );
};

const styles = StyleSheet.create({
    FlatlistStyle: {
        fontSize: 20,
    },
    hobbyItem: {
        fontSize: 16,
        color: "#D6472D",
    }
    
});



export default PeopleScreen;