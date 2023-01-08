import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';

const exercises_map = {
    
    exercises : [
        {'name': 'Pushups', 'equipment': 'none', 'muscle group': 'chest, triceps', 'reps': 10, 'intensity': 'high', 'path': './exersizevids/Push Up.mp4 [OBpPJTO1VY0].mp4'},
        {'name': 'Squats', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high', 'path': './exersizevids/Squat.mp4 [KvoctBROlH8].mkv'},
        {'name': 'Lunges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high', 'path': './exersizevids/Lunges mp4 [HjDT1KiNxlE].mp4'},
        {'name': 'Burpees', 'equipment': 'none', 'muscle group': 'full body', 'reps': 10, 'intensity': 'high','path': './exersizevids/Burpees.MP4 [BJhUXgPcXnQ].webm'},
        {'name': 'Jump Squats', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/jump squats.MP4 [yTya56JrB9g].mp4'},
        {'name': 'Plank', 'equipment': 'none', 'muscle group': 'core', 'reps': 30, 'intensity': 'high','path': './exersizevids/Plank.mp4 [vHqOZavtFm4].mp4'},
        {'name': 'Mountain Climbers', 'equipment': 'none', 'muscle group': 'full body', 'reps': 20, 'intensity': 'high','path': './exersizevids/Mountain Climber.mp4 [H23aK3mtLFY].mp4'},
        {'name': 'Crunches', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/Crunches.mp4 [VlxknTakbcE].mp4'},
        {'name': 'Bicycles', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/Bicycles.MP4 [-HJiBdyfcmQ].mp4'},
        {'name': 'Tricep Dips', 'equipment': 'chair, bench', 'muscle group': 'triceps', 'reps': 10, 'intensity': 'high', 'path': './exersizevids/EMS TRICEPS DIPS .mp4 [ylOZCJfBHjg].mp4'},
        {'name': 'Step-Ups', 'equipment': 'step, bench', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high', 'path': './exersizevids/Step-Ups Demo      - YouTube  .mp4 [KWPfDMpCCnE].mp4'},
        {'name': 'Box Jumps', 'equipment': 'box, bench', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high','path': './exersizevids/Box Jump.mp4 [cESXLIrvx1c].mp4'},
        {'name': 'Jump Rope', 'equipment': 'jump rope', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'moderate','path': './exersizevids/'},
        {'name': 'High Knees', 'equipment': 'none', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Butt Kicks', 'equipment': 'none', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Side Plank', 'equipment': 'none', 'muscle group': 'core', 'reps': 30, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Russian Twists', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Flutter Kicks', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Scissor Kicks', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Sit-Ups', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Hip Thrusts', 'equipment': 'barbell', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Glute Bridges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Pelvic Thrusts', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Lateral Lunges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Reverse Lunges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Lunge Jumps', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Jump Lunges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Wall Sit', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 30, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Pistol Squats', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Barbell Squats', 'equipment': 'barbell', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/'},
        {'name': 'Dumbbell Squats', 'equipment': 'dumbbells', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/'}
        ],

    pregnant_exercises: [
        {'name': 'Plank', 'equipment': 'none', 'muscle group': 'core', 'reps': 30, 'intensity': 'high','path': './exersizevids/Plank.mp4 [vHqOZavtFm4].mp4'},
        {'name': 'Glute Bridges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/Glute Bridge [9NkNgFc_-Ys].mp4'},
        {'name': 'Side Plank', 'equipment': 'none', 'muscle group': 'core', 'reps': 30, 'intensity': 'high','path': './exersizevids/Side Plank.mp4 [11HLKYYAPzs].mp4'},
        {'name': 'Pelvic Thrusts', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/How to do a pelvic tilt lying down [44D6Xc2Fkek].mp4'},
        {'name': 'Bicycles', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/Bicycles.MP4 [-HJiBdyfcmQ].mp4'},
    ],

    obese_exercises: [
        {'name': 'Pushups', 'equipment': 'none', 'muscle group': 'chest, triceps', 'reps': 10, 'intensity': 'high', 'path': './exersizevids/Push Up.mp4 [OBpPJTO1VY0].mp4'},
        {'name': 'Squats', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high', 'path': './exersizevids/Squat.mp4 [KvoctBROlH8].mkv'},
        {'name': 'Lunges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high', 'path': './exersizevids/Lunges mp4 [HjDT1KiNxlE].mp4'},
        {'name': 'Bicycles', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/Bicycles.MP4 [-HJiBdyfcmQ].mp4'},
        {'name': 'Tricep Dips', 'equipment': 'chair, bench', 'muscle group': 'triceps', 'reps': 10, 'intensity': 'high', 'path': './exersizevids/EMS TRICEPS DIPS .mp4 [ylOZCJfBHjg].mp4'},
        {'name': 'Step-Ups', 'equipment': 'step, bench', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high', 'path': './exersizevids/Step-Ups Demo      - YouTube  .mp4 [KWPfDMpCCnE].mp4'},
        {'name': 'Box Jumps', 'equipment': 'box, bench', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high','path': './exersizevids/Box Jump.mp4 [cESXLIrvx1c].mp4'},
        {'name': 'Butt Kicks', 'equipment': 'none', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'high','path': './exersizevids/Exercise Library： Butt Kicks [lVZi-AwxLPo].mp4'},
        {'name': 'Side Plank', 'equipment': 'none', 'muscle group': 'core', 'reps': 30, 'intensity': 'high','path': './exersizevids/Side Plank.mp4 [11HLKYYAPzs].mp4'},
        {'name': 'Russian Twists', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/Russian Twists.mp4 [TctEDGiGEWU].mp4'},
        {'name': 'Flutter Kicks', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/Exercise Library： Flutter Kicks [WRnq49TAv-w].mp4'},
        {'name': 'Scissor Kicks', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids//home/nimnim/Fitness/exersizevids/HIIT Exercises： How to do Scissor Kicks [IBS84c5uA_A].mp4'},
        {'name': 'Sit-Ups', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/Get-up Sit-ups.mp4 [yTQ8Iq20DN8].mp4'},
        {'name': 'Hip Thrusts', 'equipment': 'barbell', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/Machine Hip Thrust [ZSPmIyX9RZs].mp4'},
    ],

    over_50_exercises: [
    {'name': 'Pushups', 'equipment': 'none', 'muscle group': 'chest, triceps', 'reps': 10, 'intensity': 'high', 'path': './exersizevids/Push Up.mp4 [OBpPJTO1VY0].mp4'},
        {'name': 'Squats', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high', 'path': './exersizevids/Squat.mp4 [KvoctBROlH8].mkv'},
        {'name': 'Lunges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high', 'path': './exersizevids/Lunges mp4 [HjDT1KiNxlE].mp4'},
        {'name': 'Bicycles', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/Bicycles.MP4 [-HJiBdyfcmQ].mp4'},
        {'name': 'Tricep Dips', 'equipment': 'chair, bench', 'muscle group': 'triceps', 'reps': 10, 'intensity': 'high', 'path': './exersizevids/EMS TRICEPS DIPS .mp4 [ylOZCJfBHjg].mp4'},
        {'name': 'Step-Ups', 'equipment': 'step, bench', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high', 'path': './exersizevids/Step-Ups Demo      - YouTube  .mp4 [KWPfDMpCCnE].mp4'},
        {'name': 'Box Jumps', 'equipment': 'box, bench', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high','path': './exersizevids/Box Jump.mp4 [cESXLIrvx1c].mp4'},
        {'name': 'Butt Kicks', 'equipment': 'none', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'high','path': './exersizevids/Exercise Library： Butt Kicks [lVZi-AwxLPo].mp4'},
        {'name': 'Russian Twists', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/Russian Twists.mp4 [TctEDGiGEWU].mp4'},
        {'name': 'Flutter Kicks', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/Exercise Library： Flutter Kicks [WRnq49TAv-w].mp4'},
        {'name': 'Scissor Kicks', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids//home/nimnim/Fitness/exersizevids/HIIT Exercises： How to do Scissor Kicks [IBS84c5uA_A].mp4'},
        {'name': 'Sit-Ups', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/Get-up Sit-ups.mp4 [yTQ8Iq20DN8].mp4'},
        {'name': 'Hip Thrusts', 'equipment': 'barbell', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/Machine Hip Thrust [ZSPmIyX9RZs].mp4'},
    ],

    stretches: [
        {'name': 'Chest stretch', 'equipment': 'none', 'muscle group': 'chest', 'reps': 'hold for 30 seconds', 'intensity': 'medium'},
        {'name': 'Tricep stretch', 'equipment': 'none', 'muscle group': 'triceps', 'reps': 'hold for 30 seconds', 'intensity': 'medium'},
        {'name': 'Shoulder stretch', 'equipment': 'none', 'muscle group': 'shoulders', 'reps': 'hold for 30 seconds', 'intensity': 'medium'},
        {'name': 'Downward facing dog', 'equipment': 'none', 'muscle group': 'back', 'reps': 'hold for 30 seconds', 'intensity': 'medium'},
        {'name': 'Cat-cow stretch', 'equipment': 'none', 'muscle group': 'back, stomach', 'reps': 10, 'intensity': 'medium'},
        {'name': 'Childs pose', 'equipment': 'none', 'muscle group': 'back, shoulders, arms', 'reps': 'hold for 30 seconds', 'intensity': 'medium'},
        {'name': 'Leg stretch', 'equipment': 'none', 'muscle group': 'legs, lower back', 'reps': 'hold for 30 seconds', 'intensity': 'medium'},
        {'name': 'Hip flexor stretch', 'equipment': 'none', 'muscle group': 'hip flexors', 'reps': 'hold for 30 seconds', 'intensity': 'medium'},
        {'name': 'Quad stretch', 'equipment': 'none', 'muscle group': 'quadriceps', 'reps': 'hold for 30 seconds', 'intensity': 'medium'},
        {'name': 'Calf stretch', 'equipment': 'none', 'muscle group': 'calves', 'reps': 'hold for 30 seconds', 'intensity': 'medium'}
    ]

}

const WorkoutPlanner = ({option}) => {
    const data = exercises_map[option][0];

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text>
                    {data.name}
                </Text>
            </View>
        </View>
    )
}

export default WorkoutPlanner;


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
}
);
