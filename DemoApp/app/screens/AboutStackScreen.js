import { View, Text, StyleSheet } from "react-native";

export default function AboutStackScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>About Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})