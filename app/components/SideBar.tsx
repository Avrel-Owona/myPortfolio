import React, { useState } from "react";

const SideBar = () => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
  return (
    <div className="right-10 sm:right-14 bottom-8 absolute flex flex-col items-center">
      <div>
        <ul
          className={isChecked ? "flex flex-col items-center mb-3" : "hidden"}
        >
          <li className="font-thin text-white text-sm my-3">Fb</li>
          <li className="font-thin text-white text-sm my-3">In</li>
          <li className="font-thin text-white text-sm my-3">Tw</li>
        </ul>
      </div>
      <button
        onClick={() => setIsChecked(!isChecked)}
        className="w-12 h-12 relative reverse flex justify-center focus:outline-none focus:ring-offset-2 focus:ring-white"
      >
        <span
          className={`text-white w-full h-full justify-center items-center font-thin text-5xl absolute top-0  right-0 ${
            isChecked ? "rotate" : "rotate-none"
          }`}
        >
          +
        </span>
      </button>
    </div>
  );
};

export default SideBar;
