import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  });

  return (
    <div name="about" className="w-full py-20 bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full" ref={ref}>

        {/* Heading */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8" style={fadeUp(0)}>
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        {/* Body */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">

          {/* Left — big tagline */}
          <div className="sm:text-right text-4xl font-bold" style={fadeUp(150)}>
            <p>
              Hi. I'm Abba Efoneli Sarah, nice to meet you. Please take a look
              around.
            </p>
          </div>

          {/* Right — bio text */}
          <div style={fadeUp(300)}>
            <p>
              Software Engineer with 3+ years building scalable, production-grade web applications across fintech and healthtech. I specialize in React, Next.js, and TypeScript — with a track record of shipping performant, accessible interfaces that hold up at scale.
              <br /><br />
              I'm comfortable across the full frontend stack — from architecting reusable component systems, to integrating GraphQL APIs, managing state with Zustand, and visualizing complex data with Chart.js and Recharts. On the backend side, I've built full-stack systems with NestJS, PostgreSQL, and Supabase, and shipped Auth0-based authentication with role-based access control.
              <br /><br />
              I've also volunteered as a frontend mentor with Django Girls Abuja and the eHA Academy.
              <br /><br />
              I'm currently open to roles where I can own frontend architecture, collaborate with product and design, and build things people actually use.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;