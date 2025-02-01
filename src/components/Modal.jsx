import React, { useState } from "react";

const Modal = ({
  handleModalToggle,
  addNotes,
  modalDetails,
}) => {
  const [inputValue, setInputValue] = useState(modalDetails.notes );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg w-7/12 relative mx-auto mt-12 transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
        
      
        <button
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-800"
          onClick={handleModalToggle}
          aria-label="Close modal"
        >
          ✖
        </button>

        <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
          Save Your Notes
        </h2>

        
        <textarea
          className="w-full p-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          placeholder="Write your notes here..."
          rows={13}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          aria-label="Enter your notes"
        ></textarea>

       
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            onClick={() => {
              addNotes(
                modalDetails.id,
                modalDetails.topic,
                modalDetails.technology,
                inputValue
              );
              handleModalToggle();
            }}
            aria-label="Save your notes"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
