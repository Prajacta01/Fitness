import { createStackNavigator } from "@react-navigation/stack";

import ImageDetection from "./pages/ImageDetection";

const Stack = createStackNavigator();

const AppStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ImageDetection"
                component={ImageDetection}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AppStackNavigator;