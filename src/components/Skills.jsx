import React, { useEffect, useRef, useState } from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Nest from "../assets/nest.jpg";
import Next from "../assets/next.png";

const skills = [
  { image: ReactImg, name: 'REACT JS' },
  { image: Next, name: 'NEXTJS' },
  { image: Nest, name: 'NESTJS' },
  { image: JavaScript, name: 'JAVASCRIPT' },
  { image: GitHub, name: 'GITHUB' },
  { image: Tailwind, name: 'TAILWIND CSS' },
  { image: HTML, name: 'HTML' },
  { image: CSS, name: 'CSS' },
];

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [headingVisible, setHeadingVisible] = useState(false);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setHeadingVisible(true);
          skills.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, i]);
            }, 200 + i * 100);
          });
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div name="skills" className="w-full bg-[#0a192f] text-gray-300 py-20">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full" ref={ref}>

        {/* Heading */}
        <div
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
          <p className="py-4">These are the technologies I've worked with👇</p>
        </div>

        {/* Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 cursor-pointer">
          {skills.map((skill, i) => {
            const isVisible = visibleItems.includes(i);
            return (
              <div
                key={i}
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.5s ease, transform 0.5s ease`,
                }}
              >
                <img className="w-20 mx-auto" src={skill.image} alt={skill.name} />
                <p className="my-4">{skill.name}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Skills;