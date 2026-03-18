import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import data from "../data/countries.json";

export default class CountriesScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    this.setState({
      countries: data,
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.screenTitle}>Amazing Countries</Text>
        <FlatList
          data={this.state.countries}
          keyExtractor={(countries) => countries.id}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <Text>City: {item.name}</Text>
              <Text>Country: {item.country}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 15,
    fontWeight: "bold",
  },
  cardWrapper: {
    backgroundColor: "#d6d6d6",
    marginBottom: 10,
  },
});
