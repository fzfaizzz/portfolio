import React from 'react';
import './Hero.css';
import Card from './Card';
import About from './About';
import Project from './Project';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {

  return (
    <div>
      {/* Particle Background or Gradient Overlay */}
      <div className="bg-[url('/layout.png')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-purple-900 opacity-70"></div>
        
        {/* Hero Section */}
        <section className="min-h-screen flex justify-around flex-wrap items-center px-6 md:px-12 lg:px-20 relative">
          <div className="hero relative text-center md:text-left z-10">
            <div className="flex flex-col items-center md:items-start space-y-4 animate-fade-in">
              <div className="circle-indicator mb-4"></div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-purple-300 hover:scale-110 hover:rotate-3 hover:text-purple-100 transition-transform duration-500 ease-in-out transform inline-block">
                  Farhan
                </span>
              </h1>
              <p className="mt-2 text-lg md:text-xl lg:text-2xl text-white font-light">
                I develop 3D visuals, user <br className="hidden md:block" /> interfaces, and web applications
              </p>

              {/* Call-to-Action Button */}
              {/* <a href="#about" className="mt-6 inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Learn More
              </a> */}
            </div>
          </div>

          {/* Card Section */}
          <Card />
        </section>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <FaArrowDown className="text-white text-3xl" />
        </div>
      </div>

      {/* About, Projects, and Contact Sections */}
      <About />
      <Project />
      {/* Uncomment Contect when ready */}
      {/* <Contect /> */}
    </div>
  );
};

export default Hero;
