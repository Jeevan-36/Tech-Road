import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">About This Project</h1>
        <p className="text-lg mb-6">
          This project is created to help you with Data Structures and Algorithms, Web Development.
          <br />
          I am thankful to the amazing content creators whose resources made this possible:
        </p>

        <div className="text-lg font-semibold">
          <p className="mb-4">
            A special thanks to{' '}
            <a
              href="https://www.youtube.com/@LoveBabbar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-700 transition-all duration-300"
            >
              Love Babbar
            </a>{' '}
            for providing 450 DSA questions that helped shape the content.
          </p>
          <p className="mb-4">
            Huge thanks to{' '}
            <a
              href="https://www.youtube.com/@HiteshCodeLab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-700 transition-all duration-300"
            >
              Hitesh Choudhary 
            </a>{' and '}
            <a
              href="https://www.youtube.com/@chaiaurcode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-700 transition-all duration-300"
            >
               Chai aur Code
            </a>{' '}
            for the fantastic Web Development tutorials.
          </p>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Thank you for supporting these amazing creators, whose hard work has helped countless learners across the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
