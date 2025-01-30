import React from 'react';
import TopicHeader from './TopicHeader';
import TopicRow from './TopicRow';

const Topic = ({ topicData, toggleCompleted, toggleBookMarked, count, handleModalToggle, setModalDetails, handleNotesDownload }) => {
  return (
    <>
      <TopicHeader
        title={topicData.title}
        technology={topicData.technology}
        count={count}
        handleNotesDownload={handleNotesDownload}
      />

      <div className="mt-3.5 w-full sm:w-11/12 mx-auto flex flex-col justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        {topicData.questions.map((question) => {
          return (
            <TopicRow
              question={question}
              key={`${question.link}-${question.questionName}`}
              toggleCompleted={toggleCompleted}
              toggleBookMarked={toggleBookMarked}
              handleModalToggle={handleModalToggle}
              setModalDetails={setModalDetails}
            />
          );
        })}
      </div>
    </>
  );
};

export default Topic;
