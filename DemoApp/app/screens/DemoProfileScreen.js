import { View, Text, StyleSheet } from "react-native";

const DemoProfileScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={StyleSheet.text}>Profiel</Text>
        </View>
    )
}

export default DemoProfileScreen;

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