import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DemoSettingScreen from "./DemoSettingScreen";
import DemoProfileScreen from "./DemoProfileScreen";
import DemoCatalogList from "./DemoCatalogListScreen";

const Tab = createBottomTabNavigator();

export default function DemoTabNavScreen() {
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelPosition: "below-icon",
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: "purple",
                    tabBarInactiveTintColor: "grey"
                }}
            >
                <Tab.Screen name="Profile" component={DemoProfileScreen} options={{
                    tabBarLabel: "My Profile"
                }}/>
                <Tab.Screen name="Catalog" component={DemoCatalogList}/>
                <Tab.Screen name="Settings" component={DemoSettingScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}