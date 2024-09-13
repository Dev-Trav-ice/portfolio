import React, { useState } from "react";
import { navLinks } from "../constants/constants";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

function Navbar() {
  const path = useLocation();
  const [nav, setNav] = useState(false);
  return (
    <nav className="flexBetween max-container relative h-[70px] px-4">
      <h3 className="bold-20 text-white">
        MUGANDA <span className="text-blue-600">.</span>
      </h3>

      {/* Desktop links */}
      <div className="hidden lg:flex items-center gap-10">
        <ul className="flex gap-10">
          {navLinks.map((link, index) => {
            return (
              <Link to={link.path} key={index}>
                <li
                  className={
                    path.pathname === link.path
                      ? "text-blue-600 font-semibold scale-100 border-b-2 border-blue-600"
                      : "hover:text-blue-600 hover:transition-all hover:duration-500 text-[#BCC6CC]"
                  }
                >
                  {link.label}
                </li>
              </Link>
            );
          })}
        </ul>
        <button className="bg-transparent border-2  border-blue-600 hover:bg-blue-600 hover:text-white px-2 py-1 rounded-xl">
          Hire me
        </button>
      </div>

      {/* Mobile links */}
      {nav ? (
        <MdOutlineClose
          className="block lg:hidden"
          onClick={() => setNav(!nav)}
        />
      ) : (
        <RiMenu3Line className="block lg:hidden" onClick={() => setNav(!nav)} />
      )}

      {nav && (
        <>
          <div className="absolute z-50 top-16 right-0 w-[95vw] h-[calc(100vh-70px)] bg-black/95 flexCenter transition ease-in duration-['2s']">
            <div className="flex flex-col gap-8">
              <ul className="my-6 py-6">
                {navLinks.map((link, index) => {
                  return (
                    <Link to={link.path}>
                      <li
                        key={link.label}
                        className={
                          path.pathname === link.path
                            ? "text-blue-600 font-semibold mt-8"
                            : "hover:text-blue-600 text-[#BCC6CC] mt-8"
                        }
                      >
                        {link.label}
                      </li>
                    </Link>
                  );
                })}
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-xl">
                Hire me
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
