import React from "react";
import { SafeAreaView, Text, Button, ScrollView } from "react-native";

function AboutScreen({ route, navigation }) {

    const { name } = route.params;

    return(
        <SafeAreaView style={styles.background}>
            <ScrollView>
                <Text style={styles.text}>Hello {name}</Text>
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