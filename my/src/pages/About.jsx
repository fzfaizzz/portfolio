import React, { useEffect, useRef } from 'react';
import './About.css';
import Tech from './Tech';

const About = () => {
  // const cursorRef = useRef(null);

  // useEffect(() => {
  //   const cursor = cursorRef.current;

  //   const handleMouseMove = (e) => {
  //     if (cursor) {
  //       cursor.style.left = `${e.pageX}px`;
  //       cursor.style.top = `${e.pageY}px`;
  //     }
  //   };

  //   document.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  return (
    <div className="bg-gray-900 bg-center relative">
      <section className="h-auto flex flex-col items-center py-10 px-6 md:px-12 lg:px-20 relative bg-pattern">
        
        {/* About Content */}
        <div className="about-content mt-10 relative text-center md:text-left max-w-4xl space-y-8">
          {/* Title with Decorative Underline */}
          <h1 className="text-4xl md:text-5xl font-bold text-white border-b-4 border-purple-500 inline-block pb-2">
            About Me
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in">
            I'm <span className="text-purple-300">Farhan Akhtar Hamza</span>, a passionate frontend developer with a deep enthusiasm for building engaging, visually stunning web experiences. With a strong focus on user-centered design, I specialize in creating interactive interfaces that not only look great but also provide seamless usability. My expertise lies in modern web technologies, including React, JavaScript, HTML5, CSS3, and Tailwind CSS.
          </p>
          {/* <div ref={cursorRef} className="cursor"></div> */}
          {/* Skills Section */}
          <Tech />

          {/* Decorative Horizontal Line */}
          <div className="border-t border-gray-500 mt-10"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
