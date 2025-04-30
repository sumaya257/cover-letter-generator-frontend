interface Props {
    template1: string;
    template2: string;
    onSelect: (template: string) => void;
  }
  
  const TemplateSelector = ({ template1, template2, onSelect }: Props) => {
    console.log('Template selected:');  // Debugging log
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <div className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Template 1</h2>
          <p className="text-sm">{template1}</p>
          <button onClick={() => onSelect(template1)} className="mt-4 bg-green-500 text-white py-1 px-3 rounded">
            Select
          </button>
        </div>
        <div className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Template 2</h2>
          <p className="text-sm">{template2}</p>
          <button onClick={() => onSelect(template2)} className="mt-4 bg-green-500 text-white py-1 px-3 rounded">
            Select
          </button>
        </div>
      </div>
    );
  };
  
  export default TemplateSelector;
  