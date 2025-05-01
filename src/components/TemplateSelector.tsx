import { useNavigate } from "react-router-dom";


interface Props {
  template1: string;
  template2: string;
  onSelect: (template: string) => void;
}

const TemplateSelector = ({ template1, template2, onSelect }: Props) => {
  const navigate = useNavigate(); // Using useNavigate hook for navigation
  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Template 1 */}
      <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-all bg-white hover:bg-gray-50">
        <h2 className="text-xl font-semibold mb-4 text-center text-purple-700">Template 1</h2>
        <p className="text-sm text-gray-600 mb-4 text-justify">{template1}</p>
        <button
          onClick={() => onSelect(template1)}
          className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
        >
          Select Template 1
        </button>
      </div>

      {/* Template 2 */}
      <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-all bg-white hover:bg-gray-50">
        <h2 className="text-xl font-semibold mb-4 text-center text-purple-700">Template 2</h2>
        <p className="text-sm text-gray-600 mb-4 text-justify">{template2}</p>
        <button
          onClick={() => onSelect(template2)}
          className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
        >
          Select Template 2
        </button>
      </div>
    </div>
    {/* Back Button */}
    <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate(-1)} // Using navigate function to go back
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default TemplateSelector;
