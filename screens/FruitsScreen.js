// 1. LIBRARY
import React from "react";
import { Text, StyleSheet, View } from "react-native";

// 2. KOMPONENTE
const Messages = () => {
    const message1 = "Hi message1";
    let message2 = "Hi message2";
return (
    <View>
        <Text style={styles.textStyle}>{message1}</Text>
        <Text style={styles.textStyle}>{message2}</Text>
    </View>
)
};

// 3. STYLES
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

// 4. EXPORT
export default MainScreen;
