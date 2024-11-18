import React, { useEffect, useRef } from 'react';
// import Hero from './Hero';

function Cursor() {
  const coords = useRef({ x: 0, y: 0 });
  const circles = useRef([]);

  useEffect(() => {
    // Initialize circle positions
    circles.current.forEach(circle => {
      circle.x = 0;
      circle.y = 0;
    });

    // Mouse move event listener
    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Start animation
    const animateCircles = () => {
      let { x, y } = coords.current;

      circles.current.forEach((circle, index) => {
        circle.style.left = `${x - 2}px`;
        circle.style.top = `${y - 2}px`;

        // Scale the circles
        circle.style.transform = `scale(${(circles.current.length - index) / circles.current.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles.current[index + 1] || circles.current[0];
        x += (nextCircle.x - x) * 0.2;
        y += (nextCircle.y - y) * 0.2;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {Array(80)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            ref={(el) => (circles.current[index] = el)}
            className="circle h-[5px] w-[5px]  rounded-full bg-black absolute"
          ></div>
        ))}
        {/* <Hero/> */}
    </div>
  );
}

export default Cursor;