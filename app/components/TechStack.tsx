"use client";
import { SiPython, SiCplusplus, SiOpenjdk, SiReact, SiOpengl, SiNumpy, SiPandas } from "react-icons/si";

const TechStack = () => {
  const technologies = [
    { name: "Python", icon: <SiPython className="text-yellow-400 text-4xl" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-500 text-4xl" /> },
    { name: "Java", icon: <SiOpenjdk className="text-red-500 text-4xl" /> },
    { name: "React", icon: <SiReact className="text-blue-400 text-4xl" /> },
    { name: "OpenGL", icon: <SiOpengl className="text-green-500 text-4xl" /> },
    { name: "NumPy", icon: <SiNumpy className="text-indigo-400 text-4xl" /> },
    { name: "Pandas", icon: <SiPandas className="text-black text-4xl" /> },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center items-center p-4">
      {technologies.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center grayscale">
          {tech.icon}
          <span className="text-white text-sm mt-2">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
