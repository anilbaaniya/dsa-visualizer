import React from "react";
import PrefixTheory from "../features/prefix/PrefixTheory";
import PrefixConverter from "../features/prefix/PrefixConverter";
import PrefixCode from "../features/prefix/PrefixCode";

export default function Postfix() {
  return (
    <div className="py-14 bg-gray-100 flex flex-col items-center gap-8">
      <div className="text-center font-bold text-4xl  text-blue-900 tracking-wide border-b w-[90%] py-4 shadow-md shadow-black/30 border-stone-300">
        Infix To Prefix
      </div>
      <PrefixTheory />
      <p className="text-3xl font-semibold">
        Convert Infix To Prefix Expression
      </p>
      <PrefixConverter />
      <PrefixCode />
    </div>
  );
}
