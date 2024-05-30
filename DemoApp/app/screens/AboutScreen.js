import React from "react";
import { SafeAreaView, Text, Button, ScrollView, Pressable, ActivityIndicator } from "react-native";

function AboutScreen({ route, navigation }) {

    const { name } = route.params;

    return(
        <SafeAreaView style={styles.background}>
            <ActivityIndicator size="medium" color="black" animating={true}/>
            <ScrollView>
                <Pressable onPress={() => console.log("About test pressed")}>
                    <Text style={styles.text}>Hello {name}</Text>
                </Pressable>
                <Button style={styles.button} title="Update" onPress={() => navigation.setParams({
                    name:"Updated User"
                })}/>
                <Button title="Return with data" onPress={() => navigation.navigate(
                    "Home",
                    {result: "Data from About"}
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
    }
})

export default AboutScreen;