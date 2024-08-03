import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useState} from "react";

export default function LoginFormScreen() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <KeyboardAvoidingView 
            behavior="padding" 
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} 
            style={styles.container}
        >
            <View style={styles.form}>
                <Text style={styles.label}>Username</Text>
                <TextInput style={styles.input} placeholder="Enter your  username" value={username} onChangeText={text => setUsername(text)}/>
                <Text style={styles=label}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry value={password} onChangeText={pw => setPassword(pw)}/>
                <Button title="Login" onPress={() => {}} />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "#f5f5f5"
    },
    form: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "bold"
    },
    input: {
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5
    }
})