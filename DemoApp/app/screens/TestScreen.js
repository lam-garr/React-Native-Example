import React from "react";
import { View, Button, ScrollView, Image, Pressable } from "react-native";

function TestScreen() {
    return(
        <View style={{flex:1, backgroundColor: "plum", padding: 60}}>
            <ScrollView>
                <Pressable onPress={() => console.log("image was pressed")}>
                    <Image source={{uri: "https://picsum.photos/300"}} style={{width: 300, height: 300}}/>
                </Pressable>
                <Button
                    title="Press Test Button"
                    onPress={() => console.log("Test Button Pressed")}
                    color="midnightblue"
                />
            </ScrollView>
        </View>
    );
}

export default TestScreen; 