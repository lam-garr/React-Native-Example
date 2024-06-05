import React from "react";
import { SafeAreaView, Text, Button, Image, Pressable, ActivityIndicator, Alert } from "react-native";

function SignupScreen({ route, navigation }) {

    const { name } = route.params;

    return(
        <SafeAreaView style={styles.background}>
            <ActivityIndicator size="medium" color="black" animating={true}/>
            <Button
                    title="alert"
                    onPress={() => 
                        Alert.alert("Signup Alert!", "signup alert", [
                            {
                                text:"ok",
                                onPress: () => console.log("ok pressed")
                            },
                            {
                                text:"cancel",
                                onPress: () => console.log("cancel pressed")
                            }
                        ])
                    }
                />
            <Text style={styles.text}>Sign Up, {name}</Text>
            <Pressable onPress={() => console.log("Signup image pressed")}>
                <Image source={{uri: "https://picsum.photos/300"}} style={contentImage}/>
            </Pressable>
            <Button style={styles.button} title="Update" onPress={() => navigation.setParams({
                name:"Updated User"
            })}/>
            <Button title="Return with data" onPress={() => navigation.navigate(
                "Home",
                {result: "Data from Signup"}
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
    }, contentImage: {
        width: 300,
        height: 300,
    }
})

export default SignupScreen;