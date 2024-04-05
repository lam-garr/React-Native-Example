import React from "react";
import { SafeAreaView } from "react-native";

function ContentScreen() {
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

export default ContentScreen;