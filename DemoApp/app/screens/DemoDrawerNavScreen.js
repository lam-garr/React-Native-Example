import "react-navigation-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigation } from "@react-navigation/drawer";
import DemoDashScreen from "./DemoDashScreen";
import DemoSettingScreen from "./DemoSettingScreen";
import DemoProfileScreen from "./DemoProfileScreen";

const Drawer = createDrawerNavigation();

export default function DemoDrawerNavScreen(){
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="Dashboard"
                    component={DemoDashScreen}
                    options={{
                        title: "My Dashboard",
                        drawerLabel: "Dashboard",
                        drawerActiveTintColor: "#333",
                        drawerActiveBackgroundColor: "lightblue",
                        drawerContentStyle: {
                            backgroundColor: "white"
                        }
                    }}
                />
                <Drawer.Screen
                    name="Profile"
                    component={DemoProfileScreen}
                    options={{
                        title: "Profile",
                        drawerLabel: "Profile",
                        drawerActiveTintColor: "#333",
                        drawerActiveBackgroundColor: "lightblue",
                        drawerContentStyle: {
                            backgroundColor: "white"
                        }
                    }}
                />
                <Drawer.Screen 
                    name="Setting" 
                    component={DemoSettingScreen}
                    options={{
                        title: "Settings",
                        drawerLabel: "Settings",
                        drawerActiveTintColor: "#333",
                        drawerActiveBackgroundColor: "lightblue",
                        drawerContentStyle: {
                            backgroundColor: "white"
                        }
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}