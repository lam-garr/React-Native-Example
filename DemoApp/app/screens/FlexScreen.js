import { StyleSheet, View } from "react-native";
import BoxComponent from "../components/BoxComponent";

export default function FlexScreen() {
    return(
        <View style={styles.container}>
            <BoxComponent style={{ backgroundColor: "pink", flex: 1, flexShrink: 1}}>Box 1</BoxComponent>
            <BoxComponent style={{ backgroundColor: "blue", flexBasis: 140, flex: 3}}>Box 2</BoxComponent>
            <BoxComponent style={{ backgroundColor: "yellow", flex: 1}}>Box 3</BoxComponent>
            <BoxComponent style={{ backgroundColor: "green", alignItems: "flex-end", flexGrow: 1}}>Box 4</BoxComponent>
            <BoxComponent style={{ backgroundColor: "brown", alignItems: "stretch"}}>Box 5</BoxComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        flexWrap: "nowrap",
        gap: 10,
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "flex-start",
        marginTop: 64,
        borderWidth: 6,
        borderColor: "red"
    }
})