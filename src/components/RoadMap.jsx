import React from "react";
import TopicCard from "./TopicCard";
import { Outlet, useLocation } from "react-router-dom";

const RoadMap = ({ topics, countTopicCompletion, technology }) => {
  const location = useLocation();

  return (
    <>
      {(location.pathname === "/dsa" || location.pathname === "/web-dev") ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10 dark:bg-gray-800">
          {Object.keys(topics).map((topic) => {
            return (
              <div key={topic}>
                <TopicCard
                  topicData={{
                    name: topic,
                    questions: topics[topic],
                  }}
                  countTopicCompletion={countTopicCompletion}
                  technology={technology}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-gray-200 dark:bg-gray-900 mx-auto p-5 rounded-lg">
          <Outlet />
        </div>
      )}
    </>
  );
};

export default RoadMap;
