import React, { useState, useRef, useEffect } from "react";
import { Power3, TweenMax } from "gsap";

const SideBar = () => {
  let item = useRef(null);
  let insta = useRef(null);
  let face = useRef(null);
  let linked = useRef(null);
  console.log(item);

  useEffect(() => {
    console.log("item", item);
    TweenMax.to(item, 0.2, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
    });
    TweenMax.to(insta, 0.2, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      delay: 0.3,
    });
    TweenMax.to(face, 0.2, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      delay: 0.6,
    });
    TweenMax.to(linked, 0.2, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      delay: 0.9,
    });
  }, []);
  const [isChecked, setIsChecked] = useState(true);
  console.log(isChecked);
  return (
    <div className="right-10 sm:right-14 bottom-8 absolute flex flex-col items-center">
      <div>
        <ul
          className={isChecked ? "flex flex-col items-center mb-3" : "hidden"}
        >
          <li
            ref={(el: any) => {
              linked = el;
            }}
            className="font-thin text-white text-sm my-3 social"
          >
            Li
          </li>
          <li
            ref={(el: any) => {
              face = el;
            }}
            className="font-thin text-white text-sm my-3 social"
          >
            Fb
          </li>
          <li
            ref={(el: any) => {
              insta = el;
            }}
            className="font-thin text-white text-sm my-3 social"
          >
            In
          </li>
          <li
            ref={(el: any) => {
              item = el;
            }}
            className="font-thin text-white text-sm my-3 social"
          >
            Tw
          </li>
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
