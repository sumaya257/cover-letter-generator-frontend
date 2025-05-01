import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa";

interface Props {
  onGenerate: (template1: string, template2: string) => void;
}

const GeneratorForm = ({ onGenerate }: Props) => {
  const [jobDescription, setJobDescription] = useState("");
  const [resumeContent, setResumeContent] = useState("");
  const [loading, setLoading] = useState(false);

  // Set API URL based on the environment (production or development)
  const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/generate" // Local URL for development
      : "https://cover-letter-generator-backend-production.up.railway.app/generate"; // Production URL
      console.log("Using API URL: ", API_URL);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobDescription.trim() || !resumeContent.trim()) {
      toast.error("Please fill out both fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(API_URL, {
        job_description: jobDescription,
        resume_content: resumeContent,
      });
      onGenerate(response.data.templates[0], response.data.templates[1]);
      toast.success("Cover letters generated successfully!");
    } catch (error) {
      console.error("API Error:", error);
      toast.error("Failed to generate cover letters. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" bg-white p-8 rounded-2xl shadow-lg max-w-6xl mx-auto mt-5 w-full"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Cover Letter Generator
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Description
            </label>
            <textarea
              required
              placeholder="Paste the job description here..."
              className="w-full h-full min-h-[300px] p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Resume Content
            </label>
            <textarea
              required
              placeholder="Paste your resume content here..."
              className="w-full h-full min-h-[300px] p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              value={resumeContent}
              onChange={(e) => setResumeContent(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            type="submit"
            disabled={loading}
            className={`w-full md:w-auto px-6 flex justify-center items-center gap-2 py-3 text-white rounded-lg font-semibold transition duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" /> Generating...
              </>
            ) : (
              "Generate Cover Letters"
            )}
          </button>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default GeneratorForm;
