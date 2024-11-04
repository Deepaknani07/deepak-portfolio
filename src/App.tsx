// src/App.tsx
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="text-gray-800 bg-gray-100 min-h-screen font-sans flex flex-col items-center p-6">
      {/* Header Section */}
      <header className="w-full max-w-4xl flex justify-between items-center pb-8">
        <h1 className="text-4xl font-bold text-yellow-600">Deepak</h1>
        <nav className="space-x-4">
          <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 max-w-4xl">
        <h2 className="text-5xl font-bold text-gray-900">Hello, I am Deepak</h2>
        <p className="mt-4 text-xl text-gray-600">A developer passionate about creating and developing new technologies.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 max-w-4xl w-full text-center">
        <h3 className="text-3xl font-semibold text-blue-600">Projects</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {[
            { name: "Crime Management", description: "Manage and track crime data." },
            { name: "Placement Prediction", description: "Predict student placements." },
            { name: "Selenium Automation for eBay", description: "Automate tasks on eBay." },
          ].map((project) => (
            <div key={project.name} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform transition duration-200">
              <h4 className="text-2xl font-semibold text-gray-900">{project.name}</h4>
              <p className="mt-2 text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 max-w-4xl w-full text-center">
        <h3 className="text-3xl font-semibold text-blue-600">Skills</h3>
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          {["C", "C++", "Java", "Python", "Django", "AngularJS", "React", "TypeScript", "SQL"].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 font-medium shadow-md">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 max-w-4xl w-full text-center">
        <h3 className="text-3xl font-semibold text-blue-600">Let’s Connect</h3>
        <p className="mt-4 text-gray-600">Feel free to reach out through the form below.</p>
        <form className="mt-6 space-y-4 max-w-md mx-auto">
          <input type="text" placeholder="Name" className="w-full p-3 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Email" className="w-full p-3 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Message" className="w-full p-3 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-blue-500" rows={4} />
          <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700">Send</button>
        </form>
      </section>
    </div>
  );
};

export default App;
