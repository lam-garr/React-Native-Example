import { StyleSheet, View, SafeAreaView, TextInput } from "react-native";

export default function DemoFormScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input}/>
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
    }
})