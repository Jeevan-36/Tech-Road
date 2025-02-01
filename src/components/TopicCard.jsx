import React from "react";
import { useNavigate } from "react-router-dom";

const TopicCard = ({ topicData, countTopicCompletion, technology }) => {
  const navigate = useNavigate();
  const count = countTopicCompletion(topicData.name, technology);
  const totalQuestions = count.totalCount;
  const progressPercentage = (count.completedCount / totalQuestions) * 100;

  return (
    <div
  className="flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900 shadow-lg rounded-2xl p-6 gap-4 transition-all ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer my-10 hover:shadow-teal-500/50 transform"
  key={topicData.name}
  onClick={() => {
    const path = `/${technology}/${topicData.name
      .replace(/[^a-zA-Z0-9]/g, "-")
      .toLowerCase()}`;
    navigate(path);
  }}
>
  <h1 className="font-bold text-xl text-gray-800 dark:text-gray-200 transition-all duration-300 ease-in-out hover:text-teal-400 text-shadow-lg">
    {topicData.name}
  </h1>
  <div className="w-full px-4">
    <div className="w-full h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${progressPercentage}%` }}
      ></div>
      <div className="absolute right-2 top-0 text-sm text-gray-800 dark:text-gray-300 font-semibold px-2 py-1">
        {Math.round(progressPercentage)}%
      </div>
    </div>
  </div>
  <p className="text-gray-700 dark:text-gray-400 font-medium">
    Questions: <span className="font-bold text-gray-800 dark:text-gray-200">{totalQuestions}</span>
  </p>
</div>

  );
};

export default TopicCard;
