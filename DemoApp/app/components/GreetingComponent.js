import { View, Text, StyleSheet } from "react-native";

export default function GreetComponent({ name }) {
    return(
        <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Greetings, {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    greetingContainer: {
        flex: 1,
        backgroundColor: "plum",
        padding: 60
    },
    greetingText: {
        color: black
    }
})