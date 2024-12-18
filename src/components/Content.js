import React from "react";

function Content() {
  return (
    <div className="p-8 space-y-16">
      <section id="about">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>Write about yourself here...</p>
      </section>

      <section id="skills">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <p>List your skills here...</p>
      </section>

      <section id="projects">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p>Showcase your projects here...</p>
      </section>

      <section id="contact">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>Provide your contact details...</p>
      </section>
    </div>
  );
}

export default Content;
