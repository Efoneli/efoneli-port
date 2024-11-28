import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Nest from "../assets/nest.jpg";
import Next from "../assets/next.png";

const skills = [
  {
    image: HTML,
    name: 'HMTL',
  },
  {
    image: CSS,
    name: 'CSS',
  },
  {
    image: HTML,
    name: 'HMTL',
  },
  {
    image: JavaScript,
    name: 'JAVASCRIPT',
  },
  {
    image: ReactImg,
    name: 'REACT JS',
  },
  {
    image: GitHub,
    name: 'GITHUB',
  },
  {
    image: Tailwind,
    name: 'TAILWIND CSS',
  },
  {
    image: Next,
    name: 'NEXTJS',
  },
  {
    image: Nest,
    name: 'NESTJS',
  },
]

const Skills = () => {
  return (
    <div name="skills" className="w-full bg-[#0a192f] text-gray-300 py-20">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with👇</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 cursor-pointer">
          {skills.map((skill, i) => (
            <div key={i} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={skill.image} alt="icon" />
              <p className="my-4">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
