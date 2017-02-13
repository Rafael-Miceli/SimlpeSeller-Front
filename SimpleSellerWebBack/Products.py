from flask import Flask, Response, jsonify
from flask_cors import CORS, cross_origin
from bson.json_util import dumps
from bson import json_util
import pymongo


app = Flask(__name__)
client = pymongo.MongoClient("localhost", 27017)
db = client.test
CORS(app)

@app.route('/')
@app.route('/index')
def index():
    
    products = dumps(db.product.find())

    return Response(products, mimetype='application/json')

if __name__ == "__main__":
    app.run(debug="true")