import { StyleSheet, View, SafeAreaView, TextInput, Switch } from "react-native";
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
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="default"
                secureTextEntry={false}
            />
            <TextInput
                style={[styles.input, styles.multilineText]}
                placeholder="message"
                multiline
            />
            <Text style={styles.text}>Input: {userInput}</Text>
            <View style={styles.switchContainer}>
                <Text style={styles.text}>Dark Mode</Text>
                <Switch/>
            </View>
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
    },
    multilineText: {
        minHeight: 100,
        textAlignVertical: "top"
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
    }
})