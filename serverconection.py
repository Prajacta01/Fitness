from flask import Flask, send_file
from exersizes import *
app = Flask(__name__)

@app.route('/workout')
def serve_video():
    return print(workout_generators())
def serve_video2():
    return print(stretches_generators())
if __name__ == '__main__':
    app.run()
