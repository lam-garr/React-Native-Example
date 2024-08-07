import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

export default function DemoNetworkScreen() {

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
        const data = await response.json();
    }

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