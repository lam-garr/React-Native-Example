import { StyleSheet, View } from "react-native";
import BoxComponent from "../components/BoxComponent";

export default function FlexScreen() {
    return(
        <View style={styles.container}>
            <BoxComponent style={{ backgroundColor: "pink", flex: 1}}>Box 1</BoxComponent>
            <BoxComponent style={{ backgroundColor: "blue", flex: 3}}>Box 2</BoxComponent>
            <BoxComponent style={{ backgroundColor: "yellow"}}>Box 3</BoxComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginTop: 64,
        borderWidth: 6,
        borderColor: "red"
    }
})