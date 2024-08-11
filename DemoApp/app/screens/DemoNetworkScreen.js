import { StyleSheet, SafeAreaView, StatusBar, View, FlatList, Text } from "react-native";
import { useState, useEffect } from "react";

export default function DemoNetworkScreen() {

    const [ dataList, setDataList ] = useState([])

    const fetchData = async (limit = 10) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        const data = await response.json();
        setDataList(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={dataList}
                    renderItem={({ item }) => {
                        return(
                            <View style={styles.card}>
                                <Text style={styles.titleText}>{item.title}</Text>
                                <Text style={styles.bodyText}>{item.body}</Text>
                            </View>
                        )
                    }}
                    ListEmptyComponent={<Text>No Data Found</Text>}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: StatusBar.currentHeight
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 16
    },
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1
    },
    titleText: {
        fontSize: 30
    },
    bodyText: {
        fontSize: 24,
        color: "666666"
    }
})