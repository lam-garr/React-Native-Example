import React from "react";
import { useState } from "react";
import { ImageBackground, StyleSheet, View, Image, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";

function WelcomeScreen() {
    return(
        <ImageBackground style={styles.background}>
            <Image/>
            <View style={styles.welcomeButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.Create({
    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    welomeButton: {
        width: "95%",
        height: 70,
        backgrounColor: "pink"
    }
})

export default WelcomeScreen;