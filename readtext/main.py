from flask import Flask, request, jsonify
from flask_cors import CORS

from PIL import Image
import io
import base64
import google.generativeai as genai
from dotenv import load_dotenv
import os

# Load environment variables from a .env file
load_dotenv()

# Configure the GenerativeAI API key using the loaded environment variable
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Set up the model configuration for text generation
generation_config = {
    "temperature": 0.4,
    "top_p": 1,
    "top_k": 32,
    "max_output_tokens": 4096,
}

# Define safety settings for content generation
safety_settings = [
    {"category": f"HARM_CATEGORY_{category}", "threshold": "BLOCK_MEDIUM_AND_ABOVE"}
    for category in ["HARASSMENT", "HATE_SPEECH", "SEXUALLY_EXPLICIT", "DANGEROUS_CONTENT"]
]

# Initialize the GenerativeModel with the specified model name, configuration, and safety settings
model = genai.GenerativeModel(
    model_name="gemini-pro-vision",
    generation_config=generation_config,
    safety_settings=safety_settings,
)

input_prompt = """
You have to analyze the image provided and give the text written in the image. 

**Analysis Guidelines:**

1. **Text Written in the image** Identify and transcribe the text written in the image accurately.


**Disclaimer:**
*"Please note that the text provided is based on analysis and to the best of our ability. There are chances of error so use accordingly."*

"""

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'})
    image = request.files['image']
    image = Image.open(image)
    response = model.generate_content([input_prompt,image])
    print(response.text)
    return jsonify({'response': response.text})

if __name__ == '__main__':
    app.run(debug=True)