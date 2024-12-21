import React from "react";

const projects = [
  {
    logo: "https://via.placeholder.com/100", // Replace with project logo
    title: "Project 1",
    description: "A brief description of the project goes here.",
    link: "https://example.com",
  },
  {
    logo: "https://via.placeholder.com/100",
    title: "Project 2",
    description: "A brief description of the project goes here.",
    link: "https://example.com",
  },
  {
    logo: "https://via.placeholder.com/100",
    title: "Project 3",
    description: "A brief description of the project goes here.",
    link: "https://example.com",
  },
];

function Projects() {
  return (
    <div className="p-8 ">
      <h1 className="text-4xl font-extrabold  mb-8 text-gray-900">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group transform transition-all duration-300 hover:scale-105 hover:rotate-1 bg-white border border-gray-200 shadow-lg rounded-lg p-6 hover:shadow-2xl hover:border-blue-500 overflow-hidden"
          >
            {/* Project Logo */}
            <div className="flex justify-center mb-6">
              <img
                src={project.logo}
                alt={`${project.title} Logo`}
                className="w-24 h-24 object-cover rounded-full border-4 border-gray-300 group-hover:border-blue-500 transition-all duration-300"
              />
            </div>

            {/* Project Title */}
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4 group-hover:text-blue-500 transition-all duration-300">
              {project.title}
            </h2>

            {/* Project Description */}
            <p className="text-gray-600 text-sm text-center mb-6">
              {project.description}
            </p>

            {/* Project Link */}
            <div className="text-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:underline transition-all duration-300"
              >
                View Project
              </a>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
