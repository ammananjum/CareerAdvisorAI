import joblib
import pandas as pd
import sys
import warnings

print("=== Improved AI Predictor Started ===", flush=True)

try:
    # Ignore version mismatch warnings
    warnings.filterwarnings("ignore", category=UserWarning)

    # Load model
    model = joblib.load("career_pipeline_model.pkl")
    print("Model loaded", flush=True)

    # Inputs
    cgpa = float(sys.argv[1])
    skills = sys.argv[2]
    interests = sys.argv[3]

    print("Inputs:", cgpa, skills, interests, flush=True)

    # Predict
    input_text = f"{skills} {interests} CGPA:{cgpa}"
    career = model.predict([input_text])[0]

    print(career, flush=True)

except Exception as e:
    print("Error:", e, flush=True)
    print("Unknown Career", flush=True)
