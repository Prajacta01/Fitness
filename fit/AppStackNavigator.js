import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// import ImageDetection from "./pages/ImageDetection";
import Home from "./pages/Home"
import Workouts from './pages/Workouts';
import Nutrition from "./pages/Nutrition"
import Survey from "./pages/Survey"
import WorkoutPlanner from './pages/WorkoutPlanner';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppStackNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Nutrition"
            activeColor="brown"
            barStyle={{ backgroundColor: '#6db06c' }}
        >
            <Tab.Screen
                name="Nutrition"
                component={Nutrition}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="food-apple-outline" size={30} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="home" size={30} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Workouts"
                component={Workouts}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="dumbbell" size={30} color={color} />
                    )
                }}
            />

            {/* <Tab.Screen
                name="Nutrition"
                component={Nutrition}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="food-apple-outline" size={30} color="#404C4D" />
                    )
                }}
            /> */}
            <Tab.Screen
                name="Survey"
                component={Survey}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="list-alt" size={30} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default AppStackNavigator;