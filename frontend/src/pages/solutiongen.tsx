import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const Solutiongen = () => {
  const [file, setFile] = useState<File | null>(null);
  const [inference, setInference] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const onFileUpload = async () => {
    if (!file) return;
    setIsLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/analyze",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setInference(response.data.response);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-4 text-4xl font-bold">Image Text Reader </h1>
      <input
        type="file"
        onChange={onFileChange}
        className="mb-6 p-4 border border-black rounded-md"
      />
      <button
        onClick={onFileUpload}
        className="px-7 py-3 text-white bg-green-500 hover:bg-green-400 rounded-xl text-lg"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Upload Image"}
      </button>{" "}
      {inference && (
        <div className="text-lg w-4/5 pt-10">
          <ReactMarkdown>{inference}</ReactMarkdown>
        </div>
      )}
      <div className="py-4">
        <Link href="feedback">
          <button className="px-7 py-3 text-white bg-green-500 hover:bg-green-400 rounded-xl text-lg">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Solutiongen;