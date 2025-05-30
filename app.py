from flask import Flask, render_template, jsonify, request
import requests

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/api/to-human', methods=['POST'])
def to_human():
    content = request.json.get('text', '')
    url = "https://chatgpt-42.p.rapidapi.com/aitohuman"
    headers = {
        "content-type": "application/json",
        "X-RapidAPI-Key": 'a67d2a453emsh4d691d4dacd48efp13df79jsned94b02796f0',
        "X-RapidAPI-Host": "chatgpt-42.p.rapidapi.com"
    }
    payload = {"text": content}
    response = requests.post(url, json=payload, headers=headers)
    return jsonify(response.json())


if __name__ == "__main__":
  app.run(host='0.0.0.0', port=5000, debug=True)