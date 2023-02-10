"""
    Flask app used as backend API
"""


from flask import Flask

app = Flask(__name__)



# Members API route -- returns JSON array of members
@app.route("/test")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}


# debug = True for development mode
if __name__ == "__main__":
    app.run(debug = True)