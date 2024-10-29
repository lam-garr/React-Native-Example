import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DemoSettingScreen from "./DemoSettingScreen";
import DemoProfileScreen from "./DemoProfileScreen";

const Tab = createBottomTabNavigator();

export default function DemoTabNavScreen() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Profile" component={DemoProfileScreen}/>
                <Tab.Screen name="Settings" component={DemoSettingScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}