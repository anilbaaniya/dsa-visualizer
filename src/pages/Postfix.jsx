import React from "react";
import PostfixTheory from "../features/postfix/PostfixTheory";
import PostfixConverter from "../features/postfix/PostfixConverter";
import PostfixCode from "../features/postfix/PostfixCode";

export default function Postfix() {
  return (
    <div className="py-14 bg-gray-100 flex flex-col items-center gap-8">
      <div className="text-center font-bold text-4xl  text-blue-900 tracking-wide border-b w-[90%] py-4 shadow-md shadow-black/30 border-stone-300">
        Infix To Postfix
      </div>
      <PostfixTheory />
      <p className="text-3xl font-semibold">
        Convert Infix To Postfix Expression
      </p>
      <PostfixConverter />
      <PostfixCode />
    </div>
  );
}
