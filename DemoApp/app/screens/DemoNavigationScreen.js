import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackScreen from ".HomeStackScreen";
import AboutStackScreen from ".AboutStackScreen";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator;

export default function DemoNavigationScreen() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle: {
                    background: "grey"
                },
                headerTintColor: "#fff",
                headerTitleStyle: { fontWeight: "bold"},
                headerLeft: () => {
                    <Pressable onPress={() => console.log("Menu Button Pressed.")}>
                        <Text style={{ color: "white", fontSize: 16}}>Menu</Text>
                    </Pressable>
                },
                contentStyle: {
                    backgroundColor: "e8e4f3"
                }
            }}>
                <Stack.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={{
                        title: "Welcome",      
                    }}
                />
                <Stack.Screen 
                    name="About" 
                    component={AboutStackScreen} 
                    initialParams={{name: "Guest"}}
                    options={{
                        title: "About",      
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
