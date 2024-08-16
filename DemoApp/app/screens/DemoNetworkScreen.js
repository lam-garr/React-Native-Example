import { StyleSheet, SafeAreaView, StatusBar, View, FlatList, Text, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";

export default function DemoNetworkScreen() {

    const [ dataList, setDataList ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true);

    const fetchData = async (limit = 10) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        const data = await response.json();
        setDataList(data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    if(isLoading) {
        return(
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator/>
                <Text>Loading...</Text>
            </SafeAreaView>
        )
    }

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
                    ItemSeparatorComponent={() => {
                        <View style={{ height: 16 }}/>
                    }}
                    ListEmptyComponent={<Text>No Data Found</Text>}
                    ListHeaderComponent={<Text style={styles.headerText}>Data List</Text>}
                    ListFooterComponent={<Text style={styles.footerText}>End of Data</Text>}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
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
    },
    headerText: {
        fontSize: 12,
        textAlign: "center",
        marginTop: 12
    },
    footerText: {
        fontSize: 24,
        textAlign: "center",
        marginTop: 12
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems: "center"
    }
})