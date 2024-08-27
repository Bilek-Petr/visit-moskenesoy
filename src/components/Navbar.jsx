import React from "react";
import { Link } from "react-router-dom";

import { IoMenu, IoCloseOutline } from "react-icons/io5";

export default function Navbar({ toggleDestinations, isDestinationActive }) {
  return (
    <header className="fixed left-0 top-0 z-30 w-full bg-white shadow-navShadow">
      <nav className="flex items-center justify-between">
        {/* logo */}
        <Link to="/" className="flex shrink-0 p-4">
          <picture>
            <source
              media="(max-width: 639px)"
              srcSet="/images/logos/logo_mobile.png"
            />

            <img
              className="h-[2.25rem]"
              src="/images/logos/logo_desktop.png"
              alt="logo image"
            />
          </picture>
        </Link>

        {/* nav links */}
        <ul className="flex items-center gap-4 text-mainRed md:gap-8">
          <li className="flex items-center border-r-[1px] pr-4 md:pr-8">
            <button
              onClick={toggleDestinations}
              className="flex items-center gap-2 py-5 hover:text-red-600"
            >
              <span className="hidden sm:inline">Destinations</span>

              <div className="pt-1">
                {isDestinationActive ? (
                  <IoCloseOutline className="size-5" />
                ) : (
                  <IoMenu className="size-5" />
                )}
              </div>
            </button>
          </li>

          <li className="flex items-center">
            <label htmlFor="languages" className="sr-only">
              Language menu
            </label>
            <select
              name="languages"
              id="languages"
              className="cursor-pointer border-none bg-transparent py-5 text-mainRed outline-none hover:text-red-600"
            >
              <option value="english">En</option>
              <option value="norwegian">No</option>
            </select>
          </li>

          {/* tell me more link */}
          <li className="flex items-center bg-mainRed px-2 py-5 text-lg font-medium uppercase tracking-tighter text-fontWhite hover:bg-red-600 md:px-6">
            <a href="#" className="flex items-center">
              <span>Tell Me More</span>
              {/* <span>ARROW ICON</span> */}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
