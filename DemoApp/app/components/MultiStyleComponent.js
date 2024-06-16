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
        paddig: 10
    },
    redColor: {backgroundColor: "red"},
    blueColor: {backgroundColor: "blue"}
})