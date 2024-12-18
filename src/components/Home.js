import React, { useEffect, useState } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "./logo.png";

function Home() {
  // State to store GitHub project data
  const [projects, setProjects] = useState([]);

  // Fetch GitHub projects using the GitHub API
  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/shivamyad01/repos');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      }
    };

    fetchGitHubProjects();
  }, []);

  return (
    <div className="flex flex-col items-center md:items-start">
      {/* Bordered Rectangle with Image */}
      <div className="border-4 border-blue-500 p-2 rounded-lg mb-6">
        <img
          src={Logo} // Replace with your image URL
          alt="Shivam Yadav"
          className="w-48 h-48 object-cover rounded-md"
        />
      </div>

      {/* Intro Text */}
      <h1 className="text-4xl font-extrabold text-gradient mb-2 text-center md:text-left">
        Hi, I'm <span className="text-blue-500">Shivam Yadav</span>
      </h1>
      <p className="text-xl text-gray-700 text-center md:text-left mb-4">
        I make <span className="text-green-500">full-stack products</span> that people love.
      </p>
      <p className="text-md text-gray-600 text-center md:text-left mb-4">
        Developer, 2x acquired Founder, Indie Hacker, OSS Contributor, Guitarist, and Student. I read, write, and travel for fun.
      </p>
      <p className="text-md text-gray-600 text-center md:text-left mb-6">
        I also create content to inspire and help others get started with coding and share my experiences as a developer and entrepreneur. With more than{" "}
        <strong className="text-yellow-500">20,000 followers</strong> on Instagram, I have a small but growing community of developers. Check it out here -{" "}
        <a
          href="https://shivaimyad.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline hover:text-blue-600 transition duration-300"
        >
          shivaimyad.dev
        </a>
      </p>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-6">
        <a
          href="https://github.com/yourgithubprofile" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-500"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/yourlinkedinprofile" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-500"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://instagram.com/yourinstagramprofile" // Replace with your Instagram URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-500"
        >
          <FaInstagram size={30} />
        </a>
      </div>

     

      {/* GitHub Projects Section */}
      <div className="w-full text-center mt-8">
        <h2 className="text-3xl font-extrabold mb-6 text-blue-600">Latest GitHub Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <p className="text-lg text-gray-500">Loading projects...</p>
          ) : (
            projects.slice(0, 6).map((project) => (
              <div
                key={project.id}
                className="border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 hover:underline"
                  >
                    {project.name}
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description || "No description available."}</p>
                <span className="text-gray-500 text-xs font-medium">{project.language}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
