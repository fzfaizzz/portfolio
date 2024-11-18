import React from 'react';
// import Contect from './Contect';
import Connect from './Connect'
import Footer from './Footer';
import { FaCode, FaLaptopCode } from 'react-icons/fa';

const Project = () => {
  const projects = [
    {
      title: 'SOULFUL SYMBOL',
      description: 'Tattoo Symbols Website',
      img: '/Variant.jpg', // Replace with actual image path
      name: 'NEW WEB'
    },
    {
      title: 'MOSAIC OF CULTURES',
      description: 'Website For Chernivtsi',
      img: '/stepnest.jpg', // Replace with actual image path
      name: 'NEW WEB'
    },
    {
      title: 'SOULFUL SYMBOL',
      description: 'Tattoo Symbols Website',
      img: '/iphone.png', // Replace with actual image path
      name: 'NEW WEB'
    },
    {
      title: 'SOULFUL SYMBOL',
      description: 'Tattoo Symbols Website',
      img: 'https://max-milkin.com.ua/img/work/3.jpg',
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image with Black Shade */}
      <div className="absolute inset-0 bg-[url('/shade.png')] bg-cover bg-center z-0">
        <div className="absolute inset-0  bg-black opacity-70"></div> {/* Black shade */}
      </div>

      <div className="relative z-10 flex-grow">
        <h1 className="text-white text-6xl font-bold text-center py-5">PROJECTS</h1>
        <hr className="border-t border-white w-1/3 mx-auto mb-10" />

        <section className="projects-section py-1 px-4 md:px-12">
          <div className="grid grid-cols-1 w-[100%] sm:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="relative group overflow-hidden">
                {/* Project Image */}
                <div className="overflow-hidden rounded-lg h-[80%] md:h-96">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="transform group-hover:scale-125 transition-transform duration-500 ease-in-out w-full h-full object-cover"
                  />
                </div>

                {/* Overlay with text */}
                <div className="absolute inset-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out"></div>
                {/* Project Title with Icon */}
                <div className="absolute top-4 left-4 z-10">
                  <FaLaptopCode className="text-white text-4xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Project Info with Animation */}
                <div className="absolute bottom-4 left-4 text-white z-10 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:bottom-12 transform group-hover:translate-y-0 translate-y-5">
                  <h2 className="text-3xl font-bold transition-transform duration-500 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100">
                    {project.title}
                  </h2>
                  <p className="text-sm transition-transform duration-500 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 delay-150">
                    {project.description}
                  </p>
                </div>
                <p className="font-mono text-white text-3xl">{project.name}</p>
              </div>
            ))}
          </div>
          <div className='mt-16'>
          <Connect />
          {/* <Contect/> */}
          </div>
        </section>
      </div>

      {/* Full Width Footer */}

    </div>
  );
};

export default Project;
