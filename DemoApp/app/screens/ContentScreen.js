import React from "react";
import { SafeAreaView } from "react-native";

function ContentScreen({ route, navigation }) {

    const { name } = route.params;

    return(
        <SafeAreaView style={styles.background}>
            <Text style={styles.text}>Hello {name}</Text>
            <Button style={styles.button} title="Update" onPress={() => navigation.setParams({
                name:"Updated Content User"
            })}/>
            <Button title="Return with data" onPress={() => navigation.navigate(
                "Home",
                {result: "Data from Content"}
            )}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.Create({
    background: {
        flex: 1,
        backgroundColor: "white"
    },
    text:{
        color: "black"
    },
    button: {
        color: "black"
    }
})

export default ContentScreen;