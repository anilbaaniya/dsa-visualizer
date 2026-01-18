import React from "react";
import { NavLink } from "react-router";

export default function OptionButton({ children, to }) {
  const ClassName =
    "border  border-stone-300 shadow-md shadow-black/20 px-10 rounded-xl  text-blue-800 py-2";

  if (to) {
    return (
      <NavLink
        className={`${ClassName}  transition-all duration-300 hover:bg-blue-50`}
        to={to}
      >
        {children}
      </NavLink>
    );
  }
  return (
    <button className={`${ClassName}  cursor-not-allowed`}>{children}</button>
  );
}
