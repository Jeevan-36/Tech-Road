import React from 'react';
import NavBar from './NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import Home from './Home';

const Layout = ({ countTechnologyCompletion }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <NavBar />
      {location.pathname === "/" ? (
        <Home countTechnologyCompletion={countTechnologyCompletion} />
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Layout;
