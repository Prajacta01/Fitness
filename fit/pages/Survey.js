import React, { useState, useNavigation } from 'react'
import { View, Text, StyleSheet, SafeAreaView, SectionList, Dimensions, Pressable, Button } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';

// const navigation = useNavigation();
const DATA = [
    {
        title: "Which of the following conditions do you have?",
        data: ["None", "Pregnancy", "Obese", "Over 50 Years", "Asthma"]
    }
];


const Item = ({ title }) => {
    return (
        <Button
            title={title}
            onPress={() =>
                navigation.navigate('WorkoutPlanner', { option: 'excersises' })
            }

        />
    );
};

// const Item1 = ({ navigation }) => {
//     return (
//         <Button
//             title="Pregnancy"
//             onPress={() =>
//                 navigation.navigate('WorkoutPlanner', { option: 'excersises' })
//             }

//         />
//     );
// };




const Survey = ({ navigation }) => (
    <SafeAreaView style={styles.container}>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
            )}
        />
    </SafeAreaView>
);

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
// import React, { useState } from 'react'
// import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
// import { BorderlessButton } from 'react-native-gesture-handler';
// import WorkoutPlanner from './WorkoutPlanner';

// const Survey = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.item}>
//                 <Pressable
//                 // style={({ pressed }) => pressed && styles.pressedItem}
//                 >
//                     <Text style={styles.text}>Survey</Text>
//                     <WorkoutPlanner option={'exercises'}/>
//                 </Pressable>
//             </View>
//         </View>
//     )
// }

// export default Survey;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#e7e4d9',
//         height: '100%',
//         width: '100%',
//     },
//     item: {
//         backgroundColor: '#6db06c',
//         maxHeight: '100%',
//         height: 80,
//     },
//     text: {
//         padding: 15,
//         fontSize: 30,
//         fondWeight: "",
//         opacity: 0.55,
//     },
//     setTextColor: {

//     }
// });
