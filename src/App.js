import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Left Navbar */}
        <div className="w-1/6 bg-white fixed md:static top-0 left-0 h-16 md:h-screen z-10">
          <Navbar />
        </div>

        {/* Center Content */}
        <div
          className="flex-1  md:mr-[20%] p-4 md:p-8 mt-16 md:mt-0 overflow-y-auto"
          style={{ height: "calc(200vh - 4rem)" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>

        {/* Right Sidebar */}
        <div className="hidden md:block w-1/6 fixed right-0 top-0 h-screen bg-white border-l-2 border-gray-200">
          <RightSidebar />
        </div>
      </div>
    </Router>
  );
}

export default App;
