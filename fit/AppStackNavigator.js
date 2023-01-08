import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import ImageDetection from "./pages/ImageDetection";
import Home from "./pages/Home"
import Nutrition from "./pages/Nutrition"
import Survey from "./pages/Survey"

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
            <Stack.Screen
                name="Nutrition"
                component={Nutrition}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Survey"
                component={Survey}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AppStackNavigator;