import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function InfoCard(props) {
    return (
        <View style={styles.item}>
            <Pressable
                style={{ flexDirection: 'row' }}
                onPress={props.onPress}
            >
                <View style={{ flexDirection: 'column', alignItems: 'center', width: '50%' }}>
                    <Text style={styles.text}>{props.title}</Text>
                    {props.children}
                </View>
                <View style={{ flexWrap: 'wrap', flex: 1 }}>
                    <Text style={[styles.desc, { flexWrap: 'wrap', flex: 1 }]}>{props.description}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 8,
        backgroundColor: '#6db06c',
        height: 150,
        width: 250,
        borderRadius: 10
    },
    text: {
        fontSize: 30,
        fontWeight: "700",
        color: "#404C4D",
    },
    desc: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "#404C4D"
    }
});

