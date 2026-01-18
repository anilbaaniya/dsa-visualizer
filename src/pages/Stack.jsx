import React from "react";
import StackTheory from "../features/stack/StackTheory";
import StackVisualization from "../features/stack/StackVisualization";
import StackCode from "../features/stack/StackCode";

export default function Stack() {
  return (
    <div className="py-14 bg-gray-100 flex flex-col items-center gap-8">
      <div className="text-center font-bold text-4xl  text-blue-900 tracking-wide border-b w-[90%] py-4 shadow-md shadow-black/30 border-stone-300">
        Stack
      </div>
      <StackTheory />
      <p className="text-3xl font-semibold">Perform the Operations</p>
      <StackVisualization />
      <StackCode />
    </div>
  );
}
