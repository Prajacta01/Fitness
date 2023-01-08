import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import ImageDetection from "./pages/ImageDetection";
import Home from "./pages/Home"

const Stack = createStackNavigator();

const AppStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                initialRouteName="Home"
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ImageDetection"
                component={ImageDetection}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AppStackNavigator;