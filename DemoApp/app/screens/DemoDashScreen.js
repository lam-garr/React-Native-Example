import { View, Text, StyleSheet, Button } from "react-native";

const DemoDashScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={StyleSheet.text}>Dashboard</Text>
            <Button title="Settings" onPress={() => navigation.jumpTo("settings")}/>
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