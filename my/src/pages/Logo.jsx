import React, { useEffect } from "react";
import "./logo.css"; // Importing the styles

const Logo = () => {
  useEffect(() => {
    const eyeball = (event) => {
      const eyes = document.querySelectorAll(".eye");
      eyes.forEach((eye) => {
        let rect = eye.getBoundingClientRect();
        let x = rect.left + rect.width / 2;
        let y = rect.top + rect.height / 2;

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = radian * (180 / Math.PI) * -1 + 180;

        eye.style.transform = `rotate(${rot}deg)`;
      });
    };

    document.querySelector("body").addEventListener("mousemove", eyeball);

    return () => {
      document.querySelector("body").removeEventListener("mousemove", eyeball);
    };
  }, []);

  return (
    <>
      <div className="body-container">
        <div className="face">
          <div className="eyes">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
