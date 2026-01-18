import React from "react";
import { NavLink } from "react-router";
import { HiCircleStack } from "react-icons/hi2";
import OptionButton from "../../ui/OptionButton";

export default function Stack() {
  return (
    <div className="   flex flex-col gap-6  pb-6 border border-stone-200 rounded-2xl ">
      <header className=" bg-stone-100  px-8 py-6 font-bold text-3xl rounded-t-2xl flex gap-4 items-center">
        <span>
          <HiCircleStack className="text-blue-500" />
        </span>
        <span>Stack</span>
      </header>
      <div className="px-8  font-semibold text-xl">
        {/* <NavLink className="px-6 py-2  rounded-2xl text-stone-800  font-semibold  cursor-pointer">
          Operations
        </NavLink> */}
        <p>Operations</p>
        <div className="flex pt-6 gap-6">
          <OptionButton>Push</OptionButton>
          <OptionButton>Pop</OptionButton>
          <OptionButton>Peek</OptionButton>
          <OptionButton to="/stack">Perform Operations ➜</OptionButton>
        </div>
      </div>
      <div className="px-8  font-semibold text-xl">
        {/* <NavLink className="px-6 py-2  rounded-2xl text-stone-800 font-semibold  cursor-pointer">
          Polish Notations Evaluation
        </NavLink> */}
        <p>Converter</p>
        <div className="flex pt-6 gap-6">
          <OptionButton to="/postfix">Infix to Postfix</OptionButton>
          <OptionButton to="/prefix">Infix to Prefix</OptionButton>
        </div>
      </div>
    </div>
  );
}
