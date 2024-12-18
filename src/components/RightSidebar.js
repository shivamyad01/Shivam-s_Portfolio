import React from "react";

function RightSidebar() {
  return (
    <div className="h-full bg-white border-l-2 border-gray-200 p-4 flex flex-col items-center md:items-start">
      {/* Newsletter Section */}
      <div className="mb-8 w-full">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Subscribe to Newsletter</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
          Subscribe
        </button>
      </div>

      {/* Card Section */}
      <div className="w-full bg-gray-100 p-4 rounded shadow">
        <h3 className="text-md font-semibold text-gray-700">Featured Project</h3>
        <p className="text-sm text-gray-600 mt-2">
          Check out my latest project showcasing a modern React portfolio.
        </p>
        <button className="mt-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-300">
          <a href="https://github.com/shivamyad01?tab=repositories"> View Project</a>
        
        </button>
      </div>
    </div>
  );
}

export default RightSidebar;
