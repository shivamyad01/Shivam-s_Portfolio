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
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      {/* Change grid-cols-1 to grid-cols-2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group transform transition-all duration-300 hover:-rotate-2 hover:scale-105 bg-white border border-gray-200 shadow-lg rounded-lg p-6 hover:shadow-2xl"
          >
            {/* Project Logo */}
            <div className="flex justify-center mb-4">
              <img
                src={project.logo}
                alt={`${project.title} Logo`}
                className="w-16 h-16 object-cover"
              />
            </div>

            {/* Project Title */}
            <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
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
                className="text-blue-500 font-semibold hover:underline"
              >
                View Project
              </a>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
