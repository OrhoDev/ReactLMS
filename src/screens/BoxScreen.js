import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = ({ params }) => (
  <View>
    <Text style={styles.title}>Color Boxes Demo</Text>
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "space-between",
      }}
    >
      <View
        style={{
          width: 180,
          height: 90,
          backgroundColor: "red",
          margin: 5,
        }}
      />
      <View style={{ width: 180, height: 90, backgroundColor: "yellow", margin: 5 }} />
      <View style={{ width: 180, height: 90, backgroundColor: "green", margin: 5 }} />
      <View style={{ width: 180, height: 90, backgroundColor: "blue", margin: 5 }} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },
});

export default BoxScreen;
