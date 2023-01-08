from flask import Flask, send_file

app = Flask(__name__)

@app.route('/video/jumprope')
def serve_video():
    return send_file('/home/nimnim/hackathon/exersizevids/Anthony Joshua jump rope workout [tLkXcK1QXp0].mp4', mimetype='video/mkv')
def serve_video2():
    return("test")
if __name__ == '__main__':
    app.run()
