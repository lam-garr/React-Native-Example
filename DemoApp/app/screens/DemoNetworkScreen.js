import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

export default function DemoNetworkScreen() {
    return(
        <SafeAreaView style={styles.container}>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: StatusBar.currentHeight
    }
})