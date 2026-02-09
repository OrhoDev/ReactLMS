import { React } from "react";
import { Text, View, StyleSheet, Flatlist } from "react-native";

const students = [
    { name: "John", age: "17", id: "1" },
    { name: "Jane", age: "17", id: "2" },
    { name: "Jack", age: "17", id: "3" },
    { name: "Jill", age: "17", id: "4" },
];


const ListScreen = () => {
    return (
        <View>
            <Text>Lists</Text>
            <Flatlist>
                keyExtractor={(student) => student.id}
                data ={students}
                renderItem={({ item }) => {
                    return (
                        <Text>
                            Student name: {item.name}, Age: {item.age}, This is the student id: {item.id}
                        </Text>
                    );
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            </Flatlist>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ListScreen;