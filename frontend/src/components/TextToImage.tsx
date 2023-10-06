// components/ImagePrediction.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { client } from '@gradio/client';

interface PredictionResult {
  data: string[];
}

export default function ImagePrediction() {
  const { register, handleSubmit } = useForm();
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);

  const onSubmit = async (data: { inputText: string }) => {
    try {
      const app = await client("https://veer15-stabilityai-stable-diffusion-2-1.hf.space/");
      const result = await app.predict("/predict", [data.inputText]);
      setPredictionResult(result);
    } catch (error) {
      console.error('Prediction error:', error);
    }
  };

  return (
    <div>
      <h1>Image Prediction</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Input Text:
          <input {...register("inputText")} type="text" />
        </label>
        <button type="submit">Predict</button>
      </form>
      {predictionResult && (
        <div>
          <h2>Prediction Result:</h2>
          <img src={predictionResult.data[0]} alt="Predicted Image" />
        </div>
      )}
    </div>
  );
}

