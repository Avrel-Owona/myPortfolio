import React, { useState, useRef, useEffect } from "react";
import { Power3, TweenMax } from "gsap";
import Link from "next/link";

const SideBar = () => {
  let item = useRef(null);
  let insta = useRef(null);
  let gitHub = useRef(null);
  let face = useRef(null);
  let linked = useRef(null);
  console.log(item);
  function animations () {

  }

  useEffect(() => {
    console.log("item", item);
    TweenMax.to(gitHub, 0.2, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
    });
    TweenMax.to(face, 0.2, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      delay: 0.3,
    });
    TweenMax.to(linked, 0.2, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      delay: 0.6,
    });
    TweenMax.to(insta, 0.2, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      delay: 0.9,
    });
    TweenMax.to(item, 0.2, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      delay: 1.3,
    });
  }, []);
  const [isChecked, setIsChecked] = useState(true);
  console.log(isChecked);
  return (
    <div className="right-3 sm:right-14 bottom-3 sm:bottom-8 absolute flex flex-col items-center z-30">
      <div>
        <ul
          className={isChecked ? "flex flex-col items-center mb-3" : "hidden"}
        >
          <li
              ref={(el: any) => {
                gitHub = el;
              }}
              className="font-thin text-white text-xs sm:text-sm my-3 social cursor-pointer"
          >
            <a target='_blank' href="https://github.com/Avrel-Owona">
              Gh
            </a>
          </li>
          <li
              ref={(el: any) => {
                face = el;
              }}
              className="font-thin text-white text-xs sm:text-sm my-3 social cursor-pointer"
          >
            <a target='_blank' href="https://www.facebook.com/profile.php?id=100017129581148">
              Fb
            </a>
          </li>
          <li
            ref={(el: any) => {
              linked = el;
            }}
            className="font-thin text-white text-xs sm:text-sm my-3 social cursor-pointer"
          >
            <a target='_blank' href="https://www.linkedin.com/in/guy-owona-0a9371201/" className='cursor-pointer'>
              Li
            </a>
          </li>
          <li
            ref={(el: any) => {
              insta = el;
            }}
            className="font-thin text-white text-xs sm:text-sm my-3 social cursor-pointer"
          >
            <a target='_blank' href="https://www.instagram.com/sosa_levrai/">
              In
            </a>
          </li>
          <li
            ref={(el: any) => {
              item = el;
            }}
            className="font-thin text-white text-xs sm:text-sm my-3 social cursor-pointer"
          >
            <a target='_blank' href="https://twitter.com/AvrelOwona">
              Tw
            </a>
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
