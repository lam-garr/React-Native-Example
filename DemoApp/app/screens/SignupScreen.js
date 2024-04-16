import React from "react";
import { SafeAreaView } from "react-native";

function SignupScreen({ route, navigation }) {

    const { name } = route.params;

    return(
        <SafeAreaView style={styles.background}>
            <Text style={styles.text}>Sign Up, {name}</Text>
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
    }
})

export default SignupScreen;