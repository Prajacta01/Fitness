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
        paddingTop: 2,
        backgroundColor: '#e7e4d9',
        height: '100%',
        width: '100%',
    },
    item: {
        margin: 8,
        backgroundColor: '#6db06c',
        maxHeight: '20%'
    },
    text: {
        padding: 8,
    }
});

