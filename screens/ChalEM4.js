import { React } from "react";
import { Text, View, StyleSheet, Flatlist } from "react-native";

const colors = [
    { name: "Red", hex: "1" },
    { name: "Blue", hex: "2" },
    { name: "Green",  hex: "3" },
    { name: "Orange", hex: "4" },
];


const ListScreen = () => {
    return (
        <View>
            <Text>Lists</Text>
            <Flatlist>
                keyExtractor={(colors) => colors.hex}
                data ={colors}
                renderItem={({ item }) => {
                    return (
                        <Text>
                            Colors: {item.name}
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