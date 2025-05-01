import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import GeneratorForm from "./components/GeneratorForm";
import TemplateSelector from "./components/TemplateSelector";
import FinalLetter from "./components/FinalLetter";

function App() {
  const [templates, setTemplates] = useState<{ t1: string; t2: string } | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleGenerate = (t1: string, t2: string) => {
    setTemplates({ t1, t2 });
    navigate("/select");
  };

  const handleSelect = (template: string) => {
    setSelectedLetter(template);
    navigate("/final");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold my-8 text-center">Welcome to Our Cover Letter Generator</h1>

      <Routes>
        <Route path="/" element={<GeneratorForm onGenerate={handleGenerate} />} />
        <Route
          path="/select"
          element={
            templates && (
              <TemplateSelector
                template1={templates.t1}
                template2={templates.t2}
                onSelect={handleSelect}
              />
            )
          }
        />
        <Route
          path="/final"
          element={selectedLetter ? <FinalLetter letter={selectedLetter} /> : <p>No letter selected.</p>}
        />
      </Routes>
    </div>
  );
}

export default App;
