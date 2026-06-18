import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  });

  return (
    <div name='home' className='w-full bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        <p className='text-pink-600 text-2xl' style={fadeUp(100)}>
          Hello, my name is
        </p>

        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]' style={fadeUp(250)}>
          ABBA EFONELI SARAH
        </h1>

        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]' style={fadeUp(400)}>
          I'm a Front End Developer.
        </h2>

        <p className='text-[#8892b0] py-4 max-w-[700px]' style={fadeUp(550)}>
          I'm a front-end developer specialized in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive frontend web applications.
        </p>

        <div className='flex gap-4 sm:gap-2'>
          <div style={fadeUp(700)}>
            <Link to='experience' smooth={true} duration={500}>
              <button className='text-white group border-2 px-3 py-3 my-2 flex items-center rounded-lg mb-10 hover:bg-pink-600 hover:border-white'>
                View professional experience
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
          </div>

          <div style={fadeUp(700)}>
            <Link to='experience' smooth={true} duration={500}>
              <button className='text-white group border-2 px-3 py-3 my-2 flex items-center rounded-lg mb-10 hover:bg-pink-600 hover:border-white'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;