import React from "react";
import { ImageBackground, StyleSheet, View, Image, ScrollView, Button, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

function WelcomeScreen({ navigation, route }) {
    const navigation = useNavigation();
    return(
        <ImageBackground style={styles.background}>
            <Image/>
            <View style={styles.welcomeButton}></View>
            <Button title="About" onPress={() => navigation.navigate("About", {name:"User"})}/>
            <Text style={styles.paramsText}>{route.params?.result}</Text>
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
    },
    paramsText: {
        color: black
    }
})

export default WelcomeScreen;