import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from './app/screens/WelcomeScreen';
import AboutScreen from './app/screens/AboutScreen';
import SupportScreen from './app/screens/SupportScreen';
import ContentScreen from "./app/screens/ContentScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen}/>
        <Stack.Screen name="About" component={AboutScreen}/>
        <Stack.Screen name="Support" component={SupportScreen}/>
        <Stack.Screen name="Content" component={ContentScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}