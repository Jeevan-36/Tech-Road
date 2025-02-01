import { FaBookmark, FaExternalLinkAlt } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";

const TopicRow = ({
  question,
  toggleCompleted,
  toggleBookMarked,
  handleModalToggle,
  setModalDetails,
}) => {
  return (
    <div
      className={`w-full sm:w-11/12 flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-4 m-4 
        transition-all ease-in-out shadow-lg rounded-xl cursor-pointer hover:shadow-2xl transform 
        ${
          question.completed && !question.bookmarked
            ? "bg-green-100 dark:bg-green-700"
            : question.bookmarked
            ? "bg-yellow-100 dark:bg-yellow-600"
            : "bg-gray-300 dark:bg-gray-700"
        }
      `}
    >
      
      <input
        type="checkbox"
        name="topicDone"
        className="scale-150 accent-teal-600 cursor-pointer mb-2 sm:mb-0"
        checked={question.completed}
        onChange={() => {
          toggleCompleted(question.link, question.title, question.technology);
        }}
      />

     
      <a
        href={question.link}
        target="_blank"
        className="flex-1 ml-0 sm:ml-5 font-semibold text-lg text-gray-900 dark:text-white hover:underline mb-2 sm:mb-0"
      >
        {question.questionName}
      </a>

     
      <div className="flex space-x-3 w-full sm:w-1/6">
       
        <a href={question.link} target="_blank">
          <FaExternalLinkAlt className="text-xl text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-125 cursor-pointer dark:text-blue-400 dark:hover:text-blue-300" />
        </a>

       
        <FaBookmark
          className={`text-xl transition-transform transform hover:scale-125 cursor-pointer hover:drop-shadow-lg "text-yellow-500 dark:text-yellow-400"
                 "text-gray-500 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-500"
            `}
          onClick={() => {
            toggleBookMarked(question.link, question.title, question.technology);
          }}
        />

       
        <FaNoteSticky
          className="text-xl text-amber-700 hover:text-amber-900 transition-transform transform hover:scale-125 cursor-pointer hover:drop-shadow-lg dark:text-amber-400 dark:hover:text-amber-300"
          onClick={() => {
            setModalDetails({
              id: question.link,
              topic: question.title,
              technology: question.technology,
              notes: question.notes,
            });
            handleModalToggle();
          }}
        />
      </div>
    </div>
  );
};

export default TopicRow;
