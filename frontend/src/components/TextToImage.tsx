// components/ImagePrediction.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { client } from "@gradio/client";

interface PredictionResult {
  data: string[];
}

export default function ImagePrediction() {
  const { register, handleSubmit } = useForm();
  const [predictionResult, setPredictionResult] =
    useState<PredictionResult | null>(null);

  const onSubmit = async (data: { inputText: string }) => {
    try {
      const app = await client(
        "https://veer15-stabilityai-stable-diffusion-2-1.hf.space/",
      );
      const result = await app.predict("/predict", [data.inputText]);
      setPredictionResult(result);
    } catch (error) {
      console.error("Prediction error:", error);
    }
  };

  return (
    <div>
      <div className="justify-center text-center text-5xl text-black">
        Image Prediction
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Input Text:
          <input {...register("inputText")} type="text" />
        </label>
        <button
          type="submit"
          className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800"
        >
          {" "}
          <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
            {" "}
            Predict{" "}
          </span>{" "}
        </button>
      </form>
      
      {predictionResult && (
        <div className="flex">
          <h2>Prediction Result:</h2>
          <img src={predictionResult.data[0]} alt="Predicted Image" />
        </div>
      )}
    </div>
  );
}
