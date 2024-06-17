import { View, Text, StyleSheet } from "raect-native";

export default function MultiStyleComponent() {
    return(
        <View style={styles.container}>
            <View style={[styles.box, styles.redColor]}>
                <Text>red box</Text>
            </View>
            <View style={[styles.box, styles.blueColor]}>
                <Text>blue box</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: "plum", padding: 60},
    box: {
        width: 100,
        heigth: 100,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: "purple",
        borderRadius: 5
    },
    redColor: {backgroundColor: "red"},
    blueColor: {backgroundColor: "blue"}
})