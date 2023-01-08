import random


# List of exercises
exercises = [
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
    # {'name': 'Jump Rope', 'equipment': 'jump rope', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'moderate','path': './exersizevids/},
    # {'name': 'High Knees', 'equipment': 'none', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Butt Kicks', 'equipment': 'none', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Side Plank', 'equipment': 'none', 'muscle group': 'core', 'reps': 30, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Russian Twists', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Flutter Kicks', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Scissor Kicks', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Sit-Ups', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Hip Thrusts', 'equipment': 'barbell', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Glute Bridges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Pelvic Thrusts', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Lateral Lunges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Reverse Lunges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Lunge Jumps', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Jump Lunges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Wall Sit', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 30, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Pistol Squats', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Barbell Squats', 'equipment': 'barbell', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/},
    # {'name': 'Dumbbell Squats', 'equipment': 'dumbbells', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high','path': './exersizevids/}
    ]

pregnant_exercises = [
    {'name': 'Plank', 'equipment': 'none', 'muscle group': 'core', 'reps': 30, 'intensity': 'high'},
    {'name': 'Side Plank', 'equipment': 'none', 'muscle group': 'core', 'reps': 30, 'intensity': 'high'},
    {'name': 'Glute Bridges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Pelvic Thrusts', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Bicycles', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high','path': './exersizevids/'}

]

obese_exercises = [
    {'name': 'Pushups', 'equipment': 'none', 'muscle group': 'chest, triceps', 'reps': 10, 'intensity': 'high'},
    {'name': 'Squats', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Lunges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high'},
    {'name': 'Bicycles', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Tricep Dips', 'equipment': 'chair, bench', 'muscle group': 'triceps', 'reps': 10, 'intensity': 'high'},
    {'name': 'Step-Ups', 'equipment': 'step, bench', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Box Jumps', 'equipment': 'box, bench', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high'},
    {'name': 'High Knees', 'equipment': 'none', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'high'},
    {'name': 'Butt Kicks', 'equipment': 'none', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'high'},
    {'name': 'Russian Twists', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Flutter Kicks', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Scissor Kicks', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Hip Thrusts', 'equipment': 'barbell', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
]

over_50_exercises = [
    {'name': 'Pushups', 'equipment': 'none', 'muscle group': 'chest, triceps', 'reps': 10, 'intensity': 'high'},
    {'name': 'Squats', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Lunges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high'},
    {'name': 'Bicycles', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Tricep Dips', 'equipment': 'chair, bench', 'muscle group': 'triceps', 'reps': 10, 'intensity': 'high'},
    {'name': 'Step-Ups', 'equipment': 'step, bench', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Box Jumps', 'equipment': 'box, bench', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high'},
    {'name': 'High Knees', 'equipment': 'none', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'high'},
    {'name': 'Butt Kicks', 'equipment': 'none', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'high'},
    {'name': 'Russian Twists', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Flutter Kicks', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Scissor Kicks', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Hip Thrusts', 'equipment': 'barbell', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
]

asthma_exercises = [
    {'name': 'Plank', 'equipment': 'none', 'muscle group': 'core', 'reps': 30, 'intensity': 'high'},
    {'name': 'Tricep Dips', 'equipment': 'chair, bench', 'muscle group': 'triceps', 'reps': 10, 'intensity': 'high'},
    {'name': 'Wall Sit', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 30, 'intensity': 'high'},
    {'name': 'Pistol Squats', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Barbell Squats', 'equipment': 'barbell', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Dumbbell Squats', 'equipment': 'dumbbells', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},    
    {'name': 'High Knees', 'equipment': 'none', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'high'},
    {'name': 'Butt Kicks', 'equipment': 'none', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'high'},
    {'name': 'Side Plank', 'equipment': 'none', 'muscle group': 'core', 'reps': 30, 'intensity': 'high'},
    {'name': 'Russian Twists', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Flutter Kicks', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Scissor Kicks', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Sit-Ups', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Hip Thrusts', 'equipment': 'barbell', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Glute Bridges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
]




stretches = [
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

def workout_generators():   
    rounds = 3
    exercises_per_round = 4
    workout_stretches = []
    worko = []
    stre = []
    for i in range(rounds):
        worko.append(f'Round {i+1}:')
        for j in range(exercises_per_round):
            exercise = random.choice(exercises)
            worko.append(f'    {exercise["name"]} ({exercise["equipment"]}): {exercise["reps"]} reps at {exercise["intensity"]} intensity : path: {exercise["path"]}')
    
    stre.append(f'Stretches:')
    for j in range(5):
        stretch = random.choice(stretches)
        stre.append(f'    {stretch["name"]} ({stretch["equipment"]}): {stretch["reps"]} reps at {stretch["intensity"]} intensity')
    workout_stretches.append(worko)
    workout_stretches.append(stre)
    return(workout_stretches)
def stretches_generators():
    stre = []
    stre.append(f'Stretches:')
    for j in range(5):
        stretch = random.choice(stretches)
        stre.append(f'    {stretch["name"]} ({stretch["equipment"]}): {stretch["reps"]} reps at {stretch["intensity"]} intensity')
    return(stre)

from flask import Flask, send_file
app = Flask(__name__)

@app.route('/workout')
def serve_video():
    return workout_generators()

if __name__ == '__main__':
    app.run()
