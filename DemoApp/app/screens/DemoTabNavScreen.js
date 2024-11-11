import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DemoSettingScreen from "./DemoSettingScreen";
import DemoProfileScreen from "./DemoProfileScreen";
import DemoCatalogList from "./DemoCatalogListScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

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
                    tabBarLabel: "My Profile",
                    tabBarIcon: ({ color }) => {
                        <Ionicons name="person" size={20} color={color}/>
                    },
                    tabBarBadge: 1
                }}/>
                <Tab.Screen name="Catalog" component={DemoCatalogList} options={{
                    tabBarLabel: "Catalog",
                    tabBarIcon: ({ color }) => {
                        <Ionicons name="book-open" size={20} color={color}/>
                    }
                }}/>
                <Tab.Screen name="Settings" component={DemoSettingScreen} options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color }) => {
                        <Ionicons name="settings" size={20} color={color}/>
                    }
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}