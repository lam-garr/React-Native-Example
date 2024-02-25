import React from "react";
import { SafeAreaView } from "react-native";

function SupportScreen() {
    return(
        <SafeAreaView style={styles.background}>
        </SafeAreaView>
    );
}

const styles = StyleSheet.Create({
    background: {
        flex: 1,
        backgroundColor: "white"
    }
})

export default SupportScreen;