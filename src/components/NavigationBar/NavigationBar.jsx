import React from "react";

function NavigationBar() {
  return (
    <div className="flex flex-row space-x-[420px] mt-8 m-auto justify-center">
      <ul>
        <div className="flex flex-row space-x-6">
          <li className="font-sans font-bold text-blue-500 text-3xl">
            accredian
          </li>
          <li>
            <button className="border rounded-md bg-blue-600 p-2 text-white font-normal text-lg">
              courses →
            </button>
          </li>
        </div>
      </ul>
      <ul className="flex flex-row space-x-8">
        <li className="mt-2 font-medium">Refer & Earn</li>
        <li className="mt-2 font-medium">Resources</li>
        <li className="mt-2 font-medium">About Us</li>
        <li>
          <button className="border rounded-md bg-gray-300 p-2 font-medium font-mono">
            Login
          </button>
        </li>
        <li>
          <button className="border rounded-md bg-blue-600 p-2 text-white font-normal font-mono">
            try for free
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
