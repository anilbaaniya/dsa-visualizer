import React from "react";
import DequeTheory from "../features/deque/DequeTheory";
import DequeVisualization from "../features/deque/DequeVisualization";
import DequeCode from "../features/deque/DequeCode";

export default function Deque() {
  return (
    <div className="py-14 bg-gray-100 flex flex-col items-center gap-8">
      <div className="text-center font-bold text-4xl  text-blue-900 tracking-wide border-b w-[90%] py-4 shadow-md shadow-black/30 border-stone-300">
        Deque
      </div>
      <DequeTheory />
      <p className="text-3xl font-semibold">Perform the Operations</p>
      <DequeVisualization />
      <DequeCode />
    </div>
  );
}
