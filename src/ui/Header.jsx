import React from "react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="bg-linear-to-r/shorter  from-sky-100 to-gray-200 px-10 mt-3  mx-2 rounded-full py-5 shadow-xl z-10 shadow-black/10 tracking-wider flex justify-between">
      <NavLink to="home" className=" font-bold text-4xl">
        DSA <span className="text-blue-800">Visualizer</span>
      </NavLink>
      <NavLink
        to="/quiz"
        className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-stone-100 px-8 py-3 cursor-pointer font-semibold rounded-full"
      >
        Play Quiz
      </NavLink>
    </div>
  );
}
