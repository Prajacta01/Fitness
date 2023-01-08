import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function InfoCard(props) {
    return (
        <View style={styles.item}>
            <Pressable
                style={{ flexDirection: 'row' }}
                onPress={props.onPress}
            >
                <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%' }}>
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
        backgroundColor: '#background: rgba(109, 176, 108, 0.6);',
        height: 155,
        width: 350,
        borderRadius: 10,
        marginTop: .5,
        display: "flex",
        alignItems: 'center',
        margin: "auto",
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: "700",
        color: "#404C4D",
        margin: "auto",
        textAlign: "center",
        marginBottom: 10
    },
    desc: {
        paddingLeft: 10,
        paddingRight: 20,
        fontSize: 20,
        paddingTop: 10,
        fontWeight: "bold",
        color: "#404C4D"
    }
});