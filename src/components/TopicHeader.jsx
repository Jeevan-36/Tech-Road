import React, { useRef } from "react";
import triggerPDFDownload from "./triggerPDFDownload";

const TopicHeader = ({ title, technology, count, handleNotesDownload }) => {
  const downloadLinkRef = useRef(null);
  const totalQuestions = count.totalCount; 
  const progressPercentage = (count.completedCount / totalQuestions) * 100;

  return (
    <div className="w-full flex justify-between px-4 py-2 items-center bg-slate-600 dark:bg-gray-800">
      <h3 className="text-white font-semibold text-xl">{title}</h3>

      <div className="w-10/12 p-6">
        <div className="w-full h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative">
          <div
            className="h-full bg-green-400 dark:bg-green-600 rounded-full transition-all duration-200 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>

          <div className="absolute right-0 top-0 text-gray-700 dark:text-white font-semibold px-2 py-1">
            {Math.round(progressPercentage)}%
          </div>
        </div>
      </div>

      <button
        className="bg-black p-2 text-white font-semibold hover:scale-105 transition-all duration-100 ease-in-out dark:bg-teal-500 dark:hover:bg-teal-700"
        onClick={async () => {
          const data = handleNotesDownload(technology, title);
          if(data.length===0)
          {
            alert("Please Add Notes");
            return;
          }
          const pdfUrl = await triggerPDFDownload(data);
          
          const link = document.createElement("a");
          link.href = pdfUrl;
          link.download = `${technology}_${title}.pdf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(pdfUrl); 
        }}
      >
        Download Notes
      </button>
    </div>
  );
};

export default TopicHeader;
