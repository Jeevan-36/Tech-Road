import React from "react";
import { FaBrain } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TechCard = () => {
  const techs = [
    {
      title: "Data Structures and Algorithms",
      description:
        "Learn the fundamentals of data structures and algorithms to improve your coding skills.",
      path: "/dsa",
    },
    {
      title: "Web Development",
      description:
        "Learn the basics of web development and build your own projects.",
      path: "/web-dev",
    },
  ];

  const iconStyle = "text-3xl text-teal-500 dark:text-teal-300";
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-evenly px-6 py-10 w-full">
      {techs.map((tech) => (
        <div
          key={tech.title}
          className="flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 w-full sm:w-full md:w-96 lg:w-80 p-6 shadow-lg rounded-2xl gap-4 m-5 transition-all ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer text-md dark:text-white hover:shadow-teal-500/50 transform hover:scale-105"
          onClick={() => navigate(tech.path)}
        >
          {tech.path === "/dsa" ? (
            <FaBrain className={iconStyle} />
          ) : (
            <FaCode className={iconStyle} />
          )}
          <h1 className="font-bold text-center text-gray-800 dark:text-gray-200 transition-all duration-300 ease-in-out hover:text-teal-400">
            {tech.title}
          </h1>
          <p className="text-left font-semibold text-gray-700 dark:text-gray-300">
            {tech.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TechCard;
