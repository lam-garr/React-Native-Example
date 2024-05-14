import React from "react";
import { SafeAreaView, Text, Button, Image, ScrollView } from "react-native";

function ProfileScreen({ route, navigation }) {

    const { name } = route.params;

    return(
        <SafeAreaView style={styles.background}>
            <ScrollView>
                <Text style={styles.text}>Hello {name}</Text>
                <Image source={{uri: "https://picsum.photos/300"}} style={contentImage}/>
                <Button style={styles.button} title="Update" onPress={() => navigation.setParams({
                    name:"Updated User Profile"
                })}/>
                <Button style={styles.backButton} title="Return with data" onPress={() => navigation.navigate(
                    "Home",
                    {result: "Data from Profile"}
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
    backButton: {
        color: "black"
    }, 
    contentImage: {
        width: 300,
        height: 300,
    }
})

export default ProfileScreen;