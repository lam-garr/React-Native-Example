import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackScreen from ".HomeStackScreen";
import AboutStackScreen from ".AboutStackScreen";

const Stack = createNativeStackNavigator;

export default function DemoNavigationScreen() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeStackScreen}/>
                <Stack.Screen name="About" component={AboutStackScreen} initialParams={{name: "Guest"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
