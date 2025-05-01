import { useState } from "react";
import GeneratorForm from "./components/GeneratorForm";
import TemplateSelector from "./components/TemplateSelector";
import FinalLetter from "./components/FinalLetter";

function App() {
  const [templates, setTemplates] = useState<{ t1: string; t2: string } | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const handleGenerate = (t1: string, t2: string) => {
    setTemplates({ t1, t2 });
  };

  const handleSelect = (template: string) => {
    setSelectedLetter(template);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold my-8">Welcome to Our Cover Letter Generator</h1>
      {!templates && !selectedLetter && <GeneratorForm onGenerate={handleGenerate} />}
      {templates && !selectedLetter && (
        <TemplateSelector
          template1={templates.t1}
          template2={templates.t2}
          onSelect={handleSelect}
        />
      )}
      {selectedLetter && <FinalLetter letter={selectedLetter} />}
    </div>
  );
}

export default App;
