import { View, Text, StyleSheet } from "react-native";

const DemoDashScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={StyleSheet.text}>Dashboard</Text>
        </View>
    )
}

export default DemoDashScreen;

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