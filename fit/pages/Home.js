import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import InfoCard from '../components/InfoCard';

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#404C4D' }}>SNTP</Text>
            </View>
            <View style={styles.wrapper}>
                <InfoCard
                    title="Workout Planner"
                    onPress={() => navigation.navigate("ImageDetection")}
                >
                    <FontAwesome5 name="calendar-alt" size={62} color="#404C4D" /> 
                </InfoCard>
                <InfoCard
                    title="Nutrition"
                    onPress={() => navigation.navigate("Nutrition")}
                >
                    <MaterialCommunityIcons name="food-apple-outline" size={75} color="#404C4D" />
                </InfoCard>
                <InfoCard
                    title="Survey"
                    onPress={() => navigation.navigate("ImageDetection")}
                >
                    <FontAwesome5 name="list-alt" size={60} color="#404C4D" />
                </InfoCard>
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7e4d9',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        padding: '10%'
    },
    header: {
        // height: 80
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        height: '150%',
        width: '100%'
    },
});


