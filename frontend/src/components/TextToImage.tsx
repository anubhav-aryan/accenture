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
      <div className="justify-center text-center text-5xl text-black pb-14">
        Image Prediction
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Input Text:
            <input {...register("inputText")} type="text" />
          </label>
          <button type="submit" className="">
            <a className="group relative overflow-hidden rounded-lg border border-gray-100 bg-gray-100 px-5 py-3 font-medium text-gray-600 shadow-inner">
              <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-gray-600 transition-all duration-200 group-hover:w-full"></span>
              <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-gray-600 transition-all duration-200 group-hover:w-full"></span>
              <span className="ease absolute left-0 top-0 h-0 w-full bg-gray-600 transition-all delay-200 duration-300 group-hover:h-full"></span>
              <span className="ease absolute bottom-0 left-0 h-0 w-full bg-gray-600 transition-all delay-200 duration-300 group-hover:h-full"></span>
              <span className="absolute inset-0 h-full w-full bg-emerald-500 opacity-0 delay-300 duration-300 group-hover:opacity-100"></span>
              <span className="ease relative transition-colors delay-200 duration-300 group-hover:text-white">
                Predict
              </span>
            </a>
          </button>
        </form>

        {predictionResult && (
          <div className="flex flex-col items-end justify-end">
            <h2>Prediction Result:</h2>
            <img
              src={predictionResult.data[0]}
              alt="Predicted Image"
              className="mt-4" // Add margin-top for spacing
            />
          </div>
        )}
      </div>
    </div>
  );
}
