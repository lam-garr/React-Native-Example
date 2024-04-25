import React from "react";
import { SafeAreaView } from "react-native";

function ProfileScreen({ route, navigation }) {

    const { name } = route.params;

    return(
        <SafeAreaView style={styles.background}>
            <Text style={styles.text}>Hello {name}</Text>
            <Button style={styles.backButton} title="Return with data" onPress={() => navigation.navigate(
                "Home",
                {result: "Data from Profile"}
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
    backButton: {
        color: "black"
    }
})

export default ProfileScreen;