import React from "react";
import { SafeAreaView, Text, Button, Image, ScrollView, Pressable, ActivityIndicator, Alert, StatusBar } from "react-native";

function SupportScreen({ route, navigation }) {

    const { name } = route.params;

    return(
        <SafeAreaView style={styles.background}>
            <StatusBar backgroundColor="white" barStyle="dark-content" hidden={true}/>
            <ActivityIndicator size="medium" color="black" animating={true}/>
            <ScrollView>
                <Button
                    title="alert"
                    onPress={() => 
                        Alert.alert("Support Alert!", "support alert", [
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
                <Text style={styles.text}>Hello {name}</Text>
                <Pressable onPress={() => console.log("Support Image Pressed")}>
                    <Image source={{uri: "https://picsum.photos/300"}} style={contentImage}/>
                </Pressable>
                <Button style={styles.button} title="Update" onPress={() => navigation.setParams({
                    name:"Updated Support User"
                })}/>
                <Button title="Return with data" onPress={() => navigation.navigate(
                    "Home",
                    {result: "Data from Support"}
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
    button:{
        color: "black"
    }, contentImage: {
        width: 300,
        height: 300,
    }
})

export default SupportScreen;