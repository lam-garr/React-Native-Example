import React from "react";
import { SafeAreaView, Text, Button ,Image, ScrollView, Pressable, StatusBar, ActivityIndicator } from "react-native";

function ContentScreen({ route, navigation }) {

    const { name } = route.params;

    return(
        <SafeAreaView style={styles.background}>
            <StatusBar backgroundColor="white" barStyle="dark-content" hidden={true}/>
            <ActivityIndicator size="medium" color="black" animating={true}/>
            <ScrollView>
                <Text style={styles.text}>Hello {name}</Text>
                <Pressable onPress={() => console.log("Content image pressed")}>
                    <Image source={{uri: "https://picsum.photos/300"}} style={contentImage}/>
                </Pressable>
                <Button style={styles.button} title="Update" onPress={() => navigation.setParams({
                    name:"Updated Content User"
                })}/>
                <Button title="Return with data" onPress={() => navigation.navigate(
                    "Home",
                    {result: "Data from Content"}
                )}/>
            </ScrollView>
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
        height: 300
    }
})

export default ContentScreen;