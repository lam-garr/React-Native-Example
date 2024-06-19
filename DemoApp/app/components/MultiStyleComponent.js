import { View, Text, StyleSheet } from "raect-native";

export default function MultiStyleComponent() {
    return(
        <View style={styles.container}>
            <View style={style.dark}>
                <Text style={style.darkText}>
                    style inheritance <Text style={style.boldedText}>bolded</Text>
                </Text>
            </View>
            <View style={[styles.box, styles.redColor, styles.boxShadow]}>
                <Text>red box</Text>
            </View>
            <View style={[styles.box, styles.blueColor, styles.androidShadow]}>
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
    blueColor: {backgroundColor: "blue"},
    boxShadow: {
        shadowColor: "#333333",
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 0.6,
        shadowRadius: 4
    },
    androidShadow: {
        elevation: 10
    },
    dark: {
        backgroundColor: "black"
    },
    darkText: {
        color: "white"
    },
    boldedText: {
        fontWeight: "bold"
    }
})