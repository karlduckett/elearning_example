from flask import Flask, render_template

app = Flask(__name__)

from views import *

app.config.from_pyfile('config.py')

if __name__ == "__main__":
    app.run()