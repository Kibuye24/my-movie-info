"use client";
import * as React from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(true); // state to toggle nav open/close

  return (
    <nav className="bg-slate-900/50 w-full mb-4 py-3 px-[3%] flex flex-row font-semibold justify-between">
      <h3 className="text-red-600">
        <a href="/">My Movie Info</a>
      </h3>
      <div
        className={
          !isNavOpen ? "md:hidden block space-y-2 cursor-pointer" : "hidden"
        }
        onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
      >
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
      </div>
      <div
        className={isNavOpen ? "flex items-center justify-evenly" : "hidden"}
      >
        <ul className="flex flex-col w-full">
          <li className="hover:text-red-600  focus:text-red-600 cursor-pointer">
            <a href="/popular">Popular</a>
          </li>
          <li className="hover:text-red-600 focus:text-red-600 cursor-pointer">
            <a href="/upcoming">Upcoming</a>
          </li>
          <li className="hover:text-red-600   focus:text-red-600 cursor-pointer">
            <a href="/top-rated">Top Rated</a>
          </li>
        </ul>
      </div>
      <div
        className={isNavOpen ? "block" : "hidden"}
        onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
      >
        <svg
          className="h-8 w-8 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      <div className="hidden md:flex">
        <ul className="flex flex-row space-x-2 ">
          <li className="hover:text-red-600  focus:text-red-600 cursor-pointer">
            <a href="/popular">Popular</a>
          </li>
          <li className="hover:text-red-600 focus:text-red-600 cursor-pointer">
            <a href="/upcoming">Upcoming</a>
          </li>
          <li className="hover:text-red-600   focus:text-red-600 cursor-pointer">
            <a href="/top-rated">Top Rated</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
