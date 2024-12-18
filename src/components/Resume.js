import React from "react";

const resumeData = {
  education: [
    {
      logo: "https://via.placeholder.com/40", // Replace with your logo URL
      title: "BS in Computer Science",
      organization: "Arizona State University",
      duration: "AUGUST 2023 · PRESENT",
      description:
        "Throughout my years at ASU, I immersed myself in a dynamic learning environment, surrounded by dedicated faculty and talented peers. ASU focuses on entrepreneurship and leadership which is something that I really like. I got to be a part of Edson Entrepreneurship + Innovation fellowship, Venture devils, Grand Challenges Scholars Program and a lot of clubs.",
    },
    {
      logo: "https://via.placeholder.com/40",
      title: "Schooling",
      organization: "Ryan International School - Mumbai, India",
      duration: "MAY 2010 · APR 2021",
      description: "Part of choir, musicians, World's Scholars Cup.",
    },
  ],
  experience: [
    {
      logo: "https://via.placeholder.com/40",
      title: "Feature head and Full-Stack developer",
      organization: "Hypefury",
      duration: "MAR. 2023 · AUG. 2023",
      description:
        "As a Project Lead, my responsibility was to oversee and maintain all the codebase of one of Hypefury's core offerings. Typescript, Rust, Python were used in the infrastructure. We utilized NextJS with the 'T-3 stack' - ensuring developer productivity as well as a bug-free typesafe codebase.",
    },
    {
      logo: "https://via.placeholder.com/40",
      title: "Full-stack developer",
      organization: "Mem0",
      duration: "MAR. 2022 · JAN. 2023",
      description:
        "I built a lot of example apps and client projects for mem0. I was also contributing to educating users, maintaining documentation and creating tutorials. I learned a lot about small startups, AI and LLMs, especially Vector databases and Memory.",
    },
    {
      logo: "https://via.placeholder.com/40",
      title: "App Developer and Project Manager",
      organization: "Commnete",
      duration: "AUG. 2022 · DEC. 2022",
      description:
        "This was my first job at a startup. Commnete is a management, security and accounting solution for housing societies. I built their security app for guards, using React native and Expo.",
    },
  ],
};

function Resume() {
  return (
    <div className="p-6 md:p-12 bg-gray-50 text-gray-800">
      {/* Resume Heading */}
      <h1 className="text-5xl font-extrabold mb-8 text-gray-900 text-center">My resume</h1>
       {/* Resume Section */}
       <div className="w-full text-center mt-8">
        <div className="border-4 border-gray-300 rounded-lg p-4 mb-6">
          <iframe
            src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://drive.google.com/uc?id=110KxFMTehR93rdRnsF7UaDcfwY-A_Z-4" // Replace with your resume PDF URL
            width="100%"
            height="500px"
            className="rounded-lg"
            title="Resume"
          />
        </div>

        <p className="text-lg text-gray-700">
          <a
            href="https://drive.google.com/uc?id=110KxFMTehR93rdRnsF7UaDcfwY-A_Z-4" // Replace with your resume PDF URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Click here to view in full size or download my resume.
          </a>
        </p>
      </div>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        {resumeData.education.map((edu, index) => (
          <div
            key={index}
            className="flex gap-6 items-start mb-6 border-l-4 border-gray-200 pl-4"
          >
            <img
              src={edu.logo}
              alt="Education Logo"
              className="w-12 h-12 object-cover rounded-full mt-1"
            />
            <div>
              <p className="text-sm text-gray-500">{edu.duration}</p>
              <h3 className="text-lg font-bold">{edu.title}</h3>
              <p className="font-semibold text-gray-700">{edu.organization}</p>
              <p className="text-sm text-gray-600 mt-2">{edu.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Work Experience Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        {resumeData.experience.map((job, index) => (
          <div
            key={index}
            className="flex gap-6 items-start mb-6 border-l-4 border-gray-200 pl-4"
          >
            <img
              src={job.logo}
              alt="Job Logo"
              className="w-12 h-12 object-cover rounded-full mt-1"
            />
            <div>
              <p className="text-sm text-gray-500">{job.duration}</p>
              <h3 className="text-lg font-bold">{job.title}</h3>
              <p className="font-semibold text-gray-700">{job.organization}</p>
              <p className="text-sm text-gray-600 mt-2">{job.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Resume;
