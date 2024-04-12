import React from "react";
import { SafeAreaView } from "react-native";

function LoginScreen({ route }) {

    const { name } = route.params;

    return(
        <SafeAreaView style={styles.background}>
            <Text style={styles.text}>Log In, {name}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.Create({
    background: {
        flex: 1,
        backgroundColor: "white"
    }
})

export default LoginScreen;