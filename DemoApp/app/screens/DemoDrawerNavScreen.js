import "react-navigation-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigation } from "@react-navigation/drawer";

const Drawer = createDrawerNavigation();

export default function DemoDrawerNavScreen(){
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}