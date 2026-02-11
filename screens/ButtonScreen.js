import React from "react"
import { View, Text, Stylesheet, Button } from "react-native"

const ButtonScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Button Screen</Text>
            <Button 
            title = "Click me" 
            color = "purple"
            onPress= {() =>
                console.log("Button Clicked this many time: ", counter ++)

            }
                />
                <TouchableOpacity
                style={styles.touchableButton}
                onPress = {() =>
                    console.log("Touchable pressed")
                }>
                    <Text style={styles.btnText}>This is a clickable text!</Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 15,
        marginBottom: 10,
    }
});