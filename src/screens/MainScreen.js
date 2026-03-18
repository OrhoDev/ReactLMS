import React from "react";
import { Text, StyleSheet, View } from "react-native";

const MainScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Welcome to My App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default MainScreen;
