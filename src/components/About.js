import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-7xl font-bold inline border-b-4 border-[#10b981]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-6xl font-bold'>
              <p>Hi I'm Muhamet Hajdini, nice to meet you. Please take a look around.</p>
            </div>
            <div className='text-3xl'>
              <p>I am passionate about building excellent software that improves
              the lives of those around me.  Proficient in various platforms, languages, and embedded systems.
               Able to effectively self-manage during independent projects,
               as well as collaborate as part of a productive team.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;