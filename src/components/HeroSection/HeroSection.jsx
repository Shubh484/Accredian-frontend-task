import React, { useState } from "react";
import ReferalForm from "../ReferalForm/ReferalForm";

function HeroSection() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className=" h-full border rounded-md bg-blue-100 m-8 flex flex-col justify-center items-center ">
      <p className="text-7xl font-bold flex justify-center">
        Let's Learn <br /> & Earn
      </p>
      <div className="text-3xl font-normal font-mono flex flex-col  mt-12">
        <div className="flex justify-center"> Get a chance to win</div>
        <div className="flex justify-center pt-6">
          <span className="pt-2">upto</span>
          <span className="text-5xl text-blue-600 font-semibold pl-4">
            Rs. 15,000
          </span>
        </div>
      </div>
      <button
        onClick={handleOpen}
        className="border rounded-lg p-4 pl-6 pr-6 mt-8 bg-blue-500 text-xl text-white"
      >
        Refer Now
      </button>
      <div>{open && <ReferalForm handleClose={handleClose} />}</div>
    </div>
  );
}

export default HeroSection;
