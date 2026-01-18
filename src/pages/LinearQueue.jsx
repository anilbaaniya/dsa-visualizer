import React from "react";
import LinearQueueTheory from "../features/linearQueue/LinearQueueTheory";
import LinearQueueVisualization from "../features/linearQueue/LinearQueueVisualization";
import LinearQueueCode from "../features/linearQueue/LinearQueueCode";
export default function LinearQueue() {
  return (
    <div className="py-14 bg-gray-100 flex flex-col items-center gap-8">
      <div className="text-center font-bold text-4xl  text-blue-900 tracking-wide border-b w-[90%] py-4 shadow-md shadow-black/30 border-stone-300">
        Linear Queue
      </div>
      <LinearQueueTheory />
      <p className="text-3xl font-semibold">Perform the Operations</p>
      <LinearQueueVisualization />
      <LinearQueueCode />
    </div>
  );
}
