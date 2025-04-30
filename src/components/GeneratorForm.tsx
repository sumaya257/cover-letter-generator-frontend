import { useState } from "react";
import axios from "axios";

interface Props {
  onGenerate: (template1: string, template2: string) => void;
}

const GeneratorForm = ({ onGenerate }: Props) => {
  const [jobDescription, setJobDescription] = useState("");
  const [resumeContent, setResumeContent] = useState("");
  const [loading, setLoading] = useState(false);

  // Debugging log to check form values
  console.log("Job Description:", jobDescription);
  console.log("Resume Content:", resumeContent);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Sending request to backend...");  // Log the submission
      const response = await axios.post('http://localhost:3000/generate', {
        job_description: jobDescription,
        resume_content: resumeContent,
      });
      console.log("Response from backend:", response.data);  // Log the response
  
      // Accessing the templates correctly from the response
      onGenerate(response.data.templates[0], response.data.templates[1]);
    } catch (error) {
      console.error("Error occurred during API call:", error);
      alert('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6">
      <textarea
        required
        placeholder="Paste Job Description"
        className="w-full p-2 border rounded"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        rows={5}
      />
      <textarea
        required
        placeholder="Paste Resume Content"
        className="w-full p-2 border rounded"
        value={resumeContent}
        onChange={(e) => setResumeContent(e.target.value)}
        rows={5}
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Generating..." : "Generate Cover Letters"}
      </button>
    </form>
  );
};

export default GeneratorForm;
