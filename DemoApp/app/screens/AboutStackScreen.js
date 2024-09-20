import { View, Text, StyleSheet, Button } from "react-native";

export default function AboutStackScreen({ navigation, route }) {
    const { name } = route.params;
    return(
        <View style={styles.container}>
            <Text style={styles.text}>About Screen, Hello {name}</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
            <Button title="Update Name" onPress={() => navigation.setParams({name: "Friend"})}/>
            <Button 
                title="Go to Home with Data" 
                onPress={() => navigation.navigate("Home", { result:"From About"})}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})