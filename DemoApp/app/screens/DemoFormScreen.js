import { StyleSheet, View, SafeAreaView, TextInput } from "react-native";
import { useState } from "react";

export default function DemoFormScreen() {

    const [ userInput, setUserInput ] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <TextInput 
                style={styles.input} 
                defaultValue={userInput}
                onChangeText={text => setUserInput(text)}
                placeholder="input text here"
            />
            <Text style={styles.text}>Input: {userInput}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1
    },
    text: {
        fontSize: 30,
        padding: 10
    }
})