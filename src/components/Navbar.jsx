import React from "react";

export default function Navbar() {
  return (
    <header className="shadow-navShadow fixed left-0 top-0 z-10 w-full bg-white">
      <nav className="flex items-center justify-between">
        {/* logo */}
        <div className="flex shrink-0 p-4">
          <img
            src="/images/logo.png"
            alt="logo of the company"
            className="h-[2.25rem]"
          />
        </div>

        {/* nav links */}
        <ul className="text-mainRed flex items-center gap-4 md:gap-8">
          <li className="flex items-center border-r-[1px] pr-4 md:pr-8">
            <a
              href="#"
              className="flex items-center gap-2 py-5 hover:text-red-600"
            >
              <span className="hidden sm:inline">Destinations</span>
              <span>X</span>
            </a>
          </li>

          <li className="flex items-center">
            <label htmlFor="languages" className="sr-only">
              Language menu
            </label>
            <select
              name="languages"
              id="languages"
              className="text-mainRed cursor-pointer border-none bg-transparent py-5 outline-none hover:text-red-600"
            >
              <option value="english">En</option>
              <option value="norwegian">No</option>
            </select>
          </li>

          {/* tell me more link */}
          <li className="bg-mainRed text-fontWhite flex items-center px-2 py-5 text-lg font-medium uppercase tracking-tighter hover:bg-red-600 md:px-6">
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
