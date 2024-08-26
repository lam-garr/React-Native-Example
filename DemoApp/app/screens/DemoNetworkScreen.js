import { StyleSheet, SafeAreaView, StatusBar, View, FlatList, Text, ActivityIndicator, Button } from "react-native";
import { useState, useEffect } from "react";

export default function DemoNetworkScreen() {

    const [ dataList, setDataList ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true);
    const [ refreshing, setRefreshing ] = useState(false);
    const [ postTitle, setPostTitle ] = useState("");
    const [ postBody, setPostBody ] = useState("");
    const [ isPosting, setIsPosting ] = useState(false);

    const fetchData = async (limit = 10) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        const data = await response.json();
        setDataList(data);
        setIsLoading(false);
    }

    const handleRefresh = () => {
        setRefreshing(true);
        fetchData();
        setRefreshing(false);
    }

    const addPost = async () => {
        setIsPosting(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: postTitle,
                body: postBody  
            })
        });;

        const newPost = await response.json();
        setDataList([newPost, ...dataList]);
        setPostTitle("");
        setPostBody("");
        setIsPosting(false);
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
            <>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Post Title" value={postTitle} onChangeText={text => setPostTitle(text)}/>
                    <TextInput style={styles.input} placeholder="Post Body" value={postBody} onChangeText={text => setPostBody(text)}/>
                    <Button title={isPosting ? "Adding..." : "Add"} onPress={addPost} disable={isPossting}/>
                </View>
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
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                </View>
            </>
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
    },
    inputContainer: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        margin: 16
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 8,
        padding: 8,
        borderRadius: 8
    }
})