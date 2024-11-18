import React from "react";

const technologies = [
  { name: "HTML", img: "/pngegg.png" },
  { name: "CSS", img: "/css.png" },
  { name: "JavaScript", img: "/jawa.png" },
  { name: "TypeScript", img: "/react.png" },

  // Add more technologies here
  { name: "HTML", img: "/js.png" },
  { name: "CSS", img: "/mongo.png" },
  { name: "JavaScript", img: "/tailwind.png" },
  { name: "TypeScript", img: "/boot.png" },
];

const TechIcons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-10 blur-">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg transform transition hover:scale-110 hover:rotate-6"
          style={{
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          }}
        >
          <img
            src={tech.img}
            alt={tech.name}
            className="w-12 h-12 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
