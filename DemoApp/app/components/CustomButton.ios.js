import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton = ({ onPress, title }) => {
    <Pressable
        onPress={onPress}
        style={{
            justifyContent: "cneter",
            alignItems: "cneter",
            backgroundColor: "lightblue",
            borderRadius: 20,
            padding: 10
        }}
    >
        <Text>{title}</Text>
    </Pressable>
}

export default CustomButton;