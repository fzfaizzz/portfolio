import React, { useState } from 'react';

const Card = () => {
  // State to track mouse position relative to the card
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Function to update the position based on mouse move
  const handleMouseMove = (e) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - cardRect.left - cardRect.width / 2; // X offset relative to center
    const y = e.clientY - cardRect.top - cardRect.height / 2; // Y offset relative to center

    // Scaling down for subtle, smooth effect
    setPosition({ x: x / 10, y: y / 10 }); // Adjust to control rotation speed
  };

  // Reset the position when mouse leaves the card
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="h-96 w-72 bg-gray- backdrop-blur-sm rounded-lg flex flex-col items-center justify-around p-6 shadow-lg text-white transform transition-transform duration-500 ease-out"
        style={{
          perspective: '1000px', // Add perspective to create 3D effect
          transform: `rotateX(${position.y}deg) rotateY(${position.x}deg)`, // Rotation based on mouse position
          boxShadow: '0 8px 30px rgba(0, 0, 150, 0.3)',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Top section with avatar */}
        <div className="w-full flex justify-center">
          <div className="relative">
            {/* Background shape */}
            <div
              className="h-full w-full bg-purple-500 rounded-lg flex items-center justify-center"
              style={{
                transform: 'translateZ(30px)', // Bring avatar forward
              }}
            >
              {/* Avatar placeholder */}
              <img src="/boy.png" alt="" className='h-full w-full' />

            </div>
          </div>
        </div>

        {/* Name and title */}
        <div
          className="text-center mt-4"
          style={{
            transform: 'translateZ(15px)', // Add slight 3D depth to text
          }}
        >
          <h2 className="text-xl font-bold">Farhan Akhtar Hamza</h2>
          <p className="text-purple-400">Frontend Developer</p>
        </div>

        {/* Quote */}
        <div
          className="text-center text-sm italic"
          style={{
            transform: 'translateZ(10px)', // Add slight 3D depth to quote
          }}
        >
          <p>"I do what I do for the love of it"</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
