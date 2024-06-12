import React from "react";
import { SafeAreaView, Text, Button, Image, ScrollView, Pressable, Alert, ActivityIndicator } from "react-native";
import GreetComponent from "../components/GreetingComponent";

function ProfileScreen({ route, navigation }) {

    const { name } = route.params;

    return(
        <SafeAreaView style={styles.background}>
            <GreetComponent name="Test User"/>
            <ActivityIndicator size="medium" color="black" animating={true}/>
            <ScrollView>
                <Button
                    title="alert"
                    onPress={() => 
                        Alert.alert("Profile Alert!", "profile alert", [
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
                <Pressable onPress={() => console.log("Profile image pressed")}>
                    <Image source={{uri: "https://picsum.photos/300"}} style={contentImage}/>
                </Pressable>
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