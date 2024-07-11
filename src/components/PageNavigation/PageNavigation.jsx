import React from "react";

function PageNavigation() {
  return (
    <div className="flex border rounded-full bg-blue-100 justify-center ml-[300px] mr-[300px] mt-8">
      <ul className="flex flex-row justify-center text-2xl font-normal space-x-16 p-4 pt-6 pb-6 text-gray-600 ">
        <a href="#" className="hover:underline hover:text-blue-600">
          Refer
        </a>
        <a href="#" className="hover:underline hover:text-blue-600">
          Benefits
        </a>
        <a href="#" className="hover:underline hover:text-blue-600">
          FAQs
        </a>
        <a href="#" className="hover:underline hover:text-blue-600">
          Support
        </a>
      </ul>
    </div>
  );
}

export default PageNavigation;
