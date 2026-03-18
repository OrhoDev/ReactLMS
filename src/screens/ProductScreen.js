import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import productsData from "../data/products.json";
import Product from "../components/Product";

export default class ProductScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({
      products: productsData,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Top products </Text>
        <FlatList
          data={this.state.products}
          keyExtractor={(products) => products.id}
          renderItem={({ item }) => (
            <View>
              <Product
                img={item.image}
                name={item.name}
                desc={item.description}
                stock={item.stock}
                price={item.price}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
    fontWeight: "bold",
  },
});
