import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackScreen from ".HomeStackScreen";

const Stack = createNativeStackNavigator;

export default function DemoNavigationScreen() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeStackScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
