import React from "react";
import { SafeAreaView, Text, Button, Image, Pressable } from "react-native";

function LoginScreen({ route, navigation }) {

    const { name } = route.params;

    return(
        <SafeAreaView style={styles.background}>
            <Text style={styles.text}>Log In, {name}</Text>
            <Pressable onPress={() => console.log("Login image pressed")}>
                <Image source={{uri: "https://picsum.photos/300"}} style={contentImage}/>
            </Pressable>
            <Button style={styles.button} title="Update" onPress={() => navigation.setParams({
                name:"Updated Login User"
            })}/>
            <Button title="Return with data" onPress={() => navigation.navigate(
                "Home",
                {result: "Data from Login"}
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
    },
    contentImage: {
        width: 300,
        height: 300,
    }
})

export default LoginScreen;