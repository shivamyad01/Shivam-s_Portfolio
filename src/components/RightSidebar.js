import React from "react";

function RightSidebar() {
  return (
    <div className="h-full bg-gradient-to-br from-white to-gray-100 border-l-2 border-gray-200 p-6 flex flex-col items-center md:items-start shadow-inner">
      {/* Resume Download Section */}
      <div className="w-full mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">📄 Download My Resume</h3>
        <a
          href="https://drive.google.com/uc?id=110KxFMTehR93rdRnsF7UaDcfwY-A_Z-4" // Replace with the actual path to your resume file
          download
        >
          <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-2 px-4 rounded-lg font-medium hover:from-green-600 hover:to-teal-700 transition duration-300 shadow-md">
            Download Resume
          </button>
        </a>
      </div>

      {/* Newsletter Section */}
      <div className="mb-8 w-full">
        <h2 className="text-xl font-bold mb-3 text-gray-800">
          📬 Subscribe to Newsletter
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        />
        <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition duration-300 shadow-md">
          Subscribe
        </button>
      </div>

      {/* Card Section */}
      <div className="w-full bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          🚀 Featured Project
        </h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          Explore my latest project showcasing a modern React portfolio with advanced UI/UX features.
        </p>
        <button className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition duration-300 shadow-md">
          <a
            href="https://github.com/shivamyad01?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </button>
      </div>
    </div>
  );
}

export default RightSidebar;
