import React from "react";
import { SafeAreaView, Text } from "react-native";

function SupportScreen({ route, navigation }) {

    const { name } = route.params;

    return(
        <SafeAreaView style={styles.background}>
            <Text style={styles.text}>Hello {name}</Text>
            <Button style={styles.button} title="Update" onPress={() => navigation.setParams({
                name:"Updated Support User"
            })}/>
            <Button title="Return with data" onPress={() => navigation.navigate(
                "Home",
                {result: "Data from Support"}
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
    button:{
        color: "black"
    }
})

export default SupportScreen;