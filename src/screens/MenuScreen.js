import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const MenuScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>App Navigation Menu</Text>
      <Button
        title="Go to List Screen"
        onPress={() => props.navigation.navigate("List")}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("Students")}
      >
        <Text style={styles.btnText}>Go to Students Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("Box")}
      >
        <Text style={styles.btnText}>Go to Box Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("Posts")}
      >
        <Text style={styles.btnText}>Go to Posts Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("Countries")}
      >
        <Text style={styles.btnText}>Go to Countries Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("Product")}
      >
        <Text style={styles.btnText}>Go to Product Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 20,
    fontSize: 20,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#3446eb",
    marginVertical: 7,
    paddingVertical: 10,
  },
  btnText: {
    color: "white",
    fontSize: 15,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default MenuScreen;
