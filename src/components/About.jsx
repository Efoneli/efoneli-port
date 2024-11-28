import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full py-20 bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Abba Efoneli Sarah, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I'm a Frontend Developer with 3+ years of experience specializing in Next.js, ReactJs, and NestJS. My focus is on building high-performance, scalable web applications with a strong emphasis on user experience and accessibility.
              <br /> I&apos;ve worked with fintech companies to develop content-driven platforms, including dashboards and responsive user interfaces, enhancing performance and user engagement. My toolkit also includes Tailwind CSS for efficient styling and GitHub for collaborative workflows.
              <br />
              I thrive on solving problems, optimizing for SEO, and delivering pixel-perfect designs. Beyond coding, I stay current with tech trends, contribute to open-source projects, and enjoy experimenting with new design patterns.
              <br />
              I’m eager to bring my skills to a team where I can take ownership of frontend projects and contribute to building impactful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
