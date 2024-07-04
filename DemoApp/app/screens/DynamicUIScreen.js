import { StyleSheet, View, Text, Dimensions }  from "react-native";

export default function DynamicUIScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Hello!</Text>
            </View>
        </View>
    )
}

const windoWidth = Dimensions.get("window").width;
const windoHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum",
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        width: windowWidth > 500 ? "70%" : "90%",
        height: windowHeight > 600 ? "60%" : "90%",
        backgroundColor: "lightBlue",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: windowWidth > 500 ? 50 : 24
    }
})