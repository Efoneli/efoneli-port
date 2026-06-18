import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

const LINES = [
  { text: "Hello, my name is", className: "text-pink-600 text-2xl", delay: 0 },
  { text: "ABBA EFONELI SARAH", className: "text-4xl sm:text-7xl font-bold text-[#ccd6f6]", delay: 600 },
  { text: "I'm a Software Engineer.", className: "text-4xl sm:text-7xl font-bold text-[#8892b0]", delay: 1400 },
];

const useTypingEffect = (text, startDelay, speed = 45) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) { setDone(true); return; }
    const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
    return () => clearTimeout(t);
  }, [started, displayed, text, speed]);

  return { displayed, done };
};

const TypedLine = ({ text, className, delay, onDone, showCursor }) => {
  const { displayed, done } = useTypingEffect(text, delay);

  useEffect(() => { if (done && onDone) onDone(); }, [done, onDone]);

  return (
    <div className={className} style={{ minHeight: '1.2em' }}>
      {displayed}
      {showCursor && (
        <span
          style={{
            display: 'inline-block',
            width: '3px',
            height: '0.85em',
            background: '#db2777',
            marginLeft: '3px',
            verticalAlign: 'middle',
            animation: 'blink 0.8s step-end infinite',
          }}
        />
      )}
    </div>
  );
};

const Home = () => {
  const [linesDone, setLinesDone] = useState(0);
  const [showRest, setShowRest] = useState(false);

  const handleLineDone = (index) => {
    setLinesDone((prev) => {
      const next = Math.max(prev, index + 1);
      if (next >= LINES.length) setTimeout(() => setShowRest(true), 300);
      return next;
    });
  };

  return (
    <div name='home' className='w-full bg-[#0a192f]'>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full gap-2'>

        {LINES.map((line, i) => (
          <TypedLine
            key={i}
            text={line.text}
            className={line.className}
            delay={line.delay}
            onDone={() => handleLineDone(i)}
            showCursor={linesDone === i && !showRest}
          />
        ))}

        <p
          className='text-[#8892b0] py-4 max-w-[700px]'
          style={{
            opacity: showRest ? 1 : 0,
            transform: showRest ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          I'm a front-end developer specialized in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive frontend web applications.
        </p>

        <div
          style={{
            opacity: showRest ? 1 : 0,
            transform: showRest ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
          }}
        >
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded-lg mb-10 hover:bg-pink-600 hover:border-white'>
            <Link to='work' smooth={true} duration={500}>
              View Work
            </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Home;