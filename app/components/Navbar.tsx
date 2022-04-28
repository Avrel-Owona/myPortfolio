import React, { useState } from "react";
import Link from "next/link";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-10 shadow-lg bg-black absolute">
      <div className="flex items-center h-20 w-full">
        {/*=========== NAVBAR PC ================*/}
        <div className="flex items-center mx-5 sm:mx-14 mt-0 sm:mt-6 justify-end flex-row-reverse sm:flex-row sm:justify-between w-full">
          <div className="justify-center flex items-center flex-shrink-0">
            <Link href={"/"}>
              <h1 className="font-bold text-3xl cursor-pointer uppercase text-white">
                ΛV
              </h1>
            </Link>
          </div>
          <button className="relative w-12 sm:w-14 flex h-10 flex-col items-end justify-center focus:outline-none focus:ring-offset-2 focus:ring-white">
            <input className='check-button opacity-0 h-full w-full absolute cursor-pointer bg-red-500 w-full h-full border'/>
            <div className='burger_wrapper flex flex-col w-full items-start sm:items-end'>
              <span className="span w-8 sm:w-full bg-white my-1"></span>
              <span className="span w-8 sm:w-7 bg-white my-1"></span>
            </div>
          </button>
          {/*=========== NAVBAR PHONE ================*/}
        </div>
      </div>
      <div className="md:hidden mx-10">
        {isOpen ? (
          <>
            {/*=============== Menu options =================>*/}
            <ul className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href={"/login"}>
                <li className="cursor-pointer text-white px-3 py-2 text-base">
                  Login
                </li>
              </Link>
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
