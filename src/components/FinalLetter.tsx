interface Props {
    letter: string;
  }
  
  const FinalLetter = ({ letter }: Props) => {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Your Final Cover Letter</h2>
        <div className="border p-4 rounded shadow bg-white">
          <p className="text-sm whitespace-pre-line">{letter}</p>
        </div>
      </div>
    );
  };
  
  export default FinalLetter;
  