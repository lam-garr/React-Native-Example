import React from "react";
import { View, Button, ScrollView } from "react-native";

function TestScreen() {
    return(
        <View style={{flex:1, backgroundColor: "plum", padding: 60}}>
            <ScrollView>
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