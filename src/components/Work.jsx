import React, { useEffect, useRef, useState } from 'react';
import { data } from "../data/data.js";

const Work = () => {
  const project = data;
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
          project.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, i]);
            }, 200 + i * 120);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [project]);

  return (
    <div name='work' className='w-full md:text-gray-300 bg-[#0a192f] pb-20 pt-10'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full' ref={ref}>

        {/* Heading */}
        <div
          className='pb-8'
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Personal Work
          </p>
          <p className='py-6 text-gray-200'>Check out some of my work👇</p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.map((item, index) => {
            const isVisible = visibleItems.includes(index);
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${item.image})`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.5s ease, transform 0.5s ease`,
                }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto gap-4 content-div"
              >
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="p-4 text-base font-bold text-white tracking-wider">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center">
                    {/* eslint-disable-next-line */}
                    <a href={item.github} target="_blank">
                      <button className="text-center rounded-lg p-2 m-1 bg-white text-gray-700 font-bold text-base">
                        Code
                      </button>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a href={item.live} target="_blank">
                      <button className="text-center rounded-lg p-2 m-1 bg-white text-gray-700 font-bold text-base">
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Work;