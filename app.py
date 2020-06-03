from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension

from stories import folk_tale, winter

app = Flask(__name__)

app.config["SECRET_KEY"] = "mysecretkey"

debug = DebugToolbarExtension(app)

text = ""

@app.route("/")
def home_page():
    return render_template("home.html")

@app.route("/prompt")
def prompt_page():
    global text
    if request.args["story"] == "folk-tale":
        words = folk_tale.prompts
        text = "folk-tale"
    else:
        words = winter.prompts
        text = "winter"
    return render_template("prompt.html", prompts=words)

@app.route("/story")
def story_page():
    global text
    if text == "folk-tale":
        text = folk_tale.generate(request.args)
    else:
        text = winter.generate(request.args)
    return render_template("story.html", text=text)