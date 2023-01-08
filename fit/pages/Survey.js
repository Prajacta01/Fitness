import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import WorkoutPlanner from './WorkoutPlanner';

const Survey = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Pressable
                // style={({ pressed }) => pressed && styles.pressedItem}
                >
                    <Text style={styles.text}>Survey</Text>
                    <WorkoutPlanner option={'exercises'}/>
                </Pressable>
            </View>
        </View>
    )
}

export default Survey;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7e4d9',
        height: '100%',
        width: '100%',
    },
    item: {
        backgroundColor: '#6db06c',
        maxHeight: '100%',
        height: 80,
    },
    text: {
        padding: 15,
        fontSize: 30,
        fondWeight: "",
        opacity: 0.55,
    },
    setTextColor: {

    }
});
