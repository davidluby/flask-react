"""
#
# Author: David Luby
# Date created: 2/10/2023
#
# This script serves a backend API facilitated by Flask for a React NBA
# contract evaluation web application
"""

# Package imports

# The flask request package contains data from the browser client (GET, POST)
from flask import Flask, request, jsonify
# The requests library is used to make HTTP requests
import requests


# Script imports
import player_stats


app = Flask(__name__)

# dummy API route -- returns JSON array
@app.route("/get_stats", methods=["POST", "GET"])
def showStats():
    data = request.get_json()
    print("Out:", data)
    stats = player_stats.main(data)
    
    return {"stats": stats}


# debug = True for development mode
if __name__ == "__main__":
    app.run(debug = True)