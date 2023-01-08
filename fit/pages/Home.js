import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Pressable
                // style={({ pressed }) => pressed && styles.pressedItem}
                >
                    <Text style={styles.text}>oho</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: '#1e085a',
        height: '100%',
        width: '100%',
        backgroundColor: 'pink'
    },
    item: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        maxHeight: 100
    },
    text: {
        padding: 8,
    }
});

