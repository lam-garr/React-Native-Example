import { View, Text } from "react-native";

export default function GreetComponent({ name }) {
    return(
        <View>
            <Text>Greetings, {name}</Text>
        </View>
    )
}