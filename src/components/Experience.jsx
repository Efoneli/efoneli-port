import React, { useState, useEffect, useRef } from 'react';
import { data } from '../data/company_data.js';

const Experience = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          data.forEach((item, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, item.id]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div name='experience' className='w-full bg-[#0a192f] pb-20 pt-10'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>

        {/* Heading */}
        <div className='pb-12'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Experience
          </p>
          <p className='py-6 text-gray-400'>Companies I've had the pleasure of working with</p>
        </div>

        {/* Timeline */}
        <div className='flex flex-col gap-10' ref={sectionRef}>
          {data.map((item, index) => {
            const isVisible = visibleItems.includes(item.id);
            return (
              <div
                key={item.id}
                className='grid items-start'
                style={{
                  gridTemplateColumns: '90px 1px 1fr',
                  gap: '0 24px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                }}
              >

                {/* Date column */}
                <div className='text-right'>
                  <span className='text-xs text-gray-500 leading-snug whitespace-pre-line'>
                    {item.date}
                  </span>
                </div>

                {/* Line + dot column */}
                <div className='relative flex justify-center'>
                  {index < data.length - 1 && (
                    <div
                      className='absolute top-3 left-1/2 -translate-x-1/2 w-px bg-pink-600'
                      style={{ height: 'calc(100% + 40px)', opacity: 0.35 }}
                    />
                  )}
                  <div
                    className='relative z-10 mt-1 rounded-full border-2 transition-all duration-300'
                    style={{
                      width: 11,
                      height: 11,
                      flexShrink: 0,
                      background: hoveredId === item.id ? '#db2777' : '#0a192f',
                      borderColor: '#db2777',
                    }}
                  />
                </div>

                {/* Content column */}
                <div
                  className='pb-2 relative cursor-default'
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <p className='text-base font-semibold text-gray-200 mb-0.5'>{item.name}</p>

                  {item.role && (
                    <p className='text-sm text-pink-400 mb-1'>{item.role}</p>
                  )}

                  {item.live && (
                    <a
                      href={item.live}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center gap-1 text-xs text-gray-600 hover:text-pink-400 transition-colors duration-200 mb-1'
                    >
                      {item.live.replace(/^https?:\/\//, '')}
                      <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                        <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'/>
                        <polyline points='15 3 21 3 21 9'/>
                        <line x1='10' y1='14' x2='21' y2='3'/>
                      </svg>
                    </a>
                  )}

                  {/* Hover panel — description */}
                  <div
                    style={{
                      maxHeight: hoveredId === item.id ? '400px' : '0px',
                      opacity: hoveredId === item.id ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease, opacity 0.3s ease',
                    }}
                  >
                    <div className='mt-3 p-3 rounded-md border border-pink-600 bg-[#0d2137]' style={{ borderColor: 'rgba(219,39,119,0.35)' }}>
                      <ul className='flex flex-col gap-1.5'>
                        {item.description && item.description.map((point, i) => (
                          <li key={i} className='flex items-start gap-2 text-xs text-gray-400 leading-relaxed'>
                            <span className='text-pink-600 mt-0.5 flex-shrink-0'>▹</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Experience;