import React from "react";
import { useState } from "react";
import { View, Button, ScrollView, Image, Pressable, Text, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet } from "react-native";

function TestScreen() {

    const [ modalIsVisible, setModalIsVisible ] = useState(false);

    return(
        <View style={styles.testContainer}>
            <StatusBar backgroundColor="white" barStyle="dark-content" hidden={false}/>
            <ActivityIndicator size="medium" color="black" animating={true}/>
            <ScrollView>
                <Pressable onPress={() => console.log("image was pressed")}>
                    <Image source={{uri: "https://picsum.photos/300"}} style={styles.testImg}/>
                </Pressable>
                <Button
                    title="alert"
                    onPress={() => 
                        Alert.alert("New Alert!", "test alert", [
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
                <Button
                    title="Press Test Button"
                    onPress={() => setModalIsVisible(true)}
                    color="midnightblue"
                />
                <Modal 
                    visible={modalIsVisible} 
                    onRequestClose={() => setModalIsVisible(false)}
                    animationType="slide"
                    presentationStyle="pageSheet"
                >
                    <View style={styles.testModal}>
                        <Text>Modal Content</Text>
                        <Button
                            title="Close Modal"
                            onPress={() => setModalIsVisible(false)}
                            color="midnightblue"
                        />
                    </View>
                </Modal>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    testContainer:{flex:1, backgroundColor: "plum", padding: 60},
    testModal:{flex:1, backgroundColor: "yellow", padding: 60},
    testImg:{width: 300, height: 300}
})

export default TestScreen; 