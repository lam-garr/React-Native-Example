import { View, Text, StyleSheet } from "react-native";

const DemoSettingScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={StyleSheet.text}>Settings</Text>
        </View>
    )
}

export default DemoSettingScreen;

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

