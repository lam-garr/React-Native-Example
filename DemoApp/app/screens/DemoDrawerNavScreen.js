import "react-navigation-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigation } from "@react-navigation/drawer";
import DemoDashScreen from "./DemoDashScreen";
import DemoSettingScreen from "./DemoSettingScreen";

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
                <Drawer.Screen name="Setting" component={DemoSettingScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}