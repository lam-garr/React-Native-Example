import "react-navigation-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigation } from "@react-navigation/drawer";
import DemoDashScreen from "./DemoDashScreen";

const Drawer = createDrawerNavigation();

export default function DemoDrawerNavScreen(){
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Dashboard" component={DemoDashScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}