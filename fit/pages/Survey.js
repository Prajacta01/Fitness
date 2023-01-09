import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, SectionList, Dimensions, Pressable, Button } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';

const DATA = [
    {
        title: "Which of the following conditions do you have?",
        data: ["None", "Pregnancy", "Obese", "Over 50 Years", "Asthma"],
    }
];

const Item = ({ title, navigation }) => {
    return (
        <Button
            title={title}
            onPress={() => {
                navigation.navigate('Workouts', { option: title })
            }
            }

        />
    );
};

const Item1 = ({ navigation }) => {
    return (
        <Button
            title="Pregnancy"
            onPress={() =>
                navigation.navigate('WorkoutPlanner', { option: 'excersises' })
            }

        />
    );
};




const Survey = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} navigation={navigation} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        marginHorizontal: 16
    },
    item: {
        marginTop: 50,
        backgroundColor: '#background: rgba(109, 176, 108, 0.6);',
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#background: rgba(109, 176, 108, 0.25);",
        marginLeft: -50,
        padding: 35,
        textAlign: 'center',
    },
    title: {
        fontSize: 24
    }
});

export default Survey;
