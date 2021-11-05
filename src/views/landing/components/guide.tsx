import CodeSnippet from "./code-snippet";
import Title from "./title";

const Guide = () => {
  return (
    <div className="flex flex-col justify-items-start px-6 container mx-auto mt-12 text-gray-600">
      <Title text="Prerequisites" />
      <CodeSnippet label="Install dependencies" snippet="npm install" />
      <Title text="Running the application" />
      <CodeSnippet label="Development" snippet="npm run dev" />
      <CodeSnippet label="Production" snippet="npm start" />
      <Title text="Testing" />
      <CodeSnippet label="Running unit & integration tests" snippet="npm run test" />
      <CodeSnippet label="Running end to end (E2E) tests" snippet="npm run test:e2e" />
    </div>
  );
};

export default Guide;
