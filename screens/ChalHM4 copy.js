import { React } from "react";
import { Text, View, StyleSheet, Flatlist } from "react-native";

const movies = [
    { name: "How the Grinch Stole Christmas", year: "2000" },
    { name: "2001 A Space Oddysey", year: "1924" },
    { name: "Rocky", year: "1985" },
    { name: "Rango", year: "2011" },
];


const ListScreen = () => {
    return (
        <View>
            <Text>Lists</Text>
            <Flatlist>
                keyExtractor={(movies) => movies.name}
                data ={movies}
                renderItem={({ item }) => {
                    return (
                        <Text>
                            Movie: {item.name}, Year: {item.year}
                        </Text>
                    );
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            </Flatlist>
        </View>
    );
};

const styles = StyleSheet.create({
    FlatlistStyle: {
        fontSize: 20,
    }
});


export default ListScreen;