import React, { useEffect, useState } from "react";
import { FaLaptopCode, FaHome, FaInfoCircle, FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const mode = JSON.parse(localStorage.getItem("MODE"));
    return mode !== null ? mode : true; 
  });

  const navigate = useNavigate();

  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
   
    localStorage.setItem("MODE", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); 
  };

  return (
    <div className="w-full flex justify-between px-4 py-3 bg-teal-700 dark:bg-teal-900">
      <div className="flex justify-between gap-1 items-center" onClick={() => navigate("")}>
        <FaLaptopCode className="text-xl text-white cursor-pointer" />
        <h4 className="text-lg font-bold text-white">Tech Road</h4>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <FaHome className="text-xl text-white cursor-pointer" onClick={() => navigate("")} />
        <div className="cursor-pointer" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <FaSun className="text-xl text-white" />
          ) : (
            <FaMoon className="text-xl text-white" />
          )}
        </div>
        <FaInfoCircle className="text-xl text-white cursor-pointer" onClick={() => navigate("/about")} />
      </div>
    </div>
  );
};

export default NavBar;
