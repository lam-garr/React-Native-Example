import React from "react";
import { useState } from "react";
import { View, Button, ScrollView, Image, Pressable, Text, Modal, StatusBar, ActivityIndicator } from "react-native";

function TestScreen() {

    const [ modalIsVisible, setModalIsVisible ] = useState(false);

    return(
        <View style={{flex:1, backgroundColor: "plum", padding: 60}}>
            <StatusBar backgroundColor="white" barStyle="dark-content" hidden={false}/>
            <ActivityIndicator size="medium" color="black" animating={true}/>
            <ScrollView>
                <Pressable onPress={() => console.log("image was pressed")}>
                    <Image source={{uri: "https://picsum.photos/300"}} style={{width: 300, height: 300}}/>
                </Pressable>
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
                    <View style={{flex:1, backgroundColor: "yellow", padding: 60}}>
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

export default TestScreen; 