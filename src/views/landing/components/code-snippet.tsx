interface IProps {
  label: string;
  snippet: string;
}

const CodeSnippet = ({ label, snippet }: IProps) => {
  return (
    <>
      <p className="text-2xl mb-2 mt-4">{label}:</p>
      <div className="bg-gray-700 text-white p-4 rounded-lg">
        <code>{snippet}</code>
      </div>
    </>
  );
};

export default CodeSnippet;
