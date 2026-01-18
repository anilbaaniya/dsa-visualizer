import React from "react";
import Welcome from "../ui/Welcome";
import { NavLink } from "react-router";
import HomePageAnimation from "../ui/HomePageAnimation";
import { Typewriter } from "react-simple-typewriter";

export default function HomePage() {
  return (
    <div className="relative h-full px-10 pt-14 bg-[url('/dsaImage.png')] bg-cover bg-top bg-no-repeat">
      <HomePageAnimation />
      <div className="px-10 py-15 font-semibold text-3xl flex flex-col gap-5">
        <div className="text-blue-700">
          <span className="text-black">Learn</span>
          <Typewriter
            words={[" DSA"]}
            loop={true}
            cursor
            cursorStyle=""
            typeSpeed={300}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </div>
        <p className="text-blue-900">
          Through <span className="text-stone-600">Interactive</span>
        </p>
        <p className="text-blue-800">Visualization</p>
      </div>
      <NavLink
        to="/dashboard"
        className=" hover:bg-blue-600 transition-all duration-300 inline-flex items-center justify-center h-14 w-40 ml-10 rounded-2xl text-stone-200 bg-blue-700 font-bold text-lg cursor-pointer"
      >
        Start Now ➜
      </NavLink>
    </div>
  );
}
