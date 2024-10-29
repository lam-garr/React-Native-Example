import { View, Text, StyleSheet } from "react-native";

const DemoCatalogListScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={StyleSheet.text}>Catalog</Text>
        </View>
    )
}

export default DemoCatalogListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})