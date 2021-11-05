const Hero = () => {
  return (
    <div className="text-4xl md:text-6xl font-bold tracking-tight text-center text-gray-600">
      <h1 className="mb-3 text-blue-500">Front-End Starter Pack</h1>
      <div className="flex flex-col gap-4 mt-10 text-4xl text-gray-400">
        <p>Core: React, Next.js, TypeScript, Tailwind CSS</p>
        <p>Testing: React Testing Library, Jest, Cypress</p>
      </div>
    </div>
  );
};

export default Hero;
