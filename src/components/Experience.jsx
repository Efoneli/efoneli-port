import React from 'react';
import { data } from '../data/company_data.js';

const Experience = () => {
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
        <div className='flex flex-col gap-10'>
          {data.map((item, index) => (
            <div key={item.id} className='grid items-start' style={{ gridTemplateColumns: '80px 1px 1fr', gap: '0 24px' }}>

              {/* Date column */}
              <div className='text-right'>
                <span className='text-sm text-gray-500 leading-snug whitespace-pre-line'>
                  {item.date}
                </span>
              </div>

              {/* Line + dot column */}
              <div className='relative flex justify-center'>
                {/* Vertical line — hidden on last item */}
                {index < data.length - 1 && (
                  <div
                    className='absolute top-3 left-1/2 -translate-x-1/2 w-px bg-pink-600'
                    style={{ height: 'calc(100% + 40px)', opacity: 0.4 }}
                  />
                )}
                {/* Dot */}
                <div
                  className='relative z-10 mt-1 rounded-full border-2 border-pink-600'
                  style={{ width: 11, height: 11, background: '#0a192f', flexShrink: 0 }}
                />
              </div>

              {/* Content column */}
              <div className='pb-2'>
                <p className='text-lg font-semibold text-gray-200 mb-1'>{item.name}</p>
                {item.role && (
                  <p className='text-sm text-pink-400 mb-1'>{item.role}</p>
                )}
                {item.description && (
                  <p className='text-sm text-gray-400 mb-3'>{item.description}</p>
                )}
                {item.live && (
                  <a
                    href={item.live}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-1 text-xs text-gray-500 hover:text-pink-400 transition-colors duration-200'
                  >
                    {item.live.replace(/^https?:\/\//, '')}
                    <svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'/><polyline points='15 3 21 3 21 9'/><line x1='10' y1='14' x2='21' y2='3'/>
                    </svg>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;