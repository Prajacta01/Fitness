import random

# List of exercises
exercises = [
    {'name': 'Pushups', 'equipment': 'none', 'muscle group': 'chest, triceps', 'reps': 10, 'intensity': 'high'},
    {'name': 'Squats', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Lunges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high'},
    {'name': 'Jumping Jacks', 'equipment': 'none', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'moderate'},
    {'name': 'Burpees', 'equipment': 'none', 'muscle group': 'full body', 'reps': 10, 'intensity': 'high'},
    {'name': 'Jump Squats', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Plank', 'equipment': 'none', 'muscle group': 'core', 'reps': 30, 'intensity': 'high'},
    {'name': 'Mountain Climbers', 'equipment': 'none', 'muscle group': 'full body', 'reps': 20, 'intensity': 'high'},
    {'name': 'Crunches', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Bicycles', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Tricep Dips', 'equipment': 'chair, bench', 'muscle group': 'triceps', 'reps': 10, 'intensity': 'high'},
    {'name': 'Step-Ups', 'equipment': 'step, bench', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Box Jumps', 'equipment': 'box, bench', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high'},
    {'name': 'Jump Rope', 'equipment': 'jump rope', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'moderate'},
    {'name': 'High Knees', 'equipment': 'none', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'high'},
    {'name': 'Butt Kicks', 'equipment': 'none', 'muscle group': 'cardio', 'reps': 50, 'intensity': 'high'},
    {'name': 'Side Plank', 'equipment': 'none', 'muscle group': 'core', 'reps': 30, 'intensity': 'high'},
    {'name': 'Russian Twists', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Flutter Kicks', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Scissor Kicks', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Sit-Ups', 'equipment': 'none', 'muscle group': 'core', 'reps': 20, 'intensity': 'high'},
    {'name': 'Hip Thrusts', 'equipment': 'barbell', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Glute Bridges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Pelvic Thrusts', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Lateral Lunges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high'},
    {'name': 'Reverse Lunges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high'},
    {'name': 'Lunge Jumps', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high'},
    {'name': 'Jump Lunges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 10, 'intensity': 'high'},
    {'name': 'Wall Sit', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 30, 'intensity': 'high'},
    {'name': 'Pistol Squats', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Barbell Squats', 'equipment': 'barbell', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Dumbbell Squats', 'equipment': 'dumbbells', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'}
    ]

pregnant_exercises = [
    {'name': 'Plank', 'equipment': 'none', 'muscle group': 'core', 'reps': 30, 'intensity': 'high'},
    {'name': 'Side Plank', 'equipment': 'none', 'muscle group': 'core', 'reps': 30, 'intensity': 'high'},
    {'name': 'Glute Bridges', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
    {'name': 'Pelvic Thrusts', 'equipment': 'none', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'},
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

over _50_exercises = [
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
    {'name': 'Dumbbell Squats', 'equipment': 'dumbbells', 'muscle group': 'legs, glutes', 'reps': 15, 'intensity': 'high'}    
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

# Number of rounds
rounds = 3

# Number of exercises per round
exercises_per_round = 4

# Generate the workout
for i in range(rounds):
    print(f'Round {i+1}:')
    for j in range(exercises_per_round):
        exercise = random.choice(exercises)
        print(f'    {exercise["name"]} ({exercise["equipment"]}): {exercise["reps"]} reps at {exercise["intensity"]} intensity')
    print('')

print(f'Stretches:')
for j in range(5):
    stretch = random.choice(stretches)
    print(f'    {stretch["name"]} ({stretch["equipment"]}): {stretch["reps"]} reps at {stretch["intensity"]} intensity')
    

