import { React } from "react";
import { Text, View, StyleSheet, Flatlist } from "react-native";

const numbers = [
    { num: "1" },
    { num: "2" },
    { num: "3" },
    { num: "4" },
];


const ListScreen = () => {
    return (
        <View>
            <Text>Lists</Text>
            <Flatlist>
                keyExtractor={(numbers) => numbers.num}
                data ={numbers}
                renderItem={({ item }) => {
                    return (
                        <Text>
                            Colors: {item.num}
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