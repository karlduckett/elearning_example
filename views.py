from app import app
from flask import Flask, render_template

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/material_01')
def material_01():
    return render_template('material_01.html')

@app.route('/dangerous_goods')
def dangerous_goods():
    return render_template('dangerous_goods.html')

@app.route('/dangerous_goods_assessment')
def dangerous_goods_assessment():
    return render_template('dangerous_goods_assessment.html')