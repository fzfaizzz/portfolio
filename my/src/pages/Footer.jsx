import React, { useState, useEffect } from 'react';

function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  // State to hold the current time
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // useEffect to update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // Update every second

    // Cleanup interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <footer className="bg-gradient-to-r from-gray-700 to-gray-900 mt- text-center  py-4 px-10 pt- text-white w-full relative">
        <div className="w-full flex justify-between px-4">
          {/* Dynamic Year */}
          <div className='flex space-x-5'>
          <p>© {currentYear}</p>
          <p> : {currentTime}</p> {/* Display current time */}
          </div>
          <div className="flex justify-center flex-wrap space-x-6">
            {/* Social Media Links */}
            <a href="#" className="hover:text-yellow-400 transition">Instagram</a>
            <a href="#" className="hover:text-yellow-400 transition">LinkedIn</a>
            {/* Email Link */}
            <a href="mailto:example@akhtarfarhan251@gmail.com" className="hover:text-yellow-400 transition">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
