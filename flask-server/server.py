"""
#
# Author: David Luby
# Date created: 2/10/2023
#
# This script serves a backend API facilitated by Flask
"""


from flask import Flask
import db_CRUD
import get_statistics


app = Flask(__name__)


# Members API route -- returns JSON array of members
@app.route("/dummy")
def showStats():
    out = get_statistics.main()
    
    return {"dummy": out}


# debug = True for development mode
if __name__ == "__main__":
    app.run(debug = True)