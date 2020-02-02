from app import app
from flask import Flask, render_template

global_user = 'Example User'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/leaderboard')
def leaderboard():
    return render_template('leaderboard.html')

@app.route('/feedback')
def feedback():
    return render_template('feedback.html')

@app.route('/profile')
@app.route('/profile/<username>')
def profile(username):
    return render_template('profile.html', username = global_user)

@app.route('/module_select')
def material_01():
    return render_template('module_select.html')

@app.route('/dangerous_goods')
def dangerous_goods():
    return render_template('dangerous_goods.html')

@app.route('/dangerous_goods_assessment')
def dangerous_goods_assessment():
    return render_template('dangerous_goods_assessment.html')