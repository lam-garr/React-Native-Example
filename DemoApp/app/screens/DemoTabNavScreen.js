import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function DemoTabNavScreen() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                
            </Tab.Navigator>
        </NavigationContainer>
    );
}