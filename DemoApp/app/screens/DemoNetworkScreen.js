import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useState } from "react";

export default function DemoNetworkScreen() {

    const [ dataList, setDataList ] = useState([])

    const fetchData = async (limit = 10) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        const data = await response.json();
        setDataList(data);
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