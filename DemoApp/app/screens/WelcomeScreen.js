import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

function WelcomeScreen() {
    return(
        <ImageBackground style={styles.background}>
        </ImageBackground>
    );
}

const styles = StyleSheet.Create({
    background: {
        flex: 1
    }
})

export default WelcomeScreen;