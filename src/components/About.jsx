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
              Hi, I'm Efoneli, and I graduated from Federal University of
              Technology Minna in 2021 with a degree in Telecommunication
              Engineering.
              <br /> My interests are in Front End Engineering, and I love to
              create beautiful and responsive web interfaces for delightful user
              experiences.
              <br />
              I previously worked with colleagues, where we built great
              interfaces. I'm also a HNG9 finalist, where we collaborated by
              working on projects and delivered a working product in a
              stipulated amount of time.
              <br />
              I'm currently building web apps using React JS and mostly tailwind
              CSS and learning Next JS and Typescript by the side I'm also
              looking for an front end entry role to put my skills to use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
