import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center md:items-start px-4 md:px-8">

          {/* Header */}
      <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
        Hi. I'm Shivam <span className="text-blue-500">@shivaimyad</span> Yadav 🤟
      </h1>


      {/* Full-Size Image */}
      <div className="w-full mb-8">
        <img
          src="https://via.placeholder.com/1200x600" // Replace with your image URL
          alt="Shivam Yadav"
          className="w-full h-auto object-cover rounded-lg border-4 border-blue-500"
        />
      </div>

    
      {/* About Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">About</h2>
        <p className="text-gray-600 leading-relaxed">
          I'm a product maker (... and full-stack developer) currently based in Arizona, USA. I'm passionate about building products that help people and make a difference in the world. I'm also a big fan of open-source software—which is why almost everything I build is open source! 
          <br /><br />
          I also love educating others about technology and programming, which is why I'm a content creator and write blogs in my free time. I mainly write code in the <strong>T3 Stack</strong>.
        </p>
      </section>

      {/* Career Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Career</h2>
        <p className="text-gray-600 leading-relaxed">
          I sold my first venture, Epikhost, at an age of 16. And then went on to build and fail a lot of times. I also worked as a freelancer, creating and selling discord bots and landing pages. Then, I went on to work as an app developer for Commnete, a startup based in Mumbai, India.
          <br /><br />
          My second exit was Tweets.beauty, a tool to beautify tweets and other web content. I sold it to Hypefury in 2023, and I got an opportunity to work with them as a full-stack developer.
          <br /><br />
          I've won several hackathons as well, like Calhacks, by UC Berkeley, which was the biggest college hackathon of the time, and Sunhacks, by ASU.
        </p>
      </section>
    </div>
  );
}

export default About;
