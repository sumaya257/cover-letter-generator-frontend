import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import { FiEdit, FiDownload } from "react-icons/fi"; // Importing icons

interface Props {
  letter: string;
}

const FinalLetter = ({ letter }: Props) => {
  const [editableLetter, setEditableLetter] = useState(letter);
  const [isEditable, setIsEditable] = useState(false); // track edit mode
  const navigate = useNavigate();

  const handleDownload = () => {
    const doc = new jsPDF({
      unit: "mm",
      format: "a4",
    });
    doc.setFont("Times", "Normal");
    doc.setFontSize(12);
    doc.text(editableLetter, 20, 20, { maxWidth: 170 }); // 20mm margins
    doc.save("cover_letter.pdf");
  };

  return (
    <div className="py-6 px-4 flex flex-col items-center relative">
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">
        Your Final Cover Letter
      </h2>

      {/* Edit & Download icons on the top right */}
      <div className="absolute top-4 right-4 flex gap-4">
        <button
          onClick={() => setIsEditable(!isEditable)} // Toggle edit mode
          className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600"
          title="Edit"
        >
          <FiEdit size={24} />
        </button>
        <button
          onClick={handleDownload}
          className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700"
          title="Download"
        >
          <FiDownload size={24} />
        </button>
      </div>

      <div
        className="bg-white border shadow rounded p-6 overflow-auto"
        style={{
          width: "794px", // A4 width
          height: "1123px", // A4 height
        }}
      >
        <textarea
          value={editableLetter}
          onChange={(e) => setEditableLetter(e.target.value)}
          className="w-full h-full resize-none text-justify text-gray-800 leading-relaxed outline-none"
          style={{ lineHeight: "1.75" }}
          readOnly={!isEditable} // Make it editable only if isEditable is true
        />
      </div>

      {/* Download and Back buttons below */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={handleDownload}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Download
        </button>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default FinalLetter;
