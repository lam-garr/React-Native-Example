import React from "react";
import { View, Button, ScrollView, Image } from "react-native";

function TestScreen() {
    return(
        <View style={{flex:1, backgroundColor: "plum", padding: 60}}>
            <ScrollView>
                <Image source={{uri: "https://picsum.photos/300"}} style={{width: 300, height: 300}}/>
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