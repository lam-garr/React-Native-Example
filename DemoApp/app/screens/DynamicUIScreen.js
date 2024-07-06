import { StyleSheet, View, Text, SafeAreaView}  from "react-native";

export default function DynamicUIScreen() {

    const windowWidth = useWindowDimensions.get("window").width;
    const windowHeight = useWindowDimensions.get("window").height;

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <View style={[
                    styles.box, 
                    {
                        width: windowWidth > 500 ? "70%" : "90%",
                        height: windowHeight > 600 ? "60%" : "90%"
                    }
                    ]}>
                    <Text style={{fontSize: windowWidth > 500 ? 50 : 24}}>Hello!</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: "plum"
    },
    container: {
        flex: 1,
        backgroundColor: "plum",
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        backgroundColor: "lightBlue",
        alignItems: "center",
        justifyContent: "center"
    }
})