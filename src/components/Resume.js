import React from "react";


const resumeData = {
  education: [
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/4/41/SVIET-transparent-Logo.png", // Replace with your logo URL
      title: "M.Tech in Computer Science",
      organization: "Swami Vivekanand Institute of Engineering & Technology, Punjab",
      duration: "July 2024 · PRESENT",
      description:
        "Throughout my years at ASU, I immersed myself in a dynamic learning environment, surrounded by dedicated faculty and talented peers. ASU focuses on entrepreneurship and leadership which is something that I really like. I got to be a part of Edson Entrepreneurship + Innovation fellowship, Venture devils, Grand Challenges Scholars Program and a lot of clubs.",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73t4yUSVdqYIRVaJeBKtzQaj-L-0fn5PRSA&s", // Replace with your logo URL
      title: "B.Tech in Information Technology",
      organization: "Chandigarh Group Of College Landran, Punjab",
      duration: "July 2020 · July 2024",
      description:
        "Throughout my years at ASU, I immersed myself in a dynamic learning environment, surrounded by dedicated faculty and talented peers. ASU focuses on entrepreneurship and leadership which is something that I really like. I got to be a part of Edson Entrepreneurship + Innovation fellowship, Venture devils, Grand Challenges Scholars Program and a lot of clubs.",
    },
    {
      logo: "https://content.jdmagicbox.com/comp/gorakhpur/x6/9999px551.x551.170608114151.f7x6/catalogue/maharana-pratap-inter-college-bilandpur-gorakhpur-colleges-vavf9765r4.jpg", // Replace with your logo URL
      title: "INTERMEDIATE",
      organization: "Maharana Pratap Inter College, Gorakhpur, Uttar Pradesh",
      duration: "July 2017 · July 2019",
      description:
        "Throughout my years at ASU, I immersed myself in a dynamic learning environment, surrounded by dedicated faculty and talented peers. ASU focuses on entrepreneurship and leadership which is something that I really like. I got to be a part of Edson Entrepreneurship + Innovation fellowship, Venture devils, Grand Challenges Scholars Program and a lot of clubs.",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYT-hRXJPfOoTn8aP5Rga9th7JFZyGn-KZOA&s", // Replace with your logo URL
      title: "HIGH SCHOOL",
      organization: "Sacchidanand Inter College, Kushinagar, Uttar Pradesh",
      duration: "July 2017 · July 2019",
      description:
        "Throughout my years at ASU, I immersed myself in a dynamic learning environment, surrounded by dedicated faculty and talented peers. ASU focuses on entrepreneurship and leadership which is something that I really like. I got to be a part of Edson Entrepreneurship + Innovation fellowship, Venture devils, Grand Challenges Scholars Program and a lot of clubs.",
    },
   
  ],
  experience: [
    {
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGXw6p-wCjdtA/company-logo_200_200/company-logo_200_200/0/1630629117017?e=2147483647&v=beta&t=cQ_rzG9XsklT1EEPNbv9FS4SXJ9VqGWxc9W_tAG0aUA",
      title: "Feature head and Full-Stack developer",
      organization: "Epic Web Services",
      duration: "DECEMBER. 2024 · PRESENT",
      description:
        "As a Project Lead, my responsibility was to oversee and maintain all the codebase of one of Hypefury's core offerings. Typescript, Rust, Python were used in the infrastructure. We utilized NextJS with the 'T-3 stack' - ensuring developer productivity as well as a bug-free typesafe codebase.",
    },
   
  ],
};

function Resume() {
  return (
    <div className="p-6 md:p-12  text-gray-800">
      {/* Resume Heading */}
      <h1 className="text-5xl font-extrabold mb-8 text-gray-900">My resume</h1>
   

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
