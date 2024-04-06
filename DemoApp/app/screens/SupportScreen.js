import React from "react";
import { SafeAreaView, Text } from "react-native";

function SupportScreen({ route }) {

    const { name } = route.params;

    return(
        <SafeAreaView style={styles.background}>
            <Text style={styles.text}>Hello {name}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.Create({
    background: {
        flex: 1,
        backgroundColor: "white"
    },
    text:{
        color: black
    }
})

export default SupportScreen;