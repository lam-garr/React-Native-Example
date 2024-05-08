import React from "react";
import { ImageBackground, StyleSheet, View, Image, ScrollView, Button, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

function WelcomeScreen({ navigation, route }) {
    const navigation = useNavigation();
    return(
        <ImageBackground style={styles.background}>
            <Image source={{uri: "https://picsum.photos/300"}} style={contentImage}/>
            <View style={styles.welcomeButton}></View>
            <Button style={styles.aboutButton} title="About" onPress={() => navigation.navigate("About", {name:"User"})}/>
            <Button style={styles.supportButton} title="Support" onPress={() => navigation.navigate("Support", {name:"User"})}/>
            <Button style={styles.loginButton} title="Login" onPress={() => navigation.navigate("Login", {name:"User"})}/>
            <Button style={styles.signupButton} title="Signup" onPress={() => navigation.navigate("Signup", {name:"User"})}/>
            <Button style={styles.contentButton} title="Content" onPress={() => navigation.navigate("Content", {name:"User"})}/>
            <Button style={styles.profileButton} title="Profile" onPress={() => navigation.navigate("Profile", {name:"User"})}/>
            <Text style={styles.paramsText}>{route.params?.result}</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.Create({
    background: {
        flex: 1,
        backgroundColor: "plum",
        justifyContent: "flex-end"
    },
    welomeButton: {
        width: "95%",
        height: 70,
        backgroundColor: "pink"
    },
    paramsText: {
        color: "black"
    },
    button: {
        color: "green"
    },
    aboutButton: {
        color: "grey",
        backgroundColor: "beige"
    },
    supportButton: {
        color: "black",
        backgroundColor: "yellow"
    },
    loginButton: {
        color: "black",
        backgroundColor: "green"
    },
    signupButton: {
        color: "white",
        backgroundColor: "blue"
    },
    contentButton: {
        color: "grey",
        backgroundColor: "red"
    },
    profileButton: {
        color: "grey",
        backgroundColor: "green"
    }, contentImage: {
        width: 300,
        height: 300,
    }
})

export default WelcomeScreen;